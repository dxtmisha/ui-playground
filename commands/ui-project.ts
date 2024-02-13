#!/usr/bin/env ts-node

import { program } from 'commander'
import { DesignProject } from '../classes/design/DesignProject'

program
  .command('ui-project')
  .argument('[template]')
  .description('Initializes the file for working with Vue\r\nИнициализирует файл для работы с Vue')
  .action((template: string = 'vue') => {
    new DesignProject(template).make()
  })

program.parse(process.argv)
