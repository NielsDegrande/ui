import { render, fireEvent, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import { describe, expect, test, vi } from "vitest";

import Sidebar from "src/components/sidebar/Sidebar";
import { logOut } from "src/utils/authentication";
import { Path } from "src/utils/paths";

vi.mock("src/utils/authentication", () => ({
  logOut: vi.fn(),
}));

describe("Sidebar", () => {
  test("renders without crashing", () => {
    const { container } = render(<Sidebar />);
    expect(container).toBeInTheDocument();
  });

  test("should render with drawer open by default", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("ChevronLeftIcon")).toBeInTheDocument();
    expect(screen.queryByTestId("MenuIcon")).toBeNull();
  });

  test("should close the drawer on ChevronLeftIcon button click", () => {
    render(<Sidebar />);
    const button = screen.getByTestId("ChevronLeftIcon");
    fireEvent.click(button);
    expect(screen.getByTestId("MenuIcon")).toBeInTheDocument();
    expect(screen.queryByTestId("ChevronLeftIcon")).toBeNull();
  });

  test("should navigate to home page on Home button click", () => {
    const navigate = useNavigate();
    render(<Sidebar />);
    const homeButton = screen.getByText("shared.home");
    fireEvent.click(homeButton);

    expect(navigate).toHaveBeenCalledWith(Path.HOME);
  });

  test("should navigate to products page on Products button click", () => {
    const navigate = useNavigate();
    render(<Sidebar />);

    const productsButton = screen.getByText("shared.products");
    fireEvent.click(productsButton);

    expect(navigate).toHaveBeenCalledWith(Path.PRODUCTS);
  });

  test("should call logOut function on Logout button click", () => {
    render(<Sidebar />);

    const logoutButton = screen.getByText("sidebar.logout");
    fireEvent.click(logoutButton);

    expect(logOut).toHaveBeenCalled();
  });
});
