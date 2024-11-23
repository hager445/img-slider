let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");
let imgParent = document.querySelector(".images");
let imgs = document.querySelectorAll(".images img");
let position;
let index = 0;

// leftbtn
leftBtn.addEventListener("click", () => {
  // ليه بنزود قبل الحركة عشان لو بدانا بصفر مش هيتحرك خالص اول مرة
  slider("left");
});
rightBtn.addEventListener("click", () => {
  slider("right");
});
// الكود المعدل
function slider(direction) {
  if (direction === "left") {
    index++;
    index = index === imgs.length ? 0 : index;
    console.log(`${index} left`);
  }
  if (direction === "right") {
    index = index === 0 ? imgs.length - 1 : index - 1;
    console.log(`${index} left`);
  }
  position = index * -100;
  imgParent.style.left = `${position}%`;
}
const styles = getComputedStyle(document.body);
console.log(imgParent.getBoundingClientRect());
window.addEventListener("scroll", () => {
  console.log("تم التمرير بمقدار: " + window.scrollY + "px");
});
