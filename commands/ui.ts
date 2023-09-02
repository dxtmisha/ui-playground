import { config } from 'dotenv'
import { program } from 'commander'

import { Properties } from '../classes/services/properties/Properties.ts'

config()

program
  .command('component <name>')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name, options) => {
    console.log(name, options, new Properties())
  })

program.parse(process.argv)
