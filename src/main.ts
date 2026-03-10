import "../tailwind/style.css";
import { header } from "./header.ts";
import { mainLayout } from "./mainLayout.ts";
import { colorCard } from "./colorCard.ts";

const body = document.getElementById("body")!;

body.append(header, mainLayout);

const palette = document.querySelector("#palette");

// Массив цветов
// Это одна тестовая палитра
const colors = [
  "#CF9407",
  "#F6EDB7",
  "#BDBF63",
  "#601E3E",
  "#7C7582"
];

// Создай карточку цвета
// Возьми каждый цвет из массива по очереди”
colors.forEach((color) => {
// Добавь готовую карточку в секцию палитры”
  palette?.append(colorCard(color));
});