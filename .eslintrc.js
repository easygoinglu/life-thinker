module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
          "jsx": true,
          "experimentalObjectRestSpread": true
      }
  }, 
  "env": {
      "browser": true,
      "node": true
  },
  "plugins": [
    "react"
  ],    
  "rules": {
      "quotes": ["error", "double"]
  } 
};