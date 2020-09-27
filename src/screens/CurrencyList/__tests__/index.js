import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import CurrencyList from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<CurrencyList />", () => {
  const createProps = () => ({})
  it("Does not explode", () => {
    const props = createProps()
    const component = render(<CurrencyList {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
