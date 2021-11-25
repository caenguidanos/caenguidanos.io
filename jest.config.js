const nextJest = require("next/jest");
const path = require("path");

const resolve = (...args) => path.resolve(process.cwd(), ...args);

const createJestConfig = nextJest({ dir: process.cwd() });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
   bail: 1,
   errorOnDeprecated: true,
   extensionsToTreatAsEsm: [".ts", ".tsx"],
   extraGlobals: ["Math"],
   testMatch: ["**/src/lib/**/*.spec.{ts,tsx}"],
   collectCoverage: true,
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
      "^\\$shared/styles/(.*)$": ["<rootDir>/src/lib/shared/styles/$1"],
      "^\\$shared/layout$": ["<rootDir>/src/lib/shared/layout/index.ts"],
      "^\\$shared/markdown$": ["<rootDir>/src/lib/shared/markdown/index.ts"],
      "^\\$shared/constants$": ["<rootDir>/src/lib/shared/constants/index.ts"],
      "^\\$tests/e2e/(.*)$": ["<rootDir>/tests/e2e/.config/$1"]
   },
   verbose: true
};

module.exports = createJestConfig(customJestConfig);
