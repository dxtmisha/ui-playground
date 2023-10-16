#!/usr/bin/env ts-node

import { config } from 'dotenv'
import { program } from 'commander'

import { Styles } from '../classes/services/styles/Styles.ts'
import { DesignConstructor } from '../classes/services/designs/DesignConstructor.ts'

config()

program
  .command('component <name>')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((/* name, options */) => {
    new Styles().init()
    new DesignConstructor('md3.button').init()
    // console.log()
    // const a = new Properties().get()
  })

program.parse(process.argv)
