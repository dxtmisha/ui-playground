#!/usr/bin/env ts-node

import { config } from 'dotenv'
import { program } from 'commander'

import { PropertiesSettings } from '../classes/services/properties/PropertiesSettings.ts'
import { PropertiesPath } from '../classes/services/properties/PropertiesPath.ts'

config()

program
  .command('component <name>')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name, options) => {
    console.log(new PropertiesSettings(new PropertiesPath(['d', 'md2', 'md3'])).get())
    // const a = new Properties().get()
  })

program.parse(process.argv)
