module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "prettier",
    "@typescript-eslint/eslint-plugin"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
    /*'plugin:storybook/recommended',*/
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  //*ignorePatterns: ['./.eslintrc.js'],*/
  rules: {
    "prettier/prettier": ["error", { singleQuote: false }],
    "react/prop-types": 0,
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
