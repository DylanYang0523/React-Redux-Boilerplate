module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "extends": [
        "airbnb"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "max-len": [ "error", {
            "code": 120,
            "ignoreUrls": true,
            "ignoreComments": true
        }],
        "react/jsx-indent": [
            "error",
            4
        ],
        "react/jsx-indent-props": [
            "error",
            4
        ],
        "react/prefer-stateless-function": [
            "off"
        ],
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to", "hrefLeft", "hrefRight" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
        }],
        "react/prop-types": [
            "error", {
                "ignore": [ "children" ]
        }],
        "react/forbid-prop-types": [
            "error", {
                "forbid": [ "any" ],
                checkContextTypes: false,
                checkChildContextTypes: false
            }
        ],
        "react/no-array-index-key": "off",
    }
}
