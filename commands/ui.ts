import { program } from 'commander'
import { config } from 'dotenv'

config()

program
  .command('component <name>')
  .description('Adding or updating a component in accordance with design tokens\r\nДобавление или обновление компонента в соответствии с дизайн-токенами')
  .action((name, options) => {
    console.log(name, options)
  })

program.parse(process.argv)
