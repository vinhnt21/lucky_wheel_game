// script.js
console.log("Hello, world!");

// Array chứa các hình ảnh trong folder imgs
const images = [
  "imgs/img1.png",
  "imgs/img2.png",
  "imgs/img3.png",
  "imgs/img4.png",
  "imgs/img5.png",
];

// Lấy các phần tử trong HTML
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const spinnerButton = document.getElementById("spinner-button");
const result = document.getElementById("result");

// Hàm để quay và cập nhật hình ảnh ngẫu nhiên trong các ô
function spinSlots() {
  // Tạo các ảnh ngẫu nhiên cho các ô
  const img1 = getRandomImage();
  const img2 = getRandomImage();
  const img3 = getRandomImage();

  // Cập nhật hình ảnh trong các ô
  slot1.innerHTML = `<img src="${img1}" alt="slot1">`;
  slot2.innerHTML = `<img src="${img2}" alt="slot2">`;
  slot3.innerHTML = `<img src="${img3}" alt="slot3">`;

  // Kiểm tra nếu tất cả các ô đều giống nhau
  if (img1 === img2 && img2 === img3) {
    result.textContent = "Bạn thắng rồi!";
  } else {
    result.textContent = "Chưa thắng, quay lại thử nhé!";
  }
}

// Hàm lấy ảnh ngẫu nhiên từ mảng images
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// Gán sự kiện cho nút quay
spinnerButton.addEventListener("click", spinSlots);
