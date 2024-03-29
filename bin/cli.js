#!/usr/bin/env node
/**
 * CLI of sugo-demo-example
 */
'use strict'

const program = require('commander')
const execcli = require('execcli')
const { version, description } = require('../package')

program
  .version(version)
  .description(description)

function run (script) {
  execcli('node', [ script ], {
    env: process.env
  })
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
  .action(() => run(`${__dirname}/cloud.js`))

program
  .command('actor')
  .description('Run example actor')
  .action(() => run(`${__dirname}/actor.js`))

program
  .command('caller')
  .description('Run example caller')
  .action(() => run(`${__dirname}/caller.js`))

program.parse(process.argv)

// Check sub command
{
  let command = process.argv[ 2 ]
  if (!command) {
    program.outputHelp()
    process.exit(0)
  }
}
