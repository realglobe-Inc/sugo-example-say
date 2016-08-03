/**
 * Test case for actor.
 * Runs with mocha.
 */
'use strict'

const actor = require('../lib/actor.js')
const hub = require('../lib/hub.js')
const assert = require('assert')
const filedel = require('filedel')
const co = require('co')
const injectmock = require('injectmock')
const aport = require('aport')
const asleep = require('asleep')

describe('actor', () => {
  let storage = `${__dirname}/../tmp/testing-actor`
  before(() => co(function * () {
    let port = yield aport()
    injectmock(process.env, 'STORAGE', storage)
    injectmock(process.env, 'PORT', port)
  }))

  after(() => co(function * () {
    injectmock.restoreAll()
    yield filedel(`${storage}/**/*.*`)
  }))

  it('Spot', () => co(function * () {
    let hubInstance = yield hub()
    let actorInstance = yield actor()
    yield asleep(300)
    yield actorInstance.disconnect()
    yield hubInstance.close()
  }))
})

/* global describe, before, after, it */
