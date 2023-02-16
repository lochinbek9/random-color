"use strict";

const body = document.querySelector("body");

const container = document.querySelector(".container");
const colorText = document.querySelector("p");
const btn = document.querySelector("button");
const values = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

// random color functiion

function getGradient() {
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomColor = Math.trunc(Math.random() * values.length);
    color += values[randomColor];
  }
  return color;
}

function setGradient() {
  const color1 = getGradient();
  const color2 = getGradient();
  const randomDeg = Math.trunc(Math.random() * 360);
  const bgColor = `linear-gradient(
    ${randomDeg}deg,
    ${color1},
    ${color2}
  )`;
  body.style.background = bgColor;
  colorText.textContent = bgColor;
  console.log(bgColor);
}

btn.addEventListener("click", () => {
  setGradient();
});
