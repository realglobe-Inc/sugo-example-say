/**
 * Run actor
 * @function actor
 * @returns {Promise}
 */
'use strict'

const pkg = require('../package.json')
const sugoSpot = require('sugo-actor')
const co = require('co')
const debug = require('debug')('sugo:example:say:actor')
const noop = require('sugo-module-noop')
const say = require('sugo-module-say')
const colorprint = require('colorprint')
const pudding = require('pudding')({ lang: 'en' })

let configs = require('./configs')

/** @lends actor */
function actor () {
  debug('Example actor invoked')
  let { port, hostname } = configs()
  let url = `http://${hostname}:${port}/actors`

  let { ACTOR_KEY } = process.env

  let context = actor.newContext()
  let key = ACTOR_KEY || context.key

  colorprint.notice(`[${pkg.name}] Running actor script...`)
  colorprint.trace('Settings: %s', { port, hostname, key })

  return co(function * () {
    let instance = sugoSpot(url, {
      key,
      modules: {
        noop: noop(),
        say: say()
      },
      force: true
    })
    yield instance.connect()
    return instance
  })
}

Object.assign(actor, {
  newContext () {
    return pudding.explode({
      key: '${spinalcase([this.color, this.fish].join("-")).trim()}'
    }, 1)[ 0 ]
  }
})

module.exports = actor
