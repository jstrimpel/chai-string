module.exports = {
  "parserOptions": {
    "ecmaVersion": 6
  },
  "env": {
    "node": true,
    "mocha": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "valid-jsdoc": [
      "error", {
        "requireReturnDescription": false
      }
    ]
  }
};
