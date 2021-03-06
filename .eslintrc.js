module.exports = {
  "env": {
      "amd": true,
      "browser": true,
      "es6": true,
      "node": true,
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1,
      "react/react-in-jsx-scope": 1
    },
    "overrides": [
      {
        "files": ["**/*.ts", "**/*.tsx"],
        "rules": {
          "no-unused-vars": ["off"],
          "no-undef": ["off"]
        }
      }
    ],
};
