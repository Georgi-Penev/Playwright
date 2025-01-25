export default class CommonActions {
    constructor(page) {
        this.page = page
    }
    async navigate(url) {
        await this.page.goto(url)
    }
    async click(locator) {
        await this.page.locator(locator).click()
    }
    async fill(locator, text) {
        await this.page.locator(locator).fill(text)
    }
    async getText(locator) {
        return await this.page.locator(locator).textContent()
    }
    async isChecked(locator) {
        return await this.page.locator(locator).isChecked()
    }
    async count(locator) {
        const elementLocator = await this.page.locator(locator)
        return await elementLocator.locator('*').count()
    }
    async isVisible(locator) {
        return await this.page.locator(locator).isVisible()
    }
}