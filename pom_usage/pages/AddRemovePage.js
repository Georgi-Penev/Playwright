import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class AddRemovePage {
    constructor(page) {
        this.actions = new CommonActions(page)
    }
    async navigate() {
        await this.actions.navigate('https://the-internet.herokuapp.com/add_remove_elements/')
    }
    async addElement(numberOfTimes) {
        for (let index = 0; index < numberOfTimes; index++) {
            await this.actions.click('button[onclick="addElement()"]')
        }
    }
    async countElementsAdded(element) {
        return await this.actions.count(element)
    }
    async assertCount(element, expectedCount) {
        const countedElements = await this.countElementsAdded(element)
        expect(countedElements).toBe(expectedCount)
    }
}
