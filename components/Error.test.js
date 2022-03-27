import React from "react";
import { render } from "@testing-library/react-native";
import Error from "./Error";

describe("<Error/>", () => {
  it("should display a prop message", () => {
    const errorMessage = "test";
    const { getByTestId, getByText, queryByTestId, toJSON } = render(
      <Error errorMessage={errorMessage} />
    );

    expect(getByTestId("error-message")).toBe(getByText(errorMessage));
  });
});

// describe('<App/>', () => {
//   it('should match snapshot', () => {

//     const snap = render(<App />)
//   })
// })
