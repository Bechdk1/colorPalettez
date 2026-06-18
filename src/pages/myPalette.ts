import { colorCard } from "../components/colorCard.ts";

export function randomPage() {
  const page = document.createElement("section");
  page.id = "myPal";
  const h1 = document.createElement("h1");
  h1.innerText = "Here is your saved Palettes";
  h1.classList = "";
  page.append(h1);
  return page;
}
