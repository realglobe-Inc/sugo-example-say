#!/usr/bin/env node
/**
 * CLI of sugo-example-say
 */
'use strict'

const program = require('commander')
const execcli = require('execcli')
const { version, description } = require('../package')

program
  .version(version)
  .description(description)

function run (script) {
  execcli('node', [ script ])
    .then(() => {
      process.exit(0)
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}

program
  .command('cloud')
  .description('Run example cloud')
  .action(() => run(`${__dirname}/bin/cloud.js`))

program
  .command('spot')
  .description('Run example spot')
  .action(() => run(`${__dirname}/bin/spot.js`))

program
  .command('terminal')
  .description('Run example terminal')
  .action(() => run(`${__dirname}/bin/terminal.js`))

program.parse(process.argv)

// Check sub command
{
  let command = process.argv[ 2 ]
  if (!command) {
    program.outputHelp()
    process.exit(0)
  }
}
