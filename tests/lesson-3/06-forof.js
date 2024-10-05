// 1. Tìm và in ra vị trí phần tử đầu tiên và cuối cùng trong một mảng bằng với giá trị cho trước. Ví dụ với mảng [1, 2, 3, 4, 3, 55, 23] 
// và giá trị cho trước là 3 thì vị trí cần in ra đầu tiên là 2 và vị trí cuối cùng cần in ra là 4
// indexOf() method returns the first index (position) of a specified value
// lastIndexOf() method returns the last index (position) of a specified value

const arr = [1, 2, 3, 4, 3, 55, 23];
const target = 3;
function findPositions(arr, target) {
    const firstPosition = arr.indexOf(target);
    const lastPosition = arr.lastIndexOf(target);
    return (`Vị trí đầu tiên: ${firstPosition}, Vị trí cuối cùng: ${lastPosition}`);
};
const result = findPositions(arr, target);
console.log(result);
console.log("----------");
// 2. Tạo mảng chứa các kí tự nghịch đảo từ một chuỗi đã cho. 
// Ví dụ với chuỗi ”Playwright” thì mảng kết quả sẽ là [“t”, “h”, “g”, “i”, “r”, “w”, “y”, “a”, “l”, “P”] => dua vao bai tap for 
const str = "Playwright";
const arr1 = [];
for ( let i = str.length -1; i >= 0; i-- ){
    arr1.push(str[i]);
}
console.log(arr1);
onsole.log("----------");
// 3. Lọc ra tất cả các phần tử duy nhất trong một mảng. Ví dụ với mảng [1, 2, 3, 1, 2, 4, 5] thì các phần tử duy nhất (xuất hiện 1 lần) là: [3, 4, 5]
const arr2 = [1, 2, 3, 1, 2, 4, 5];
const arr3 = [];
for (let i of arr2){
if (arr2.indexOf(i) === arr2.lastIndexOf(i)){
    arr3.push(i);
}
}
console.log (arr3);
console.log("----------");

