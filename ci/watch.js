#!/usr/bin/env node

/**
 * Watch files.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { watch } = require('sugo-ci-example')

watch(require.resolve('./build.js'), {})
