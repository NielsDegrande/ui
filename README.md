# UI

## Introduction

This repository holds the UI.
It includes pnpm + React + TypeScript + Vite.

## Tech Stack

| Area            | Choice                           |
| --------------- | -------------------------------- |
| UI framework    | React 19                         |
| Build           | Vite 8 (rolldown)                |
| React plugin    | @vitejs/plugin-react             |
| Language        | TypeScript                       |
| Styling         | Tailwind CSS 4 + shadcn/ui       |
| Routing         | React Router 7                   |
| Server state    | TanStack Query 5                 |
| Client state    | Zustand 5                        |
| Forms           | react-hook-form + zod            |
| HTTP            | Fetch API (generated client)     |
| API codegen     | @hey-api/openapi-ts              |
| i18n            | i18next + react-i18next          |
| Mocking         | MSW 2                            |
| Unit tests      | Vitest 4 + React Testing Library |
| E2E tests       | Playwright                       |
| Lint and format | ESLint 9 (import-x) + Prettier   |
| Git hooks       | Husky + lint-staged              |
| Package manager | pnpm 11                          |

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

## Generate API from OpenAPI

We use `@hey-api/openapi-ts` to generate the API client into `src/api`.

To update the models: `pnpm models`.
When executing the above, make sure the API is running.

## Component Libraries & Styling

shadcn/ui and Tailwind CSS are used to define the user interface.
Tailwind provides utility-first CSS styling with theme customization through CSS custom properties.
Sonner is used to show toast notifications to the user.
react-hook-form is used to capture user input. zod for validation.

## State Management

Zustand is used for client state management.
React Query is used for server state management.
API calls go through the generated fetch-based client.

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
