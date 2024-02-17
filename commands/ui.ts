#!/usr/bin/env ts-node

import { program } from 'commander'

import { DesignUi } from '../classes/design/DesignUi.ts'

program
  .command('component')
  .argument('[name]')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name: string) => {
    new DesignUi(name).make()
  })

program.parse(process.argv)
