#!/usr/bin/env ts-node

import { config } from 'dotenv'
import { program } from 'commander'

import { Styles } from '../classes/services/styles/Styles.ts'
import { DesignConstructor } from '../classes/services/designs/DesignConstructor.ts'
import { DesignComponent } from '../classes/services/designs/DesignComponent.ts'

config()

program
  .command('component <name>')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name: string) => {
    new Styles().init()
    new DesignConstructor(name.replace(/^([^.]+)/, 'd')).init()
    new DesignComponent(name).init()
  })

program.parse(process.argv)
