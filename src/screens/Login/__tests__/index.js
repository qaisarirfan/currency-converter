import React from "react"
import renderer from "react-test-renderer"
import Login from ".."

const createProps = () => ({
  classes: {},
})

describe("<Login />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<Login {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
