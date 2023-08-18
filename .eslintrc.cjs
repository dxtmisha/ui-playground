module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2022": true
    },
    "extends": [
        "plugin:vue/vue3-essential",
        "@vue/eslint-config-standard",
        "@vue/eslint-config-typescript/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}
