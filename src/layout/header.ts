export const header = document.createElement("header");
header.className = "relative shadow-xl";

const navBar = document.createElement("nav");
navBar.className = "w-full bg-[#4a3520]";

const ulElm = document.createElement("ul");
ulElm.className = "flex gap-40 justify-center p-4";

const liGenerate = document.createElement("li");
export const aGenerate = document.createElement("a");
aGenerate.textContent = "PALETTE GENERATOR";
aGenerate.href = "#";
liGenerate.append(aGenerate);

const liMyPal = document.createElement("li");
export const aMyPal = document.createElement("a");
aMyPal.textContent = "MY PALETTES";
aMyPal.href = "#";
liMyPal.append(aMyPal);

aGenerate.className = "text-white transition-colors hover:text-[#c4c9a8]";
aMyPal.className = "text-white transition-colors hover:text-[#c4c9a8]";

ulElm.append(liGenerate, liMyPal);
navBar.append(ulElm);
header.append(navBar);
