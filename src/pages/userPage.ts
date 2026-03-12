import { colorCard } from "../components/colorCard.ts";

let currentSection: HTMLElement | null = null;

export function generateSection() {
  let section = document.createElement("section");
  section.classList = "mx-6";

  const generateBtn = colorCard();

  let h1 = document.createElement("h1");
  h1.innerText = "Welcome to our Color Palette Generator";
  section.append(h1, generateBtn);

  if (currentSection) currentSection.replaceWith(section);
  else document.body.appendChild(section);
  currentSection = section;
}
