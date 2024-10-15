import { test, expect } from '@playwright/test';

test("Personnel Notes", async ({ page }) => {
    await test.step("Truy cap trang ", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step("Click vao Bai hoc 4 ", async () => {
        await page.click("//a[@href='04-xpath-personal-notes.html']");
    });
    await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn (khoảng 3 dòng) ", async () => {
        const notes = [
            {
                title: "Quá trình lấy lại màu sắc cho đội quân đất nung bất tử",
                content: "Đội quân đất nung của Tần Thủy Hoàng từng được sơn những màu rực rỡ làm từ khoáng vật tự nhiên như đá lông công, chu sa.Đội quân đất nung của Tần Thủy Hoàng từng được sơn những màu rực rỡ làm từ khoáng vật tự nhiên như đá lông công, chu sa."
            },
            {
                title: "Đàn sư tử níu chân quật ngã hươu cao cổ",
                content: "Để hạ gục hươu cao cổ to lớn hơn nhiều, đàn sư tử phối hợp níu chân con mồi, khiến nó không thể chạy thoát và dần kiệt sức",
            },
            {
                title: "Đàn Máy bay vũ trụ tối mật của Mỹ thử nghiệm phanh khí độngsư tử níu chân quật ngã hươu cao cổ",
                content: "Máy bay vũ trụ X-37B của Lực lượng Không gian Mỹ thử nghiệm phanh khí động và sẽ thực hiện một loạt thao tác chưa từng có nhằm thay đổi quỹ đạo",
            },
            {
                title: "Lý do chỉ vài ngôi nhà trụ vững sau bão có sức gió 225 km/h",
                content: "Bão Helena và Milton tràn qua với sức gió lên tới 225 km/h san phẳng nhiều dãy nhà, chỉ trừ một số còn nguyên vẹn do không có khe hở để tạo áp suất.",
            },
            {
                title: "Vệ tinh tái sử dụng đầu tiên của Trung Quốc trở về",
                content: "Vệ tinh Shijian 19 hạ cánh thành công xuống Bãi đáp Dongfeng lúc 9h39 ngày 11/10 (giờ Hà Nội) tại khu tự trị Nội Mông.",
            },
            {
                title: "Những tác phẩm đoạt giải cuộc thi nhiếp ảnh động vật hoang dã",
                content: "Giải thưởng Nhiếp ảnh động vật hoang dã lần thứ 60 của Bảo tàng lịch sử tự nhiên London đã chọn ra những bức ảnh xuất sắc từ 59.228 tác phẩm đến từ 117 quốc gia và vùng lãnh thổ.",
            },
            {
                title: "Chip lượng tử của Google đánh bại siêu máy tính nhanh nhất",
                content: "Thí nghiệm trên bộ xử lý Sycamore 67 qubit của Google cho thấy hoạt động tiến vào pha nhiễu yếu, trong đó các tính toán đủ phức tạp để vượt qua siêu máy tính.",
            },
            {
                title: "Tiến sĩ người Việt chế tạo trái tim có thông số như tim người",
                content: "TS Đỗ Thanh Nhỏ cùng cộng sự Đại học New South Wales, Australia thiết kế trái tim nhân tạo tâm thất trái, có khả năng mô phỏng chuyển động, áp suất máu và dòng chảy như trái tim thật",
            },
            {
                title: "Thiết bị dính dưới nước lấy cảm hứng từ bạch tuộc",
                content: "Trong thử nghiệm, thiết bị dính với phần thân cong, đàn hồi và lớp màng biến dạng có thể duy trì sức mạnh qua 100 chu kỳ.",
            },
            {
                title: "Người Việt đầu tiên được vinh danh giải TechWomen 100",
                content: "TS Nguyễn Thụy Bá Linh được vinh danh tại giải thưởng TechWomen 100 với đóng góp trong nghiên cứu phát triển công nghệ vật liệu tiên tiến ứng dụng y sinh và tái tạo mô.",
            },
        ];
        for (const item of notes) {
            await page.locator("//input[@id='note-title']").fill(item.title);
            await page.locator("//textarea[@id='note-content']").fill(item.content);
            await page.click("//button[@id='add-note']");
        }
        for (const item of notes){
            await expect(page.locator("//input[@id='note-title']")).toHaveText(item.title);
            await expect(page.locator("//textarea[@id='note-content']")).toHaveText(item.content);  
        }
        });
        await test.step("Thao tac search theo tieu de bat ky ", async () => {
        await page.locator("//input[@id='search']").fill("Quá trình lấy lại màu sắc cho đội quân đất nung bất tử");
        await expect(page.locator("//div/strong[contains(text(), 'Quá trình lấy lại màu sắc cho đội quân đất nung bất tử')]")).toBeVisible();
    });
})
