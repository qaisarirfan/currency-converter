import React from "react"
import {storiesOf} from "@storybook/react-native"
import ConversionInput from "."
import {StoryWrapper} from "../../../storybook/StoryWrapper"

storiesOf("ConversionInput", module)
  .add("default", () => (
    <StoryWrapper>
      <ConversionInput text="test" onButtonPress={() => null} />
    </StoryWrapper>
  ))
  .add("readonly", () => (
    <StoryWrapper>
      <ConversionInput
        text="test"
        onButtonPress={() => null}
        editable={false}
      />
    </StoryWrapper>
  ))
