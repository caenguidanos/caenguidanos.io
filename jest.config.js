const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: process.cwd() });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
   bail: 1,
   errorOnDeprecated: true,
   extensionsToTreatAsEsm: [".ts", ".tsx"],
   extraGlobals: ["Math"],
   collectCoverage: true,
   coverageDirectory: "./dist/tests/unit/reports",
   coverageReporters: ["json", "lcov", "text", "html-spa"],
   coverageThreshold: {
      global: {
         branches: 100,
         functions: 100,
         lines: 100,
         statements: 0
      }
   },
   moduleNameMapper: {
      "^\\$styles/(.*)$": ["<rootDir>/src/styles/$1"],
      "^\\$shared/layout$": ["<rootDir>/src/lib/shared/layout/index.ts"],
      "^\\$shared/markdown$": ["<rootDir>/src/lib/shared/markdown/index.ts"]
   },
   verbose: true
};

module.exports = createJestConfig(customJestConfig);
