/**
 * Base prettier config.
 *
 * This can be extended in another folder by requiring this file and spreading the config.
 *
 * For example:
 * ```js
 * import { config as baseConfig } from "../../prettierrc.js";
 *
 * const config = {
 *   ...baseConfig,
 *   printWidth: 80,
 * };
 *
 * export default config;
 * ```
 */
const config = {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 80,
};

export default config;
