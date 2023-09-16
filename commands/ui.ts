#!/usr/bin/env ts-node

import { config } from 'dotenv'
import { program } from 'commander'
import { PropertiesPath } from '../classes/services/properties/PropertiesPath.ts'

config()

program
  .command('component <name>')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name, options) => {
    console.log(new PropertiesPath(['d', 'md2']).getDesigns())
    console.log(new PropertiesPath(['d', 'md2']).toAll('test', (path, design) => {
      console.log(path, design)
      return { a: { value: 'b' } }
    }))
    // const a = new Properties().get()
  })

program.parse(process.argv)
