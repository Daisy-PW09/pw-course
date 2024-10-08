// 1. Khởi động Tàu Vũ trụ K10 
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K10";
let crew = ["Tung", "Tu Anh", "Thu", "Khai", "Khanh", "Rosy"];
function launchShip(crew) {
    return (`Chuẩn bị khởi động! Phi hành đoàn gồm:${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K10`);
}
console.log(launchShip(crew));

// 2. Du hành đến hành tinh bí ẩn 
function calculateDistance(speed, time) {
    return speed * time;
}
console.log(`Khoảng cách đến hành tinh bí ấn: ${calculateDistance(1000, 24)}`);

// 3. Hành tinh kỳ lạ 
function convertTimeToHex(time) {
    return time.toString(16);
}
console.log(`Thời gian trong hệ thập lục phân: ${convertTimeToHex(120)}`);

// 4. Khám phá kho báu 
function decryptCode(code) {
    let resultDecrypt = "";
    for (let char of code) {
        if (char === char.toUpperCase()) {
            resultDecrypt += char.toLowerCase();
        } else if (char === char.toLowerCase()) {
            resultDecrypt += char.toUpperCase();
        } else {
            resultDecrypt += char;
        }
    }
    return resultDecrypt;
}
const code = "K10 Challenge";
console.log(`Mật mã là ${decryptCode(code)}`);


// 5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();

