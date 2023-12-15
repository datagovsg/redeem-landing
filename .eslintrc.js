module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['chakra-ui'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'chakra-ui/props-order': 'error',
    'chakra-ui/props-shorthand': [
      'error',
      {
        noShorthand: true,
      },
    ],
  },
}
