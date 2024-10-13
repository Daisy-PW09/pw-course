# DOM (Document Object Model)
## Khái niệm
- Là câu trúc của html, dùng để mô hình hoá trang web 
- Dùng để truy xuất hay thao tác trên các tài liệu có cấu trúc html 
- Kiểm tra bằng cách click chuột phải -> chọn Inspect 
- Dom bao gồm element và phân cấp cha-con giữa các thẻ html 
- Dom sẽ bao gồm html (cao nhất trong html) - head - body 
## Các thẻ HTML thường gặp 
- Thẻ div (viết tắt của divide): dùng để chia các khối trong trang web
- Thẻ h1 đến h6 (viết tắt của heading): dùng để tạo ra các header phân cấp theo thứ tự từ
lớn đến bé.
- Thẻ form : dùng để chứa một form thông tin.
- Thẻ input: text, email, radio, checkbox, file, color, range, date
- Thẻ textarea: hiển thị ô input, dạng to
- Thẻ radio button
- Thẻ checkbox
- Thẻ list và dropdown
- button
- Thẻ table
   - thead = table heading
     - tr = table row = 1 dòng
       - th: table heading: text in đậm
   - tbody
     - tr -> td = table data
- Thẻ date picker
- Thẻ slider
- Thẻ iframe
## Element 
### Cú pháp 
<option>value="usa">United States</option>
Trong đó: <option> là thẻ mở 
          value là thuộc tính 
          "usa" là giá trị thuộc tính 
          United States là text 
          </option> là thẻ đóng 

# Selector 
## Khái niệm 
- Là cách chọn phần tử trên trang 
- Có nhiều kiểu:
  * Xpath selector 
  * CSS selector 
  * Playwright selector 
## Xpath selector 
### Xpath tuyệt đối:
- Đi dọc theo cây DOM 
- Bắt đầu bởi 1 / 
- Ex: /html/body/div[2]/h1
### Xpath tương đối 
- Tìm dựa vào đặc tính 
- Bắt đầu bởi 2 // 
- //tenthe[@thuoctinh="gia tri"]
- Ex: //h1[@id='self']
=> Nên dùng Xpath tương đối 
# Playwright basic syntax
## test 
- Đơn vị cơ bản để khai báo 
- import { test } from '@playwright/test
- test ('<tên test>', async ({page})=> {
    code của test 
});
## Step 
- Đơn vị nhỏ hơn test, để khai báo từng step của test case 
- await test.step('Tên step', async () => {
    // code của test 
});
- Note: step nên map 1-1 với test case để dễ dàng maintain 
## Basic actions
### Navigate 
- await page.goto('https://pw-practice.playwrightvn.com/');
### Click 
- Single click 
await page.locator("//button").click();
- Double click 
await page.locator("//button").dblclick();
- Right click 
page.locator("//button").click({
button: 'right'
})
- Right click and press another keys
page.locator("").click({
modifiers: ['Shift'],
})
### Input 
- page.locator("//input").fill('PlaywrightViet Nam');
### Radio/Checkbox
- Lấy giá trị iện tại đang là check hay không:
const isChecked = page.locator("//input").isChecked();
- Check/ uncheck
page.locator("//input").check();
page.locator("//input").setChecked(false);






