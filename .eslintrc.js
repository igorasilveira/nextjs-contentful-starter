module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    'import/extensions': [0, { extensions: ['.ts', '.tsx'] }],
    '@typescript-eslint/indent': [2, 2],
    'react/jsx-props-no-spreading': [0, 0],
    'react/react-in-jsx-scope': [0, 0],
    'react/require-default-props': [0, 0],
    '@typescript-eslint/explicit-module-boundary-types': [0, 0],
    'jsx-a11y/anchor-is-valid': [0, 0],
    'no-param-reassign': [2, { props: false }],
  },
};
