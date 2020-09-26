import React from "react"
import renderer from "react-test-renderer"
import Logo from ".."

const createProps = () => ({
  classes: {},
})

describe("<Logo />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<Logo {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
