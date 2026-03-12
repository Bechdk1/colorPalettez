import "../tailwind/style.css";
import { header } from "./layout/header.ts";
import { mainLayout } from "./layout/mainLayout.ts";
import { colorCard } from "./components/colorCard.ts";

const body = document.getElementById("body")!;

body.append(header, mainLayout);

// const generateBtn = colorCard();
// body.append(generateBtn);
