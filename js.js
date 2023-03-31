
const spaceDiv = document.querySelector(".space");
spaceDiv.addEventListener("click", moveSpaceX);

function moveSpaceX(e) {
  const spaceX = document.getElementById("spaceX");
  let posX = e.clientX;
  let posY = e.clientY;
  let divX = spaceX.parentElement.offsetLeft;
  let divY = spaceX.parentElement.offsetTop;

  let moveX = posX - divX - spaceX.offsetWidth / 2;
  let moveY = posY - divY - spaceX.offsetHeight / 2;

  spaceX.style.left = moveX + "px";
  spaceX.style.top = moveY + "px";
  spaceX.style.width = '2%';

  setTimeout(() => {
    spaceX.style.transition = "left 2s, top 2s";
  }, 2500);
}

// ดึง element ต่างๆ เพื่อเพิ่ม event listener สำหรับคลิก
const s2 = document.querySelector(".s2");
const s3 = document.querySelector(".s3");
const s4 = document.querySelector(".s4");
const s5 = document.querySelector(".s5");
const s6 = document.querySelector(".s6");

s2.addEventListener("click", function () {
  // ย่อ s2
  s2.style.transform = "scale(2)";

  // ขยาย s3, s4, s5, s6
  s3.style.transform = "scale(1)";
  s4.style.transform = "scale(1)";
  s5.style.transform = "scale(1)";
  s6.style.transform = "scale(1)";
  setTimeout(function () {
    window.location.href =
      "https://th.wikipedia.org/wiki/%E0%B9%82%E0%B8%A5%E0%B8%81_(%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B2%E0%B8%B0%E0%B8%AB%E0%B9%8C)";
  }, 2000);
});
// สร้าง event listener สำหรับคลิก
s3.addEventListener("click", function () {
  // ย่อ s2
  s2.style.transform = "scale(1.6)";

  // ขยาย s3, s4, s5, s6
  s3.style.transform = "scale(2)";
  s4.style.transform = "scale(1.3)";
  s5.style.transform = "scale(1.2)";
  s6.style.transform = "scale(1.2)";
  setTimeout(function () {
    window.location.href = "https://en.wikipedia.org/wiki/Moon";
  }, 2000);
});

s4.addEventListener("click", function () {
  // ย่อ s2
  s2.style.transform = "scale(1.4)";
  // ขยาย s3, s4, s5, s6
  s3.style.transform = "scale(1.5)";
  s4.style.transform = "scale(2)";
  s5.style.transform = "scale(1.7)";
  s6.style.transform = "scale(1.7)";
  setTimeout(function () {
    window.location.href =
      "https://th.wikipedia.org/wiki/%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B9%8C";
  }, 2000);
});

s5.addEventListener("click", function () {
  // ย่อ s2
  s2.style.transform = "scale(1.3)";
  // ขยาย s3, s4, s5, s6
  s3.style.transform = "scale(1.2)";
  s4.style.transform = "scale(1.2)";
  s5.style.transform = "scale(3)";
  s6.style.transform = "scale(2.5)";
  setTimeout(function () {
    window.location.href =
      "https://th.wikipedia.org/wiki/%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B8%A2%E0%B8%B9%E0%B9%80%E0%B8%A3%E0%B8%99%E0%B8%B1%E0%B8%AA";
  }, 2000);
});

s6.addEventListener("click", function () {
  // ย่อ s2
  s2.style.transform = "scale(1.2)";
  // ขยาย s3, s4, s5, s6
  s3.style.transform = "scale(1.3)";
  s4.style.transform = "scale(1.1)";
  s5.style.transform = "scale(2)";
  s6.style.transform = "scale(4)";
  setTimeout(function () {
    window.location.href =
      "https://th.wikipedia.org/wiki/%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B8%9E%E0%B8%A5%E0%B8%B9%E0%B9%82%E0%B8%95";
  }, 2000);
});


