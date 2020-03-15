import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

test("App renders", () => {
  const { getByText } = render(<App />);

  const text = getByText(/fetching data/i);

  expect(text).toBeInTheDocument();
});
