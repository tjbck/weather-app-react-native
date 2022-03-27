import React from 'react';
import {render} from '@testing-library/react-native';
import Error from "./components/Error"


describe("<Error/>", () => {  
  it("should display a prop message", () => {
    const errorMessage = "test"
    const {getByTestId, getByDisplayValue, queryByTestId, toJSON} = render(<Error errorMessage={errorMessage} />)

    const element = getByTestId('error-message')

    console.log(getByDisplayValue('An Error has occured'))

    expect(element).toBe(1)
  })
})

// describe('<App/>', () => {
//   it('should match snapshot', () => {





//     const snap = render(<App />)
//   })
// })