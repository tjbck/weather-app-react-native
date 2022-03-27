import React from 'react';
import {Text} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';

// Testing Unit Level Tests (NOT Integration, nor E2E), Therefore we'll be testing only for common components.
import TitledCard from "./components/common/TitledCard"

import Error from "./components/Error"
import Loading from "./components/Loading"



describe("<TitledCard />", () => {  
  it("should display its children elements", () => {
    let pressed = false
    const {getByTestId, getByText, queryByTestId, toJSON} = render(<TitledCard onPress={() => {pressed= true}}><Text>test</Text></TitledCard>)

    const touchableElement = getByText('test')
    expect(touchableElement).not.toBeNull();
  })

  it("should not display touchableOpacity when there aren't any children elements", () => {
    const {getByTestId, queryByTestId, toJSON} = render(<TitledCard  onPress={() => {pressed= true}}></TitledCard>)

    const touchableElement = queryByTestId('touchable')
    expect(touchableElement).toBeNull();
  })

  it("should run onPress function when pressed", () => {
    let pressed = false
    const {getByTestId, getByText, queryByTestId, toJSON} = render(<TitledCard onPress={() => {pressed= true}}><Text>test</Text></TitledCard>)

    const touchableElement = getByText('test')
    fireEvent.press(touchableElement);

    expect(pressed).toBe(true)
  })
})


describe('<Error />', () => {
  it('has 3 children', () => {
    const tree = render(<Error />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

describe("<Loading/>", () => {  
  it('has 3 children', () => {
    const tree = render(<Loading />).toJSON();
    expect(tree.children.length).toBe(3);
  });
})


