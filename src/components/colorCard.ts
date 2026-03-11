import { fetchData } from "../data/api.ts";

export function colorCard() {
  const generateBtn = document.createElement("button");
  generateBtn.textContent = "Generate Paletes";
  generateBtn.className = buttonClass;

  let currentCard: HTMLElement | null = null; // Defining the card as a html-elemrnt or as nothing

  generateBtn.addEventListener("click", async () => {
    const data = await fetchData();
    console.log("fetchData:", data);
    if (!data) return;

    const card = generateCard(data.result);
    if (currentCard) currentCard.replaceWith(card);
    else document.body.appendChild(card);
    currentCard = card;
  });

  function generateCard(colorArray: number[][]): HTMLElement {
    const card = document.createElement("figure");

    colorArray.forEach((rgb) => {
      const wrapper = document.createElement("div");

      const colorSub = document.createElement("div");
      colorSub.classList = "bg-[rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}]";

      const hexSub =
        "#" + rgb.map((v) => v.toString(16).padStart(2, "0")).join("");
      const hexText = document.createElement("h3");
      hexText.innerText = hexSub;

      wrapper.append(colorSub, hexText);
      card.appendChild(wrapper);
    });

    return card;
  }

  return generateBtn;
}
