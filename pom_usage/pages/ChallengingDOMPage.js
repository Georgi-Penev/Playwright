import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class ChallengingDOMPage {
    constructor(page) {
        this.actions = new CommonActions(page)
    }
    async navigate() {
        await this.actions.navigate('https://the-internet.herokuapp.com/challenging_dom')
    }
    async assertBlueButton() {
        const isVisible = await this.actions.isVisible('a[class = "button"]')
        expect(isVisible).toBeTruthy()
    }
    async assertRedButton() {
        const isVisible = await this.actions.isVisible('a[class = "button alert"]')
        expect(isVisible).toBeTruthy()
    }
    async assertGreenButton() {
        const isVisible = await this.actions.isVisible('a[class = "button success"]')
        expect(isVisible).toBeTruthy()
    }
    async assertCanvas() {
        const isVisible = await this.actions.isVisible('#canvas')
        expect(isVisible).toBeTruthy()
    }

}