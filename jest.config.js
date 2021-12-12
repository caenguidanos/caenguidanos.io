const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

/** @type {import('@jest/types').Config.InitialOptions} */
const customJestConfig = {
   bail: 1,
   verbose: true,
   errorOnDeprecated: true,
   extensionsToTreatAsEsm: [".ts", ".tsx"],
   testMatch: ["**/core/**/*.spec.{ts,tsx}"],
   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
   collectCoverage: true,
   collectCoverageFrom: [
      "core/**/*.{ts,tsx}",
      "!**/*-entity-*.ts",
      "!**/*-entity.ts",
      "!**/*-api-*.ts",
      "!**/*-api.ts",
      "!**/*.sb.{ts,tsx}",
      "!**/*.msw.ts",
      "!**/*.e2e.ts"
   ],
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
      "^\\$caenguidanos.io/stitches$": ["<rootDir>/stitches.config.ts"],
      "^\\$caenguidanos.io/msw$": ["<rootDir>/config/msw/main.msw.ts"],
      "^\\$caenguidanos.io/styles$": ["<rootDir>/core/view/styles/index.scss"],
      "^\\$caenguidanos.io/simple-ui$": ["<rootDir>/core/domain/shared/simple-ui/api/shared-simple-ui-api.ts"],
      "^\\$caenguidanos.io/framework$": ["<rootDir>/core/domain/shared/framework/api/shared-framework-api.ts"],
      "^\\$caenguidanos.io/markdown$": ["<rootDir>/core/domain/shared/markdown/api/shared-markdown-api.ts"],
      "^\\$caenguidanos.io/typescript$": ["<rootDir>/core/domain/shared/typescript/api/shared-typescript-api.ts"],
      "^\\$caenguidanos.io/pages/index$": ["<rootDir>/core/view/pages/index/api/view-pages-index-api.ts"]
   }
};

module.exports = createJestConfig(customJestConfig);
