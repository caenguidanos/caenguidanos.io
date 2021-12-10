const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: process.cwd() });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
   bail: 1,
   errorOnDeprecated: true,
   extensionsToTreatAsEsm: [".ts", ".tsx"],
   extraGlobals: ["Math"],
   testMatch: ["**/src/lib/**/*.spec.{ts,tsx}"],
   setupFilesAfterEnv: ["./jest.setup.ts"],
   collectCoverage: true,
   collectCoverageFrom: [
      "src/lib/**/*.{ts,tsx}",

      "!**/*.entity.ts", // Lib typescript entities
      "!**/*.stories.tsx", // Storybook files
      "!**/*.msw.ts", // MSW files
      "!**/*.page.spec.ts", // E2E files

      "!**/index.ts", // Lib entrypoints
      "!**/stitches.config.ts" // Stitches config
   ],
   coverageDirectory: "./dist/tests/unit/reports",
   coverageReporters: ["json", "lcov", "text", "html-spa"],
   coverageThreshold: {
      global: {
         branches: 0,
         functions: 0,
         lines: 0,
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
