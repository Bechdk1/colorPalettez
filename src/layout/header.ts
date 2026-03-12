import { generateSection } from "../pages/userPage.ts";

export const header = document.createElement("header");
header.className = "relative shadow-xl";

const navBar = document.createElement("nav");
navBar.className = "w-full bg-[#4a3520]";

const navHeader = document.createElement("div");
navHeader.className = "flex justify-center items-center px-4 py-3";

const ulElm = document.createElement("ul");
ulElm.className = "flex gap-40 justify-center mr-24 p-4";

const liGenerate = document.createElement("li");
const aGenerate = document.createElement("button");
aGenerate.textContent = "PALETTE GENERATOR";
aGenerate.addEventListener("click", generateSection);
liGenerate.append(aGenerate);

const liMyPal = document.createElement("li");
const aMyPal = document.createElement("a");
aMyPal.textContent = "MY PALETTES";
aMyPal.href = "#";
liMyPal.append(aMyPal);

aGenerate.className = "text-white transition-colors hover:text-[#c4c9a8]";
aMyPal.className = "text-white transition-colors hover:text-[#c4c9a8]";

ulElm.append(liGenerate, liMyPal);
navBar.append(navHeader, ulElm);
header.append(navBar);
