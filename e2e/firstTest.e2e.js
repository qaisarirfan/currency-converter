// function for pausing the execution of the test. Mainly used for waiting for a specific UI component to appear on the screen
const sleep = (duration) =>
  new Promise((resolve) => setTimeout(() => resolve(), duration))

const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const loginWith = async (email, password) => {
  const loginScreen = await element(by.id("login_screen"))

  return await expect(loginScreen)
    .toBeVisible()
    .then(async () => {
      const emailInput = await element(by.id("email"))
      const passwordInput = await element(by.id("password"))

      await emailInput.tap()
      await emailInput.typeText(email)
      await passwordInput.typeText(password)
      const loginBtn = await element(by.id("submit"))
      await waitFor(loginBtn)
        .toBeVisible()
        .whileElement(by.id("login_screen"))
        .scroll(50, "down")

      await loginBtn.tap() // to close the keyboard
      await loginBtn.tap() // to start the authentication process

      let errorMessage = null

      if (!email && !password) {
        errorMessage = await element(by.text("Required"))
      } else if (!validateEmail(email)) {
        errorMessage = await element(by.text("Invalid email"))
      }

      return {emailInput, passwordInput, errorMessage}
    })
}

const loginWithoutCredentials = async () => await loginWith("", "")

const loginWithInvalidEmailCredentials = async () =>
  await loginWith("alex339", "9sdfhsakjf")

const loginWithRightCredentials = async () =>
  await loginWith("admin@admin.com", "admin")

const goBack = async (index) => {
  const goBackBtn = await element(by.id("back")).atIndex(index)
  goBackBtn.tap()
  await sleep(2000)
}

const signOut = async () => {
  await goBack(1)
  await goBack(0)
  await element(by.id("options_screen_button")).tap()
  const signOutBtn = await element(by.id("logout"))
  await signOutBtn.tap()
}

describe("Tests", () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it("should disallow login without credentials", async () => {
    const {
      emailInput,
      passwordInput,
      errorMessage,
    } = await loginWithoutCredentials()

    await expect(errorMessage.atIndex(1)).toBeVisible()
    await expect(emailInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
  })

  it("should disallow login with invalid email", async () => {
    const {
      emailInput,
      passwordInput,
      errorMessage,
    } = await loginWithInvalidEmailCredentials()

    await expect(errorMessage).toBeVisible()
    await expect(emailInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
  })

  it("should chanage the theme to yellow and logout", async () => {
    await loginWithRightCredentials()
    await sleep(6000)
    await expect(element(by.id("welcome")))
      .toBeVisible()
      .then(async () => {
        await element(by.id("options_screen_button")).tap()
        await element(by.id("themes")).tap()
        await expect(element(by.text("Theme 3"))).toBeVisible()
        await element(by.id("theme-3")).tap()

        await signOut()
      })
  })
})
