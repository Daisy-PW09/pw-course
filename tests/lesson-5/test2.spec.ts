import { test } from '@playwright/test';

test("Product Page", async ({ page }) => {
    await test.step("Truy cap trang ", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step("Click vao Bai hoc 2 ", async () => {
        await page.click("//a[@href='02-xpath-product-page.html']");
    });
    await test.step("Click 2 lan san pham 1 ", async () => {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='1']").dblclick();
    });
    await test.step("Click 3 lan san pham 2 ", async () => {
        for (let i = 0; i < 3; i++) {
            await page.locator("//button[@class='add-to-cart' and @data-product-id='2']").click();
        }
    });
    await test.step("Click 1 lan san pham 3 ", async () => {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='3']").click();
    });
})