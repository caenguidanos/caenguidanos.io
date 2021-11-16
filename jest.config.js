const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: process.cwd() });

const customJestConfig = {
   moduleNameMapper: {
      "^\\$styles/(.*)$": ["<rootDir>/src/styles/$1"],
      "^\\$shared/layout$": ["<rootDir>/src/lib/shared/layout/index.ts"],
      "^\\$shared/markdown$": ["<rootDir>/src/lib/shared/markdown/index.ts"]
   }
};

module.exports = createJestConfig(customJestConfig);
