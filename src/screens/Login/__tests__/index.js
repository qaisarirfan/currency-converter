import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import Login from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<Login />", () => {
  const createProps = () => ({})
  it("Does not explode", () => {
    const props = createProps()
    const component = render(<Login {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
