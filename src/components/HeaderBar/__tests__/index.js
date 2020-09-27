import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import HeaderBar from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<HeaderBar />", () => {
  const createProps = () => ({
    title: "test",
  })
  it("Does not explode", () => {
    const props = createProps()
    const component = render(<HeaderBar {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
