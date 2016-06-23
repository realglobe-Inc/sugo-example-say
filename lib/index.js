/**
 * SUGOS example project to invoke &#x60;say&#x60; command on remote MAC
 * @module sugo-example-say
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get cloud () { return d(require('./cloud')) },
  get configs () { return d(require('./configs')) },
  get spot () { return d(require('./spot')) },
  get terminal () { return d(require('./terminal')) },
  get ui () { return d(require('./ui')) }
}
