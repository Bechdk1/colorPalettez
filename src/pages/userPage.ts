import { colorCard } from "../components/colorCard.ts";

export function generateSection () => {
    let section = document.createElement("section")
    section.classList = "";
    let buttonGenerate = document.createElement("button");
    buttonGenerate.append(colorCard);  // DET HER SKAL MÅSKE LAVES TIL EN ON CLICK EVENT MED colorCARD som (e, colorCard) ? 
    buttonGenerate.innerText = "Generate palette"
    buttonGenerate.classList = "HER SKAL VI HAVE CLASSLIST FOR SAMTLIGE BUTTONS IMPORTERET IND OG SAT PÅ";
    let h1 = document.createElement("h1");
    h1.innerText = "Welcome to our Color Palette Generator"
    section.append(h1, buttonGenerate);
}