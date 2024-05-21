import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import Login from "src/pages/login/Login";

describe("Login", () => {
  test("renders without crashing", () => {
    const { container } = render(<Login />);
    expect(container).toBeInTheDocument();
  });

  test("should render logo image", () => {
    render(<Login />);
    const logoImage = screen.getByAltText("login.logo");
    expect(logoImage).toBeInTheDocument();
  });

  test("should render welcome text", () => {
    render(<Login />);
    const welcomeText = screen.getByText(/login.welcome.to/i);
    expect(welcomeText).toBeInTheDocument();
  });

  test("should render the app name", () => {
    render(<Login />);
    const appNameText = screen.getByText(/shared.app_name/i);
    expect(appNameText).toBeInTheDocument();
  });

  test("should render username field with appropriate label", () => {
    render(<Login />);
    const usernameField = screen.getByLabelText(/login.username/i);
    expect(usernameField).toBeInTheDocument();
  });

  test("should render password field with appropriate label", () => {
    render(<Login />);
    const passwordField = screen.getByLabelText(/login.password/i);
    expect(passwordField).toBeInTheDocument();
  });

  test("should render login button", () => {
    render(<Login />);
    const loginButton = screen.getByText(/login.login/i);
    expect(loginButton).toBeInTheDocument();
  });
});
