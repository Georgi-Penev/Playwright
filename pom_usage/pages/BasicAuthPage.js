import { expect } from "@playwright/test";
import CommonActions from "../utils/CommonActions.js";

export default class BasicAuthPage {
    constructor(page) {
        this.actions = new CommonActions(page)
    }
    async navigate(username, password) {
        await this.actions.navigate(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`)
    }

    async assertProperAuth() {
        await expect(this.actions.isVisible).toBeTruthy();
    }
}

