import "../tailwind/style.css";
import { header } from "./header.ts";


const body = document.getElementById("body")!;

body.append(header);

