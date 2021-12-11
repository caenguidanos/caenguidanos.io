const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: process.cwd() });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
   bail: 1,
   verbose: true,
   errorOnDeprecated: true,
   extensionsToTreatAsEsm: [".ts", ".tsx"],
   testMatch: ["**/libs/**/*.spec.{ts,tsx}"],
   setupFilesAfterEnv: ["./config/tests/jest/jest.setup.ts"],
   collectCoverage: true,
   collectCoverageFrom: ["libs/**/*.{ts,tsx}", "!**/entity-*/*.ts", "!**/*.stories.tsx", "!**/index.ts"],
   coverageDirectory: "./dist/jest/coverage",
   coverageReporters: ["json", "lcov", "text", "html-spa"],
   coverageThreshold: {
      global: {
         branches: 0, // 🔥
         functions: 0, // 🔥
         lines: 0, // 🔥
         statements: 0 // 🔥
      }
   },
   moduleNameMapper: {
      "^\\$msw$": ["<rootDir>/specs/msw/index.ts"],
      "^\\$styles$": ["<rootDir>/styles/index.scss"],
      "^\\$stitches$": ["<rootDir>/stitches.config.ts"],
      "^\\$libs/(.*)$": ["<rootDir>/libs/$1"]
   }
};

module.exports = createJestConfig(customJestConfig);
