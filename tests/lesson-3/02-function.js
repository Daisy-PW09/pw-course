//1. Viết một hàm để tính chỉ số BMI (Body Mass Index) dựa trên chiều cao (mét) và cân nặng (kg) và trả về phân loại BMI (Thiếu cân, Bình thường, Thừa cân, Béo phì). Biết: 
// ○ Chiều cao được tính theo đơn vị mét (VD: 1.75m) 
// ○ Cân nặng tính theo kg 
// ○ Công thức tính BMI: cân nặng / (chiều cao*chiều cao) 
// ○ BMI < 18.5: Thiếu cân
// ○ BMI < 25: Bình thường 
// ○ BMI < 30: Thừa cân 
// ○ BMI >= 30: Béo phì 
function resultBMI(height, weight) {
    let bmi = weight / (height * height);
    if (bmi < 18.5) {
        return "Thiếu cân";
    } else if (bmi < 25) {
        return "Bình thường ";
    } else if (bmi < 30) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
}
console.log(resultBMI(1.58, 45));

console.log("----------");

// 2. Viết một hàm để chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại. Hàm sẽ nhận vào giá trị nhiệt độ và loại nhiệt độ ('C' hoặc 'F') và trả về 
// nhiệt độ đã chuyển đổi. 
// Biết công thức chuyển đổi: 
// ○ Từ độ C sang độ F: độ F = (độ C) * 9/5 + 32; 
// ○ Từ độ F sang độ C: (độ F - 32) * 5 / 9; 
function convertTemp(temp, temptype) {
    let ctof = ((temp * 9) / 5) + 32;
    let ftoc = ((temp - 32) * 5) / 9;
    if (temptype === "C") {
        return ctof;
    } else if (temptype === "F") {
        return ftoc;
    } else {
        return "temptype must be 'C' or 'F'";
    }
}
console.log(convertTemp(60, "F"));

console.log("----------");

// 3. Khai báo một mảng các phần tử bất kì. Viết một hàm để tính tổng của các phần tử trong một mảng số. 
const arr = [2, 3, 4, 7, 12, 45, 50];
function resultSum(arr) {
    let sum = 0;
    arr.forEach(item => {
        sum += item;
    });
    return (sum);
}
console.log(resultSum(arr));

console.log("----------");

// 4. Viết một hàm để lọc ra các số nguyên tố từ một mảng số đã cho. Biết: 
// ○ Số 0, số 1 không phải số nguyên tố. 
// ○ Các số nguyên tố là số chỉ chia hết cho 1 và chính nó 
const prime = [0, 5, 10, 1, 13, 20, 2, 7];
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
function filterPrime(prime) {
    const getPrime = prime.filter(isPrime);
    console.log(`Các số nguyên tố: ${getPrime}`);
}
filterPrime(prime);

console.log("----------");

// 5. Tạo một function để cập nhật email cho người dùng trong một danh sách, dựa trên tên người dùng. 
// Đoạn code giả mã (pseudo code) như sau: 
// Khai báo mảng global các object có 2 thuộc tính: name, email // Khai báo hàm có 2 tham số: name, newEmail 
// Sử dụng vòng for, duyệt trong mảng, nếu gặp phần tử nào có tên trùng với tham số name, cập nhật giá trị email về newEmail 
const users = [
    { name: 'Daisy', email: 'daisy@gmail.com' },
    { name: 'Lily', email: 'lily@gmail.com' },
    { name: 'Rosie', email: 'rosie@gmail.com' }
];
function updateEmail(name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            users[i].email === newEmail;
            console.log(` Email của ${name} đã được cập nhật thành ${newEmail}`);
            return;
        }
    }
    console.log("Không cập nhật được");
}
updateEmail('Tuanh', 'newdaisy@gmail.com');

console.log("----------");

// 6. Viết một hàm tính điểm trung bình của các sinh viên dựa trên điểm số lưu trong một mảng các object. 
// Biết object có cấu trúc như sau: {“name”: “Alex”, score: 85} 
function average(users) {
    let sum = 0;
    users.forEach(user => {
        sum += user.score;
    });
    return sum / users.length;

}
const infoUsers = [
    { "name": "Alex", score: 85 },
    { "name": "Sandy", score: 70 },
    { "name": "Vicky", score: 95 },
    { "name": "Johny", score: 80 }
]
console.log(`Điểm trung bình là ${average(infoUsers)}`);

console.log("----------");

// 7. Viết một hàm để kiểm tra xem tất cả sản phẩm trong một mảng có giá lớn hơn 0 không. 
// Biết giỏ hàng là một mảng chứa các object sản phẩm. Sản phẩm có cấu trúc: {“name”: “product 1”, price: 100 } 
const cart = [
    { "name": "Banana", price: 0 },
    { "name": "Cherry", price: 100 },
    { "name": "Rice", price: 150 }
];
function checkPrice(products) {
    let allPrice = true;
    products.forEach(item => {
        if (item.price <= 0) {
            allPrice = false;
        }
    });
    return allPrice;
};
if (checkPrice(cart)) {
    console.log("Tất cả giá sản phẩm trong giỏ hàng lớn hơn 0");
} else {
    console.log("Tất cả giá sản phẩm trong giỏ hàng không lớn hơn 0");
}
console.log("----------");

// 8. Viết hàm có một tham số là giờ, in ra cửa hàng còn mở cửa hay không. Biết cửa hàng mở cửa từ 9 giờ sáng đến 9 giờ tối. 
function openTime(hour) {
    if (hour >= 9 && hour <= 21) {
        console.log("Cửa hàng còn mở cửa");
    } else {
        console.log(" Cửa hàng đóng cửa");
    }
}
openTime(5);

console.log("----------");

// 9. Viết hàm có tham số là tuổi, in ra mức giá vé vào cổng tùy theo độ tuổi: trẻ em dưới 5 tuổi miễn phí, người lớn từ 18 tuổi trở lên là 100k, 
// và trẻ em từ 6 đến 17 tuổi là 50k.  
function ticketPrice(age) {
    if (age < 5) {
        console.log("Giá vé vào cồng: Free");
    } else if (age >= 6 && age <= 17) {
        console.log("Giá vé vào cổng: 50k");
    } else if (age >= 18) {
        console.log("Giá vé vào cổng: 100k");
    } else {
        console.log("Giá trị không hợp lệ");
    }
}
ticketPrice(4);
ticketPrice(12);
ticketPrice(20);
ticketPrice(5);

console.log("----------");

// 10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý. 
function monthName(month) {
    switch (month) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5:
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        default:
            console.log("December");
    }
}
monthName(3);

console.log("----------");

// 11. Viết hàm nhập vào điểm số. In ra phân loại điểm số của học sinh: giỏi (>= 8), khá (>= 6.5 và < 8), trung bình (>= 5 và < 6.5), yếu (< 5). 
function scoreType(score) {
    if (score < 5) {
        console.log("Học sinh yếu");
    } else if (score < 6.5) {
        console.log("Học sinh trung bình ");
    } else if (score < 8) {
        console.log("Học sinh khá ");
    } else {
        console.log("Học sinh giỏi ");
    }
}
scoreType(7);
console.log("----------");

// 12. Viết hàm có một tham số là nhiệt độ, in ra nhiệt độ và thông báo trạng thái thời tiết: nóng (>= 30 độ C), mát (< 30 độ C và >= 20 độ C), 
// lạnh (< 20 độ C)
function weatherForecast(temp) {
    if (temp >= 30) {
        console.log(`Nhiệt độ ${temp} , Trạng thái thời tiết: Nóng`);
    } else if (temp >= 20) {
        console.log(`Nhiệt độ ${temp} , Trạng thái thời tiết: Mát`);
    } else {
        console.log(`Nhiệt độ ${temp} , Trạng thái thời tiết: Lạnh`);
    }
}
weatherForecast(12);













