const package = require('./package.json');

module.exports = {
    "extends": [
        "./.eslintrc.base.js",
        ...package.files
        .filter(name => !name.includes("/"))
        .map(ruleFile => `./${ruleFile}`)
    ]
};