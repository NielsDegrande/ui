# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

This project uses **pnpm** as its package manager. Always use `pnpm` commands, not npm or yarn.

## Development Commands

```bash
# Development server
pnpm dev

# Build
pnpm build

# Linting
pnpm lint              # Auto-fix issues
pnpm lint:ci           # Check without fixing (CI)

# Formatting
pnpm format            # Auto-format
pnpm format:ci         # Check without formatting (CI)

# Testing
pnpm test              # Run Vitest in watch mode
pnpm test:ci           # Run once (CI)
pnpm test:coverage     # With coverage report
pnpm playwright        # Run Playwright E2E tests

# Other
pnpm knip              # Find unused files/dependencies
pnpm models            # Generate API models from OpenAPI (requires API running at localhost:8080)
```

## Architecture Overview

### Tech Stack

- **React 18** with TypeScript
- **Vite** + SWC for fast builds and hot reload
- **shadcn/ui** + Tailwind CSS for styling
- **React Router** (v7) for routing
- **TanStack Query** (React Query) for server state
- **Zustand** for client state
- **Formik** + Yup for forms and validation
- **i18next** for internationalization
- **Axios** for HTTP requests
- **MSW** for API mocking
- **Vitest** + React Testing Library for unit tests
- **Playwright** for E2E tests

### Project Structure

```txt
src/
├── api/              # Generated API client (from swagger-typescript-api)
├── components/       # Reusable UI components
├── locales/          # i18n translation files (en/translation.json)
├── mocks/            # MSW handlers for API mocking
├── pages/            # Page components (home, products, login, error, not-found)
├── stores/           # Zustand stores for client state
└── utils/            # Utility functions and configuration
```

### Key Architectural Patterns

**State Management:**

- Use **Zustand** for client-side state (e.g., `useProductStore`)
- Use **React Query** for server state (e.g., API data fetching)
- Query keys are centralized in `src/utils/query-keys.ts`
- Query client is configured in `src/utils/query-client.ts`

**Routing:**

- Routes are centralized in `src/main.tsx` using React Router's `createBrowserRouter`
- Path constants are defined in `src/utils/paths.ts` (e.g., `Path.HOME`, `Path.AUTH`)
- Protected routes use the `ProtectedRoute` component wrapper

**Authentication:**

- Basic auth token stored in localStorage via `src/utils/authentication.ts`
- Authentication state checked by `isAuthenticated()` function
- Protected routes validate auth and redirect to login if needed

**API Integration:**

- API client is **auto-generated** from OpenAPI spec using `swagger-typescript-api`
- Run `pnpm models` to regenerate (requires backend at `localhost:8080/api/openapi.json`)
- Axios instance configured in `src/utils/axios-instance.ts` with interceptors for auth
- API is conditionally mocked using MSW based on `VITE_USE_MOCK_API` env var

**Styling:**

- **shadcn/ui** components located in `src/components/ui/`
- **Tailwind CSS** for styling with custom configuration in `tailwind.config.cjs`
- Theme variables defined in `src/index.css` using CSS custom properties
- Dark mode supported via Tailwind's class-based system (not currently implemented)
- Use the `cn()` utility from `src/lib/utils.ts` for conditional class merging

**Toast Notifications:**

- **Sonner** is used for toast notifications (not react-toastify)
- Toaster component mounted in `src/main.tsx`
- Import and use toast functions from `sonner`:

```typescript
import { toast } from "sonner";

// Usage examples
toast.error("Something went wrong");
toast.success("Operation completed");
toast.info("Information message");
toast.warning("Warning message");

// With options
toast.error("Error message", {
  description: "Additional details",
  duration: 5000,
});
```

- Toast styling is integrated with Tailwind theme (see `src/components/ui/sonner.tsx`)
- Global error handling in `src/utils/query-client.ts` uses toast for React Query errors
- Authentication errors in `src/utils/authentication.ts` use toast for user feedback

**Internationalization:**

- i18next initialized in `src/locales/i18n.ts`
- Currently supports English only
- Translation files in `src/locales/en/translation.json`

**Testing:**

- Unit tests: Vitest with jsdom, setup in `src/setupTests.ts`
- E2E tests: Playwright, tests in `playwright/` directory
- MSW handlers shared between tests and development

### Import Aliases

The project uses `src/*` path alias (configured in both `tsconfig.json` and `vite.config.ts`):

```typescript
import { api } from "src/utils/axios-instance";
import { Path } from "src/utils/paths";
```

### Code Style Guidelines (from .cursor/rules)

**Comments:**

- Punctuate all sentences
- Do not contract words
- Avoid trivial comments
- Prefix TODOs with `TODO: `
- Use TSDoc comments for all public classes, methods, and functions
- Include `@param` and `@returns` tags
- End inline comments with a period, use space after comment marker

**TypeScript:**

- Avoid putting everything in one `index.ts` file
- Use multiple files for better readability and maintainability

### Environment Variables

- `VITE_USE_MOCK_API`: Set to `"false"` to disable MSW mocking and use real API
- `VITE_API_URL`: Base URL for API requests

### Git Hooks

Husky is configured with pre-commit hooks:

- Runs Prettier on all files
- Runs ESLint on TypeScript files
