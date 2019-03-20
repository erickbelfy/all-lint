const package = require('./package.json');

module.exports = {
    extends: [
        "./.eslintrc.base.js",
        ...package.plugin_files
            .filter(name => !name.includes("/"))
            .map(ruleFileName => `./${ruleFileName}`)
    ]
};