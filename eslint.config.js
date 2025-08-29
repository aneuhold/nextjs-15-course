import reactConfig from '@aneuhold/eslint-config/src/react-config.js';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray} */
export default [
  ...reactConfig,
  {
    // other override settings. e.g. for `files: ['**/*.test.*']`
  },
  {
    ignores: ['.next/**'],
  },
];
