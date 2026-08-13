import { test, expect } from '@playwright/test';
import { Login } from '../pages/login';

test.describe('Login Page Test Cases', () => {

    test('Verify the login with valid data', async ({ page }) => {

        const login = new Login(page);

        await login.goto();

        await login.login(
            process.env.USERNAME!,
            process.env.PASSWORD!
        );

        await expect(page).toHaveURL(
            'https://phziot-dce2e.phz.io/data-connector/create-dc-source'
        );

    });

});