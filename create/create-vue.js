#!/usr/bin/env ts-node

const requireFs = require('fs')
const requirePath = require('path')
const {exec} = require('child_process')

const PROJECT_NAME = 'vue'
const DIR_PROJECT = 'temp'
const FILE_PACKAGE = 'package.json'

const filePackage = requirePath.join(DIR_PROJECT, FILE_PACKAGE)
const filePackageData = {
    name: '@cc/coral-design',
    private: false,
    version: '0.0.0-dev',
    type: 'commonjs',
    devDependencies: {
        commander: '^11.1.0',
        dotenv: '^16.4.1',
        "ts-node": '^10.9.2',
        typescript: '^5.3.3',
        ui: 'git+https://github.com/dxtmisha/ui-playground.git'
    }
}

if (requireFs.existsSync(DIR_PROJECT)) {
    console.warn('Проект существует!')
    return
}

requireFs.mkdirSync(DIR_PROJECT)
requireFs.writeFileSync(
    filePackage,
    JSON.stringify(filePackageData)
)

console.log('-- Download')

exec(`cd ${DIR_PROJECT};npm install`, (error) => {
    if (error) {
        console.error('Error:', error)
        return
    }

    console.log('-- Install')

    exec(`cd ${DIR_PROJECT};npx ts-node ./node_modules/ui/commands/ui-project.ts ui-project ${PROJECT_NAME}`, (error) => {
        if (error) {
            console.error(error)
            return
        }

        console.log('-- Update')
    })
})
