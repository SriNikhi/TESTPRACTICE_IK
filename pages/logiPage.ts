import { Page, Locator } from '@playwright/test';
import dotenv from 'dotenv'

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // Selectors based on standard Salesforce login page attributes
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#Login')
    }

    async navigate() {
        await this.page.goto(process.env.BASE_URL!);
    }

    async login(user: string, pass: string) {
        await this.usernameInput.fill(user);
        await this.loginButton.click();
        await this.passwordInput.fill(pass);
        await this.loginButton.click();
    }
}