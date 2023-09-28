#!/usr/bin/env ts-node

import { config } from 'dotenv'
import { program } from 'commander'

import { PropertiesPath } from '../classes/services/properties/PropertiesPath.ts'
import { PropertiesMain } from '../classes/services/properties/PropertiesMain.ts'
import { Properties } from '../classes/services/properties/Properties.ts'
import { Styles } from '../classes/services/styles/Styles.ts'

config()

program
  .command('component <name>')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name, options) => {
    new Styles().init()
    // console.log()
    // const a = new Properties().get()
  })

program.parse(process.argv)
