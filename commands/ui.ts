#!/usr/bin/env ts-node

import { config } from 'dotenv'
import { program } from 'commander'

import button from '../md3/tokens/components/button.json'
import { PropertiesStandard } from '../classes/services/properties/PropertiesStandard.ts'
import { PropertyListOrData, PropertyType } from '../types/property.ts'
import { PropertiesTypes } from '../classes/services/properties/PropertiesTypes.ts'
import { PropertiesKeys } from '../classes/services/properties/PropertiesKeys.ts'

config()

program
  .command('component <name>')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name, options) => {
    console.log(PropertiesStandard.to(button as any as PropertyListOrData)?.filled?.value)
    // const a = new Properties().get()
  })

program.parse(process.argv)
