# caenguidanos.io

Welcome to my [personal site](https://caenguidanos-io.vercel.app) `0.0.4`.

#### Go to

-  [Storybook](https://e2e-playwright-reports-xxg3rsseuq-oa.a.run.app)
-  [Unit test reports](https://unit-jest-reports-xxg3rsseuq-oa.a.run.app)
-  [E2E test reports](https://e2e-playwright-reports-xxg3rsseuq-oa.a.run.app)

#### Engine:

-  Node version: `v16.13.0 LTS`

#### Stack:

-  :zap: [next.js](https://nextjs.org/)
-  :zap: [typescript](https://www.typescriptlang.org/)
-  :zap: [storybook](https://storybook.js.org/)
-  :zap: [recoil](https://recoiljs.org/)
-  :zap: [xstate](https://xstate.js.org/)

#### Style

-  :zap: [sass](https://sass-lang.com/)
-  :zap: [postcss](https://postcss.org/)
-  :zap: [stitches](https://stitches.dev/)
-  :zap: [tailwindcss](https://tailwindcss.com/)

#### Lint

-  :zap: [eslint](https://eslint.org/)
-  :zap: [commitlint](https://www.conventionalcommits.org/en/v1.0.0/)
-  :zap: [yaml-lint](https://github.com/rasshofer/yaml-lint/)

#### Testing

-  :zap: [playwright](https://playwright.dev/)
-  :zap: [jest](https://jestjs.io/)
-  :zap: [msw](https://mswjs.io/)
-  :zap: [testing-library](https://testing-library.com/)

#### Hosting:

-  :zap: [vercel](https://vercel.com/)
-  :zap: [google cloud run](https://cloud.google.com/run)

#### CI/CD

-  :zap: [github actions](https://github.com/features/actions)

## Install

```bash
# assign node version to terminal session
nvm use 16.13.0
# install pnpm
npm i -g pnpm
# install project dependencies
pnpm i
```

## Run

```bash
pnpm dev
```

## Testing

### Storybook

Run **Storybook** server:

```bash
pnpm storybook
```

### Unit

Run **Jest** tests:

```bash
pnpm test
```

### E2E

Run **Playwright** tests:

```bash
pnpm e2e
```

## Libs organization

-  **view**
   -  **pages**: Implements the ui to the app
-  **[domain]**
   -  **state**: Implements state management
      -  **facade**: Implements access to state management
   -  **feature**: Implements a use case
   -  **data-access**: Implements data accesses, e.g. via HTTP or WebSockets
   -  **ui**: Provides use case agnostic and thus reusable components (dumb components)
   -  **util**: Provides helper functions
   -  **entity**: Provides models, interfaces or classes
   -  **api**: Provides functionalities exposed for other domains
   -  **story**: Implements e2e testing

See: [Angular Architects](https://www.angulararchitects.io/en/aktuelles/sustainable-angular-architectures-2/)

## Branch

### Type branch preffix

Example:

```
feature/issue-43
```

-  **feature**
-  **bugfix**
-  **hotfix**
-  **experimental**

## Commit

### Type message head

Example:

```bash
build: add new config to webpack
```

-  **build**
-  **ci**
-  **docs**
-  **feat**
-  **fix**
-  **perf**
-  **refactor**
-  **revert**
-  **style**
-  **test**
