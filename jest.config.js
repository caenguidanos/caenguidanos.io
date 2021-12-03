const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: process.cwd() });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
   bail: 1,
   errorOnDeprecated: true,
   extensionsToTreatAsEsm: [".ts", ".tsx"],
   extraGlobals: ["Math"],
   testMatch: ["**/src/lib/**/*.spec.{ts,tsx}"],
   collectCoverage: true,
   collectCoverageFrom: [
      "src/lib/**/*.{ts,tsx}",

      "!**/*.entity.ts", // Lib typescript entities
      "!**/*.stories.tsx", // Storybook files
      "!**/*.stories-e2e.tsx", // Storybook E2E files

      "!**/*-e2e/**", // E2E testing folders

      "!**/index.ts", // Lib entrypoints
      "!**/stitches.config.ts" // Stitches config
   ],
   coverageDirectory: "./dist/tests/unit/reports",
   coverageReporters: ["json", "lcov", "text", "html-spa"],
   coverageThreshold: {
      global: {
         branches: 90,
         functions: 90,
         lines: 90,
         statements: 0
      }
   },
   moduleNameMapper: {
      "^\\$lib/shared/(.*)$": ["<rootDir>/src/lib/shared/$1"],
      "^\\$lib/client/(.*)$": ["<rootDir>/src/lib/client/$1"],
      "^\\$lib/server/(.*)$": ["<rootDir>/src/lib/server/$1"]
   },
   verbose: true
};

module.exports = createJestConfig(customJestConfig);
