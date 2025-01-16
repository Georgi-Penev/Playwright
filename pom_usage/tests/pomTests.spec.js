import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManeger.js'

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