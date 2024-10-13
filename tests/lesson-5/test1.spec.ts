import { test } from '@playwright/test';

test("Register Page", async ({ page }) => {
    await test.step("Truy cap trang ", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step("Click vao Bai hoc 1 ", async () => {
        await page.click("//a[@href='01-xpath-register-page.html']");
    });
    await test.step("Input Username ", async () => {
        await page.locator("//input[@id='username']").fill("Tu Anh Tran");
    });
    await test.step("Input Email ", async () => {
        await page.locator("//input[@id='email']").fill("tuanh123@gmail.com");
    });
    await test.step("Select gender and hobbies", async () => {
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='traveling']").check();
    });
    await test.step("Select country", async () => {
        await page.selectOption("#country", { value: 'canada' });
    });
    await test.step("Input DOB ", async () => {
        await page.locator("//input[@id='dob']").fill("1993-08-14");
    });
    await test.step("Input Biography ", async () => {
        await page.locator("//textarea[@id='bio']").fill("I'm learning Playwright");
    });
    await test.step("Drag Rate Us ", async () => {
        await page.locator("//input[@id='rating']").hover();
        await page.mouse.down();
        await page.mouse.up();
    });
    await test.step("Newsletter Hover over me  ", async () => {
        await page.locator("//input[@id='newsletter']").check();
    });
    await test.step("Newsletter Hover over me  ", async () => {
        await page.click("//button[@type='submit']");
    });

})