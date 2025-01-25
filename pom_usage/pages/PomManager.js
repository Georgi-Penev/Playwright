import LoginPage from "./LoginPage.js";
import SecurePage from "./SecurePage.js";
import CheckboxesPage from "./CheckboxesPage.js";
import AddRemovePage from "./AddRemovePage.js";
import ChallengingDOMPage from "./ChallengingDOMPage.js";
import BasicAuthPage from "./BasicAuthPage.js";

export default class PomManager {
    constructor(page) {
        this.page = page
        this.loginPage = new LoginPage(page)
        this.securePage = new SecurePage(page)
        this.checkboxesPage = new CheckboxesPage(page)
        this.addRemovePage = new AddRemovePage(page)
        this.challengingDOMPage = new ChallengingDOMPage(page)
        this.basicAuthPage = new BasicAuthPage(page)
    }
}