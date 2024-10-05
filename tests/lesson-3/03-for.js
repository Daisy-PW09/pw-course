// 1. Tính tổng từ 1 đến 100. 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Tổng từ 1 đến 10 là ${sum}`);

console.log("----------");

// 2. In bảng cửu chương từ 2 đến 9
// for (let i = 2; i <= 9; i++){
//     console.log (`Bảng cửu chương ${i}`);
//     for (let j = 1; j <= 10; j++)
//         console.log (`${i} x ${j} = ${i*j}`)
//     }
// console.log ("----------");

// 3. Tạo một mảng chứa các số lẻ từ 1 đến 99
const arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
        arr.push(i);
    }
}
console.log(`Các số lẻ từ 1 đến 99 là ${arr}`);
console.log("----------");

// 4. In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:user-1@example.com, user2@example.com, ..., user10@example.com)
for (let i = 1; i <= 10; i++) {
    const email = `user${i}@example.com`;
    console.log(email);
}
console.log("----------");
// 5. Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. 
// Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100} 
const revenue = [
    { "month": 1, "total": 138 },
    { "month": 2, "total": 145.5 },
    { "month": 3, "total": 234 },
    { "month": 4, "total": 50 },
    { "month": 5, "total": 134.56 },
    { "month": 6, "total": 159 },
    { "month": 7, "total": 198 },
    { "month": 8, "total": 435 },
    { "month": 9, "total": 46 },
    { "month": 10, "total": 111 },
    { "month": 11, "total": 567 },
    { "month": 12, "total": 950 }
];
let totalRevenue = 0;
for (let item of revenue) {
    totalRevenue += item.total;
}
console.log(`Tổng doanh thu của 12 tháng là ${totalRevenue}`);
console.log("----------");
