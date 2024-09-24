# Version control system 
## Định nghĩa  
- Quản lý các phiên bản 
- Kiểm tra được ai là người update phiên bản và nội dung chỉnh sửa 
## Các hệ thống quản lý phiên bản 
1. Local: quản lý thông tin ở máy cá nhân 
2. Centralize: quản lý thông tin ở máy chủ tập trung ( có thể backup dữ liệu từ máy chủ về máy cá nhân)
3. Distributed: quản lý thông tin ở nhiều máy tính khác nhau (dữ liệu không bị mất đi do những nguyên nhân khách quan và chủ quan)

# Git
## Định nghĩa 
- Là từ viết sai chính tả có chủ đích của Get
- Distributed version control systemm 
## Vì sao chọn Git 
- Dễ dùng và phổ biến 
- Free cost 
## Ba vùng trạng thái của Git 
1. Working Directory
- Gồm các file mới hoặc có chỉnh sửa 
2. Staging Area 
- Các file chuẩn bị commit 
3. Repository 
- Các commit (phiên bản)
## Các câu lệnh thườno gặp 
### 1. Git init
- Khởi tạo 3 vùng trạng thái 
- Tất cả các file trong folder sẽ nằm trong vùng Working Directory 
### 2. Git add <tên file>
- Thêm file nào đó từ vùng working directory sang staging area
### 3. Git add. 
- Thêm tất cả các file trong folder từ vùng working directory sang staging area 
### 4. Git commit -m"commit message" 
- Chuyển file từ vùng staging sang repository 
- Convention: < type >: < short description >
  * type: chore : chỉnh sửa nhỏ lẻ hoặc xoá file không dùng 
  * type: feat: thêm tính năng mới
  * type: fix: sửa lỗi test cases 

### 5. Git config user.name "< name >" / Git config user.mail "< email >"
- Config username/email cho 1 repo nhất định 
### 6. Git config --global user.name "< name >" / Git config --gloabl user.mail "< email >"
- Config uername/email cho toàn bộ repo 
### 7. Git status 
- File màu đỏ: vùng working directory
- File màu xanh: vùng staging 
### 8. Git log 
- Kiểm tra lịch sử commit 

## Git simple workflow
### 1. Không dùng global config 
init - config - add - commit - push 
### 2. Dùng global config
init - add - commit - push

# Javascript
## Variable 
- Dùng để lưu trữ giá trị, có thể thay đổi giá trị được 
### Cú pháp: 
var < ten_bien > = < gia tri >;
let < ten_bien > = < gia tri >;

#### < ten_bien>
- Bắt đầu bằng chữ hoặc gạch dưới hoặc $
- Không chứa dấu cách 
- Không có các từ khoá có sẵn trong Javascript 

### Khác nhau Var và Let 
#### Var:
- Khai báo lại giá trị được 
- Phạm vi toàn cục (global)
#### Let: 
- Không thể khai báo giá trị được 
- Phạm vi trong cặp ngoặc {}
- Nên dùng Let vì dễ kiểm soát phạm vi của biến 

## Constant 
- Dùng để khai báo các giá trị không thể thay đổi 
### Cú pháp 
const < name > = < value >

## Data type 
- Có 8 loại kiểu dữ liệu: String, Number,
Bigint, Boolean, Undefined, Null,
Symbol, Object.
### 1. String 
- Dùng để khai báo một chuỗi 
### 2. Number 
- Dùng để khai báo 1 số ( số dương, số âm. số thập phân, số 0)
### 3. Boolean 
- Dùng khai báo 1 giá trị kiểu đúng sai (true or false)

## Comparison operator (toám tử so sánh)
- So sánh 2 biến với nhau - kết quả trả về là true of false 
### Các loại toán tử so sánh 
- So sánh hơn kém: >, <
- So sánh bằng: ==. ===, !=. !==, >=, <= >

## Unary operator (toán tử một ngôi)
- Tăng hoặc giảm giá trị 
- i++ => i = i +1 
- i-- => i = i -1 
## Conditional (điều kiện)
- Kiểm tra điều kiện trong code có được thực thi không
### Cú pháp 
if (< điều kiện >) { //code }
=> Nếu điều kiện đúng sẽ chạy đoạn code trong cặp {}
## Loop (vòng lặp)
- Thực hiện 1 đoạn code trong số lần xác định trước 
### Cú pháp 
for(<khởi tạo>; <điều
kiện chạy>; <thay đổi>) {
// code }
- Khởi tạo: chạy trước vòng lặp và chỉ chạy 1 lần duy nhất 
- Điều kiện chạy: chạy trước vòng lặp, kiểm tra điều kiện. Nếu đúng thì chạy code, sai thì dừng 
- Thay đổi: chạy cuối vòng lặp 








