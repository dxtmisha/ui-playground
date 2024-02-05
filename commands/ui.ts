#!/usr/bin/env ts-node

import { program } from 'commander'

import { DesignCommand } from '../classes/design/DesignCommand.ts'

program
  .command('component')
  .argument('[name]')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name: string) => {
    new DesignCommand(name).init()
  })

program.parse(process.argv)
