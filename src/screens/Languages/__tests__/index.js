import React from "react"
import renderer from "react-test-renderer"
import Languages from ".."

const createProps = () => ({
  classes: {},
})

describe("<Languages />", () => {
  it("Does not explode", () => {
    const props = createProps()
    const component = renderer.create(<Languages {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
