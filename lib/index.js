/**
 * SUGOS example project to invoke &#x60;say&#x60; command on remote MAC (You need OSX system to run this app!)
 * @module sugo-example-say
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get actor () { return d(require('./actor')) },
  get caller () { return d(require('./caller')) },
  get cloud () { return d(require('./cloud')) },
  get configs () { return d(require('./configs')) },
  get ui () { return d(require('./ui')) }
}
