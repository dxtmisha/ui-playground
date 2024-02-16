#!/usr/bin/env ts-node

import { program } from 'commander'
import { DesignProject } from '../classes/design/DesignProject'

program
  .command('project')
  .argument('[template]')
  .description('Initializes the file for working with Vue\r\nИнициализирует файл для работы с Vue')
  .action((template: string = 'vue') => {
    new DesignProject(template).make()
  })

program
  .command('build')
  .argument('[template]')
  .description('Transfer the compiled files to another location\r\nПеренести скомпилированные файлы в другое место')
  .action((template: string = 'vue') => {
    new DesignProject(template).makeBuild()
  })

program.parse(process.argv)
