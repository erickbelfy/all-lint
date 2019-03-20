const package = require('./package.json');

module.exports = {
    extends: [
        "./.eslint.base.js",
        ...package.plugin_files
            .filter(name => !name.includes("/"))
            .map(ruleFileName => `./${ruleFileName}`)
    ]
};