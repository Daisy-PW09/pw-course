// 1. Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và year=2021. Sau đó in ra năm sản xuất của xe. 
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
}
console.log("Nam san xuat cua xe = " + car.year);

// Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc tính street, city, country). In ra tên đường của người này. 
let person = {
    "name": 'Tu Anh',
    "address": {
        "street": 'Vo Van Tan',
        "city": 'Ho Chi Minh',
        "country": 'Viet Nam'
    }
}
console.log("Street = " + person.address.street);

// Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông. Biết object student bao gồm 2 thuộc tính: name và grades. 
//Trong đó grades là một object với 2 thuộc tính kiểu number: math và english 

let student = {
    "name": 'Daisy',
    "grades": {
        "math": 8,
        "english": 9
    }
}
console.log("Math = " + student["grades"]["math"]);

// Tạo một object product với các thuộc tính là tên các sản phẩm và giá trị là giá của chúng. Dùng vòng lặp for...in để in ra tên và giá của mỗi sản phẩm. 
let product = {
    "Bread" : 30000,
    "Ice Coffee" : 25000,
    "Milk Tea" : 50000
};

for (let items in product){
    console.log (items + " " + product[items] + " " + "VND");
}
// Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như volume, brightness. Thay đổi volume và in ra object mới. 
const settings = {
    volume : 300,
    brightness : 100
};
settings.volume = 200;
console.log ("Volume: " + settings["volume"]);

// 6. Tạo một object bike và sau đó thêm thuộc tính color vào object đó 
let bike = {
    brand : 'Trek',
    model : 'AXS',
};
bike.color = "Red";
console.log (bike);

// Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này 
const employee = {
    "name" : 'Tu Anh',
    "age" : 31
}
delete employee.age;
console.log (employee);

//Một trường học có các lớp học và học sinh như sau: 
// classA: An, Bình, Châu 
// classB: Đào, Hương, Giang 
// Hãy viết code để đáp ứng yêu cầu sau: 
// Khai báo tên biến: school 
// Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa tên các học sinh 
// Vd: 
// const school = { classA: ["Giang"]...} 

const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log (school);
