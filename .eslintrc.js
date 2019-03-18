const package = require('./package.json');
const reactRules = require('./react');
const typescriptRules = require('./@typescript-eslint');
const mainRules = require('./index');
const standardRules = require('./standard');

module.exports = {
    extends: [
        'standard',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
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
    rules: {
        ...mainRules.rules,
        ...standardRules.rules,
        ...reactRules.rules,
        ...typescriptRules.rules
    },
    plugins: [
        '@typescript-eslint',
        'html',
        'prettier',
        'react-hooks'
    ],
    settings: {
        react: {
        version: '16'
        }
    }
};