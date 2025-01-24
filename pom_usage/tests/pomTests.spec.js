import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager.js'

let pm

test.describe('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page)
    })
    test.afterEach(async ({ page }) => {
        await page.close()
    })
    test('should login with valid credantials', async () => {
        await pm.loginPage.navigate()
        await pm.loginPage.login('tomsmith', 'SuperSecretPassword!')
        await pm.securePage.assertLoggedInMessage('You logged into a secure area!')
    })
    test('should show error for invalid username', async () => {
        await pm.loginPage.navigate()
        await pm.loginPage.login('invalid', 'SuperSecretPassword!')
        await pm.loginPage.assertErrorMessage('Your username is invalid!')
    })
    test('should show error for invalid password', async () => {
        await pm.loginPage.navigate()
        await pm.loginPage.login('tomsmith', 'invalid!')
        await pm.loginPage.assertErrorMessage('Your password is invalid!')
    })
})
test.describe('Checkbox Tests', () => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page)
    })
    test.afterEach(async ({ page }) => {
        await page.close()
    })
    test('should check checked checkboxes', async () => {
        await pm.checkboxesPage.navigate()
        await pm.checkboxesPage.checkCheckboxes(0)
        await pm.checkboxesPage.assertCheckbox(0, true)
    })
    test('should check unchecked checkboxes', async () => {
        await pm.checkboxesPage.navigate()
        await pm.checkboxesPage.checkCheckboxes(1)
        await pm.checkboxesPage.assertCheckbox(1, false)
    })

})
test.describe('Add/Remove Elements Tests', () => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page)
    })
    test.afterEach(async ({ page }) => {
        await page.close()
    })
    test('should check counted elements', async () => {
        await pm.addRemovePage.navigate()
        await pm.addRemovePage.addElement(2)
        await pm.addRemovePage.assertCount('#elements', 2)
    })

})
test.describe('Challenging DOM Tests', (page) => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page)
    })
    test.afterEach(async ({ page }) => {
        await page.close()
    })
    test('should check visible buttons', async () => {
        await pm.challengingDOMPage.navigate()
        await pm.challengingDOMPage.assertBlueButton()
        await pm.challengingDOMPage.assertRedButton()
        await pm.challengingDOMPage.assertGreenButton()
    })
    test('should check visible canvas', async () => {
        await pm.challengingDOMPage.navigate()
        await pm.challengingDOMPage.assertCanvas()
    })
})
test('should check visible table', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom')
    const rows = await page.getByText('Iuvaret').all()
    expect(rows.length).toBe(10)
})
