module.exports = {
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        // Can I remove these now?
        "ecmaFeatures": {
        "impliedStrict": true,
        "classes": true
        }
    },
    "env": {
        "browser": true,
        "node": true,
        "jquery": true,
        "jest": true
    },
    "plugins": [
        "@typescript-eslint",
        "prettier",
        "react",
        "react-hooks"
    ],
    "rules": {}
};