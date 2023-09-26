module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint', 
    'eslint-plugin-import-helpers'
  ],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        'newlinesBetween': 'always',
        'groups': [
            ['/^node/'],
            '/^~/',
            'module',
            ['parent', 'sibling', 'index']
        ],
        'alphabetize': {
            'order': 'asc',
            'ignoreCase': true
        }
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": ["PascalCase"]
      }
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
      },
    ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}
