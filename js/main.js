let background = document.querySelector("body"),
  title = document.getElementById("color"),
  changeBtn = document.getElementById("change");

let generateRGBValue = function () {
  return Math.floor(Math.random() * 256).toString(16);
};

let generateColorCode = function () {
  let red = generateRGBValue(),
    green = generateRGBValue(),
    blue = generateRGBValue();
  return "#" + red + green + blue;
};

let paintPage = function () {
  let color = generateColorCode();
  background.style.background = color;
  changeBtn.style.color = color;
  title.textContent = color;
}

paintPage();

changeBtn.addEventListener("click", paintPage);