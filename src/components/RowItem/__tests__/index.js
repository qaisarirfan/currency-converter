import React from "react"
import {render, cleanup, store} from '../../../../jest/testUtils';
import {RowItem, RowSeparator} from ".."

afterEach(() => {
  cleanup();
  store.clearActions();
});

describe("<RowItem />", () => {
  const createProps = () => ({
    title: "test",
  })
  it("Does not explode", () => {
    const props = createProps()
    const component = render(<RowItem {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })

})

describe("<RowSeparator />", () => {
  const createProps = () => ({
    style: {
      backgroundColor: "#fff"
    },
  })
  it("Does not explode", () => {
    const props = createProps()
    const component = render(<RowSeparator {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
