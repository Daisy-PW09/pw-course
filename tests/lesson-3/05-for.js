// 1. In ra tên và giá trị của mỗi thuộc tính trong một đối tượng. Ví dụ: object student = {“name”: “Alex”, “age”: 10} thì in ra 
// name=Alex 
// age=10 
const student = [
    { "name": "Alex", "age": 11 },
    { "name": "Sandy", "age": 15 },
    { "name": "Vicky", "age": 18 },
    { "name": "Johny", "age": 13 }
]
for (let item in student) {
    console.log(`name = ${student[item].name}`);
    console.log(`age = ${student[item].age}`)
};
console.log("----------");
//2. Tính tổng các giá trị số của các thuộc tính trong một đối tượng. 
//Ví dụ: object student={“name”: “Alex”, “age”: 10, “salary”: 20} thì in ra tổng 30 (=10+20).
const employee = [
    { "name": "Alex", "age": 20, "salary": 40 },
    { "name": "Sandy", "age": 15, "salary": 56 },
    { "name": "Vicky", "age": 18, "salary": 25 },
    { "name": "Johny", "age": 13, "salary": 32 }
]
let total = 0;
for (let item in employee) {
    for (let number in employee[item]) {
        if (typeof employee[item][number] === 'number') {
            total += employee[item][number];
        }
    }
};
console.log(`Tổng giá trị ${total}`);
console.log("----------");
//3. Tạo một mảng chứa tất cả các tên thuộc tính của một đối tượng. 
// Ví dụ object student={“name”: “Alex”, “age”: 10} thì sẽ tạo ra một mảng [“name”, “age”]
const info = { "name": "Alex", "age": 11 };
const infoObj = [];
for (let item in info) {
    infoObj.push(item);
}
console.log(infoObj);
console.log("----------");
