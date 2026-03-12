import { colorCard } from "../components/colorCard.ts";

export const section = document.createElement("section");
section.className = "mx-6";

section.append(colorCard());
