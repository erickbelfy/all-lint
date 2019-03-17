const packages = require('./packages.json');

module.exports = {
    "extends": [
        "./.eslintrc.base.js",
        ...packages.files
        .filter(name => !name.includes("/"))
        .map(ruleFile => `./${ruleFile}`)
    ]
};