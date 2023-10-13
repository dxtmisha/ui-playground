#!/usr/bin/env ts-node

import { config } from 'dotenv'
import { program } from 'commander'

import { DesignStructure } from '../classes/services/designs/DesignStructure.ts'

config()

program
  .command('component <name>')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((/* name, options */) => {
    new DesignStructure('md3/button').get()
    // console.log()
    // const a = new Properties().get()
  })

program.parse(process.argv)
