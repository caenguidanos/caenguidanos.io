# caenguidanos.io

Welcome to my [personal site](https://caenguidanos-io.vercel.app).

#### Go to

-  [E2E Testing Reports](https://e2e-playwright-reports-xxg3rsseuq-oa.a.run.app)
-  [Unit Testing Reports](https://unit-jest-reports-xxg3rsseuq-oa.a.run.app)
-  [SonarCloud Analysis](https://sonarcloud.io/summary/overall?id=caenguidanos_caenguidanos.io)

#### Engine:

-  Node version: `v16.13.0 LTS`

#### Stack:

-  :zap: [react](https://reactjs.org/)
-  :zap: [preact](https://preactjs.com/)
-  :zap: [next.js](https://nextjs.org/)
-  :zap: [tailwindcss](https://tailwindcss.com/)
-  :zap: [playwright](https://playwright.dev/)
-  :zap: [jest](https://jestjs.io/es-ES/)
-  :zap: [nvm](https://github.com/nvm-sh/nvm)
-  :zap: [typescript](https://www.typescriptlang.org/)
-  :zap: [eslint](https://eslint.org/)

#### Infra:

-  :zap: [vercel](https://vercel.com/)

#### CI/CD

-  :zap: [sonarcloud](https://sonarcloud.io/)
-  :zap: [github actions](https://github.com/features/actions)

#### Extra

-  :zap: [fathom](https://usefathom.com/)

## Install

```bash
nvm use
npm i -g pnpm
pnpm i
```

## Run

```bash
pnpm dev
```

## Testing

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

## Branch

### Temporary branch

-  Feature `feature/issue-14`
-  BugFix `bugfix/issue-12`
-  HotFix `hotfix/issue-56-221`
-  Experimental `experimental/issue-29`
-  Release `release/1.4.5`
-  Merge `merge/new-features`

## Commits

### Type

Must be one of the following:

-  **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
-  **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
-  **docs**: Documentation only changes
-  **feat**: A new feature
-  **fix**: A bug fix
-  **perf**: A code change that improves performance
-  **refactor**: A code change that neither fixes a bug nor adds a feature
-  **revert**: A code that reverts some functionality
-  **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
-  **test**: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages.

### Subject

The subject contains a succinct description of the change:

-  use the imperative, present tense: "change" not "changed" nor "changes"
-  don't capitalize the first letter
-  no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

**Reference**:

-  [Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)
-  [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
