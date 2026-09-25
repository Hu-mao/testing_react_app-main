import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Counter from "./Counter";

describe("Counter", () => {
  test("виводить початкове значення value", () => {
    const { getByTestId } = render(<Counter value={5} />);

    expect(getByTestId("counter-value")).toHaveTextContent("5");
  });

  test("збільшує лічильник на 1 після кліку", () => {
    const { getByTestId, getByRole } = render(<Counter value={5} />);

    fireEvent.click(getByRole("button", { name: "Збільшити" }));

    expect(getByTestId("counter-value")).toHaveTextContent("6");
  });
});
