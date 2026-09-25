import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("рендерит правильный текст", () => {
    render(<App />);
    expect(screen.getByText("Hello from React App")).toBeInTheDocument();
  });
});
