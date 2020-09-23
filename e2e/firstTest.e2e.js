describe("Example", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible()
  })

  it("should show hello screen after tap", async () => {
    await waitFor(element(by.id('reverse_button'))).toBeVisible().whileElement(by.id('home_screen')).scroll(50, 'down');
    await element(by.id("reverse_button")).tap()
  })

  it("should show hello screen after tap", async () => {
    await expect(element(by.id("conversion_input_1"))).toBeVisible()
    await element(by.id("conversion_input_1")).typeText("I also typed this")
    await element(by.id("conversion_input_1")).clearText()
  })

  it("should chanage the theme to yellow", async () => {
    await element(by.id("options_screen_button")).tap()
    await element(by.id("themes")).tap()
    await expect(element(by.text("Theme 3"))).toBeVisible()
    await element(by.id("theme-3")).tap()
  })

  it("should chanage the theme to green", async () => {
    await element(by.id("options_screen_button")).tap()
    await element(by.id("themes")).tap()
    await expect(element(by.text("Theme 1"))).toBeVisible()
    await element(by.id("theme-1")).tap()
  })
})
