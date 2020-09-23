import React from "react"
import renderer from "react-test-renderer"
import HeaderBar from ".."

const createProps = () => ({
  classes: {},
})

describe("<HeaderBar />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<HeaderBar {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
