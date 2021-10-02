module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
      globalReturn: true,
    },
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@typescript-eslint',
    'css-modules',
    'react-hooks',
    'simple-import-sort',
    'import',
    'prettier',
    'jest',
  ],
  settings: {
    node: {
      tryExtensions: ['.js', '.jsx', '.json', '.ts', '.d.ts', '.tsx'],
      resolvePaths: ['node_modules/@types'],
    },
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'eslint:recommended',
    'stylelint',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    // Single quotes preferred
    quotes: [2, 'single', { avoidEscape: true }],
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],
    // Allow TS infer types without explicitly specifying them
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    // Simple import sort is already used
    'import/order': 'off',
    // Turn off semicolons in unnecessary places
    '@typescript-eslint/semi': 'off',
    semi: 'off',
    // Remove handler that brings problems with text in JSX
    'react/jsx-one-expression-per-line': 'off',
    // Unnecessary linebreaks
    'object-curly-newline': 'off',
    'react/jsx-curly-newline': 'off',
    'no-confusing-arrow': 'off',
    'operator-linebreak': 'off',
    // Remove error when working with redux state in slice
    'no-param-reassign': 'off',
    // Remove incompatible behavior with indent
    '@typescript-eslint/indent': 'off',
    // Remove due to possibility of handled auto-assigned undefined props
    'react/require-default-props': 'off',
    'implicit-arrow-linebreak': 'off',
    // Prevents self import of foo.js from foo.js
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
    'import/prefer-default-export': 'off',
    // Allows not to destruct your props
    'react/destructuring-assignment': 'off',
    // Allows to spread props into your JSX: <div {...props} />
    'react/jsx-props-no-spreading': 'off',
    // Disable prop types (we are using TS)
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 'off',

    // Imports should be on top of the file
    'import/first': 'error',
    // Splits imports from the rest of the code with new line
    'import/newline-after-import': 'error',
    // Prevents import duplicates
    'import/no-duplicates': 'error',

    // TODO: Add monorepo rules later

    /*** IDE fixes ***/
    // Ignore unused variables that starts with `_`, for example `.map((_el, idx) => idx))`
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [2, { args: 'all', argsIgnorePattern: '^_' }],
    'no-undef': 'off',

    '@typescript-eslint/ban-types': 'off',

    // Fixes the bug of enums to be suspected shadowing itself
    // https://stackoverflow.com/a/65768375/4239577
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    // Starting from React 17.0, React import is not required
    'react/react-in-jsx-scope': 'off',

    // Allows to extract expect sentences into shared functions
    'jest/expect-expect': 'off',

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      { functions: false, classes: false, variables: false, typedefs: false },
    ],

    // Allows to sort and separate some of the imports into groups
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `react` related packages come first.
          ['^react$', '^lodash', '^clsx', '^react'],

          // TODO: When used in the inside of a scope, add ['^@scope'],

          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css'],
        ],
      },
    ],
  },
}
