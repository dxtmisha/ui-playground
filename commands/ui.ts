#!/usr/bin/env ts-node

import { config } from 'dotenv'
import { program } from 'commander'

import * as button from '../md3/tokens/components/button.json'
import { PropertiesStandard } from '../classes/services/properties/PropertiesStandard.ts'
import { PropertyListOrData, PropertyType } from '../types/property.ts'
import { PropertiesType } from '../classes/services/properties/PropertiesType.ts'

config()

program
  .command('component <name>')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name, options) => {
    console.log(PropertiesType.getTypeInName('var|name'))
    console.log(PropertiesType.getTypeInName('@name'))
    console.log(PropertiesType.getTypeInName('name'))
    console.log(PropertiesType.getBySymbol('::'))
    console.log(PropertiesStandard.to(button as PropertyListOrData))
    // const a = new Properties().get()
  })

program.parse(process.argv)
