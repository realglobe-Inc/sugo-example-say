#!/usr/bin/env node

/**
 * Compile files
 */

'use strict'

process.chdir(`${__dirname}/..`)

const { SgExampleStyle } = require('sugo-react-example')
const React = require('react')
const installIcons = require('apeman-react-icon/install')

const { exampleCompile } = require('sugos-ci')
const { color } = require('../lib/configs')()

let theme = SgExampleStyle.styleContent(
  React.createElement(SgExampleStyle, { dominant: color })
)

installIcons(`${__dirname}/../ui`)
  .then(() =>
    exampleCompile(theme, {})
  )

