// 1. In ra tất cả các phần tử của một mảng. Ví dụ mảng [1, 2, 3] thì in ra 1 2 3 
const arr = [1, 2, 3];
arr.forEach(item => {
    console.log(item);
})
console.log("----------");

// 2. Tính tổng, tìm giá trị lớn nhất và nhỏ nhất trong một mảng. Ví dụ mảng [1, 2, 3] thì tổng sẽ là 6 (1+2+3) và giá trị lớn nhất là 3 
const arr1 = [1, 21, 13, 44, 9];
let sum = 0;
let max = arr1[0];
let min = arr1[0];
arr1.forEach(number => {
    sum += number;
    if (number > max) {
        number = max;
    }
    if (number < min) {
        number = min;
    }
});
console.log(`Tổng gía trị mảng là ${sum} `);
console.log(`Giá trị lớn nhất là ${max} `);
console.log(`Giá trị nhỏ nhất là ${min} `);
console.log("----------");
//3. Tạo một mảng mới từ một mảng đã cho, trong đó mỗi phần tử được nhân đôi. Ví dụ mảng [1, 2, 3] thì mảng mới sẽ là [2, 4, 6] 
const arr2 = [2, 56, 32, 11, 0];
const arr3 = [];
arr2.forEach(item => {
    let newItem = (item * 2);
    arr3.push(newItem);
});
console.log(`Mảng mới là ${arr3}`);
console.log("----------");