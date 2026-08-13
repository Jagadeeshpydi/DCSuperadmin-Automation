
    const { test, expect } = require("@playwright/test");

test("Mouse scroll example", async ({ page }) => {
    await page.goto("https://phziot-dce2e.phz.io/login");

    const input1 = page.locator("#username");
    await input1.fill("dc-superadmin");

    const input2 = page.locator("#password");
    await input2.fill("Welcome_123!");

    await page.locator("//span[text()='Login']").click();

    await page.waitForTimeout(3000);
// // Mouse not able seen  — that's expected. Playwright's mouse actions are not visually shown on the screen by default.
    await page.mouse.move(500, 400);
    await page.waitForTimeout(1000);

    await page.mouse.wheel(0, 500);
    await page.waitForTimeout(2000);

    // Screenshot after scrolling
    await page.screenshot({
        path: "after-scroll.png",
        fullPage: false
    });
});