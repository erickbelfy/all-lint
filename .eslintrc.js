const package = require('./package.json');
const reactRules = require('./react');
const typescriptRules = require('./typescript-rules');
const mainRules = require('./best-practices');
const standardRules = require('./standard');

module.exports = {
    extends: [
        "standard",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "prettier",
        "prettier/@typescript-eslint",
        "prettier/babel",
        "prettier/react",
        "prettier/standard",
    ],
    plugins: [
        '@typescript-eslint',
        'babel',
        'html',
        'prettier',
        'react',
        'react-hooks'
    ],
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2018,
        sourceType: "script",
        // Can I remove these now?
        ecmaFeatures: {
          impliedStrict: true,
          classes: true,
          jsx: true
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
            parserOptions: { ecmaFeatures: {jsx: true} },
            rules: {
                ...typescriptRules.rules
            }
        },
    ],
    rules: {
        ...mainRules.rules,
        ...standardRules.rules,
        ...reactRules.rules,
    },
    settings: {
        react: {
        version: '16'
        }
    }
};