const package = require('./package.json');
module.exports = {
    extends: [
        'standard',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
        "prettier/standard",
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
    env: {
        "browser": true,
        "node": true,
        "jquery": true,
        "jest": true
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: { jsx: true },
        },
    ],
    plugins: [
        ...package.plugin_files
        .filter(name => !name.includes("/") && name !== "index.js")
        .map(ruleFileName => ruleFileName.replace(/\.js$/, ""))
    ],
};