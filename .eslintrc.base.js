const package = require('./package.json');
module.exports = {
    extends: [
        "standard",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
        "prettier/standard"
    ],
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2018,
        sourceType: "script",
        // Can I remove these now?
        ecmaFeatures: {
          impliedStrict: true,
          classes: true
        }
    },
    "overrides": [
      {
        files: ["*.ts", "*.tsx"],
        parserOptions: {
          parser: "@typescript-eslint/parser"
        },
        rules: {
          "@typescript-eslint/indent": "error"
        }
      }
    ],
    env: {
        "es6": true,
        "browser": true,
        "node": true,
        "jquery": true,
        "jest": true
    },
    plugins: [
        "prettier",
        ...package.plugin_files
          .filter(name => !name.includes("/") && name !== "index.js")
          .map(ruleModule => ruleModule.replace(/\.js$/, "")),
    ]
};