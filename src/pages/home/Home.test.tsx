import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Home from "src/pages/home/Home";

describe("Home", () => {
  test("renders without crashing", () => {
    const { container } = render(<Home />);
    expect(container).toBeInTheDocument();
  });

  test("should render logo image", () => {
    render(<Home />);
    const logoImage = screen.getByAltText("login.logo");
    expect(logoImage).toBeInTheDocument();
  });

  test("should render welcome text", () => {
    render(<Home />);
    const welcomeText = screen.getByText(/login.welcome_to/i);
    expect(welcomeText).toBeInTheDocument();
  });

  test("should render the app name", () => {
    render(<Home />);
    const appNameText = screen.getAllByText(/shared.app_name/i);
    // Both sidebar and home page have the app name text.
    expect(appNameText.length).toBe(2);
  });
});
