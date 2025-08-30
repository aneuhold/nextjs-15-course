import reactConfig from '@aneuhold/eslint-config/src/react-config.js';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
export default [
  ...reactConfig,
  {
    // other override settings. e.g. for `files: ['**/*.test.*']`
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      // This should probably be added to the base. Not a big fan of this rule.
      '@typescript-eslint/restrict-template-expressions': 'off',
    },
  },
  {
    ignores: ['.next/**'],
  },
];
