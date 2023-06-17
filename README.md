# BigDay ESLint config

## Whats included?

- Standard config base;
- Import helpers plugin;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

> ⚠️ If you have used Prettier, please disable or uninstall it to avoid conflicts.

1. Install the dependencies
```
npm i -D eslint @bigdayco/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:
```
{
  "extends": "@bigdayco/eslint-config/react"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

## License
[MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)