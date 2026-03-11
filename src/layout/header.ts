export const header = document.createElement("header");
header.className = "relative shadow-xl";

const navBar = document.createElement("nav");
navBar.className = "w-full bg-[#4a3520]";

const navHeader = document.createElement("div");
navHeader.className = "flex justify-end items-center px-4 py-3";

const ulElm = document.createElement("ul");
ulElm.className = "flex gap-40 justify-end mr-24 p-4";

const liAbout = document.createElement("li");
const aAbout = document.createElement("a");
aAbout.textContent = "PALETTE GENERATOR";
aAbout.href = "#";
liAbout.append(aAbout);

const liBrands = document.createElement("li");
const aBrands = document.createElement("a");
aBrands.textContent = "MY PALETTES";
aBrands.href = "#";
liBrands.append(aBrands);

aAbout.className = "text-white transition-colors hover:text-[#c4c9a8]";
aBrands.className = "text-white transition-colors hover:text-[#c4c9a8]";

ulElm.append(liAbout, liBrands);
navBar.append(navHeader, ulElm);
header.append(navBar);
