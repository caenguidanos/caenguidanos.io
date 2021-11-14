const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: process.cwd() });

const customJestConfig = {
   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
   moduleNameMapper: {
      "^\\$styles/(.*)$": ["<rootDir>/src/styles/$1"],
      "^\\$shared/layout$": ["<rootDir>/src/lib/shared/layout/index.ts"]
   }
};

module.exports = createJestConfig(customJestConfig);
