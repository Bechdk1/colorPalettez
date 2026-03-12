import "../tailwind/style.css";
import { header, aGenerate, aMyPal } from "./layout/header.ts";
import { section as generatorPage } from "./pages/userPage.ts";
import { randomPage } from "./pages/randomPage.ts";

const body = document.getElementById("body")!;
const randomPageEl = randomPage();

let currentPage: HTMLElement = generatorPage;
body.append(header, generatorPage);

aGenerate.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage.replaceWith(generatorPage);
  currentPage = generatorPage;
});

aMyPal.addEventListener("click", (e) => {
  e.preventDefault();
  currentPage.replaceWith(randomPageEl);
  currentPage = randomPageEl;
});
