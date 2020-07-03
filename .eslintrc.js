module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["airbnb-base", "eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "no-console": "off",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
