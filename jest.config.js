const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: process.cwd() });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
   verbose: true,
   bail: 1,
   errorOnDeprecated: true,
   coverageDirectory: "./docs/coverage-unit-testing",
   coverageReporters: ["html", "json"],
   coverageThreshold: {
      global: {
         branches: 75,
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
   extraGlobals: ["Math"]
};

module.exports = createJestConfig(customJestConfig);
