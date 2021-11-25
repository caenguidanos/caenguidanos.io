/**
 * @type {import('@commitlint/types').UserConfig}
 */
const config = {
   /*
    * Resolve and load @commitlint/config-conventional from node_modules.
    * Referenced packages must be installed
    */
   extends: ["@commitlint/config-conventional"],
   /*
    * Resolve and load @commitlint/format from node_modules.
    * Referenced package must be installed
    */
   formatter: "@commitlint/format"
};

module.exports = config;
