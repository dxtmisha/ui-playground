#!/usr/bin/env ts-node

import { program } from 'commander'
// import { DesignProject } from '../classes/design/DesignProject'

program
  .command('ui-build')
  .description('Transfer the compiled files to another location\r\nПеренести скомпилированные файлы в другое место')
  .action(() => {

  })

program.parse(process.argv)
