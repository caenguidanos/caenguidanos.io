const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: process.cwd() });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
   bail: 1,
   errorOnDeprecated: true,
   extensionsToTreatAsEsm: [".ts", ".tsx"],
   extraGlobals: ["Math"],
   testMatch: ["**/src/libs/**/*.spec.{ts,tsx}"],
   collectCoverage: true,
   collectCoverageFrom: [
      "src/libs/**/*.{ts,tsx}",
      "!**/*.entity.ts",
      "!**/*.page.{ts,tsx}",
      "!**/*.stories.{ts,tsx}",
      "!**/index.ts",
      "!**/*.e2e.{ts,tsx}",
      "!**/.*.{ts,tsx}",
      "!**/*-e2e/*"
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
      "^\\$shared/styles/(.*)$": ["<rootDir>/src/styles/$1"],
      "^\\$shared/markdown$": ["<rootDir>/src/libs/shared/markdown/index.ts"],
      "^\\$shared/constants$": ["<rootDir>/src/libs/shared/constants/index.ts"],
      "^\\$shared/io$": ["<rootDir>/src/libs/shared/io/index.ts"],
      "^\\$shared/ui$": ["<rootDir>/src/libs/shared/ui/index.ts"],
      "^\\$pages/(.*)$": ["<rootDir>/src/libs/pages/$1"]
   },
   verbose: true
};

module.exports = createJestConfig(customJestConfig);
