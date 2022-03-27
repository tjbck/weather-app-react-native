import React from 'react';
import {render} from '@testing-library/react-native';
import App from "./App"


describe("our sample test", () => {
  it("5*5 should be 25", () => {
    expect(5*5).toBe(25)
  })
})

describe('<App/>', () => {
  it('should match snapshot', () => {
    const snap = render(<App />).toJSON();
    expect(snap).toMatchSnapshot();
  })
})