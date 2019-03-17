const packages = require('./package.json');

module.exports = {
    "extends": [
        "./.eslintrc.base.js",
        ...packages.files
        .filter(name => !name.includes("/"))
        .map(ruleFile => `./${ruleFile}`)
    ]
};