import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';


test.describe('Login Page Test Cases', () => {

    test('Verify the login with valid data', async ({ page }) => {

        const login = new Login(page);

        await login.goto();

        await login.login(
            process.env.DC_USERNAME!,
            process.env.DC_PASSWORD!
        );

        await expect(page).toHaveURL(
            /data-connector\/create-dc-source/
        );

    });

});