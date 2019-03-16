module.exports = {
    "extends": [
        "standard",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint",
        "prettier/react",
        "prettier/standard"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
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
        "@typescript-eslint",
        "prettier",
        "react",
        "react-hooks",
        "standard"
    ],
    "rules": {
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
            ],
            "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 80,
            }
            ],
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn"
    }
};