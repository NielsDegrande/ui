// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("i18next", () => ({
  t: (k: string) => k,
}));

const useNavigateMock = vi.fn();

vi.mock("react-router-dom", async (): Promise<unknown> => {
  const module: Record<string, unknown> =
    await vi.importActual("react-router-dom");

  return {
    ...module,
    useNavigate: () => useNavigateMock,
  };
});
