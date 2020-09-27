import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import ConversionInput from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<ConversionInput />", () => {
  const createProps = () => ({})
  it("Does not explode", () => {
    const props = createProps()
    const component = render(<ConversionInput {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
