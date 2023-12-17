module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['chakra-ui', 'simple-import-sort'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  // No need for eslint to run on our generated custom files until theres a strong use case
  ignorePatterns: ['src/theme/*'],
  rules: {
    'chakra-ui/props-order': 'error',
    'chakra-ui/props-shorthand': [
      'error',
      {
        noShorthand: true,
      },
    ],
    'no-console': 'warn',
    // Rules for auto sort of imports
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or
          // `@` followed by a letter.
          ['^@?\\w'],
          // Root imports
          ['^(~)(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
  },
}
