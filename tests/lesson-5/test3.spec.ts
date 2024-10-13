import { test } from '@playwright/test';

test("Todo Page", async ({ page }) => {
    await test.step("Truy cap trang ", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step("Click vao Bai hoc 3 ", async () => {
        await page.click("//a[@href='03-xpath-todo-list.html']");
    });
    await test.step("Thêm mới 100 todo item có nội dung “Todo <i>” ", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.click ("//button[@id='add-task']");
        }
    });
    await test.step("Xoa cac Todo co so le” ", async () => {
        page.on('dialog', async dialog => dialog.accept());
        for (let i = 1; i <= 100; i += 2) {
            await page.click(`//button[@id='todo-${i}-delete']`);
        }
    });
    })
