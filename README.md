# UI

## Introduction

This repository holds the UI.
It incudes pnpm + React + TypeScript + Vite + SWC.

## Getting Started

### Installation

```shell
# Install package managers.
corepack enable
# Install the dependencies.
pnpm install
# To start a development server.
pnpm dev
# Install Playwright browsers.
npx playwright install --with-deps
# Initialize husky.
pnpm husky init
```

## Generate API from Swagger

We use `swagger-typescript-api` to generate the API.

To generate the templates (first time only): `pnpm templates`.
To update the models: `pnpm models`.
When executing the above, make sure the API is running.

## Component Libraries & Styling

shadcn/ui and Tailwind CSS are used to define the user interface.
Tailwind provides utility-first CSS styling with theme customization through CSS custom properties.
Sonner is used to show toast notifications to the user.
Formik is used to capture user input. Yup for validation.

## State Management

Zustand is used for client state management.
React Query is used for server state management.
Axios is used for API calls.

## Internationalization

Internationalization is done with `i18next`.
Add browser language detection when relevant.
Consider using namespaces when the project grows.

## Mocking

We use `msw` for mocking.
This has been initialized using `npx msw init public`.

## Testing

Vitest is used for unit testing.
Playwright is used for end-to-end testing.
