const packages = require('./package.json');
module.exports = {
    "extends": [
        "standard",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
        "prettier/standard"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "script",
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
        "prettier",
        ...packages.files
          .filter(name => !name.includes("/") && name !== "index.js")
          .map(ruleModule => ruleModule.replace(/\.js$/, "")),
    ]
};