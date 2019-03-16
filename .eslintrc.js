module.exports = {
    "extends": [
        "./.eslintrc.base.js",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "prettier",
        "react",
        "react-hooks",
        "standard"
    ]
};