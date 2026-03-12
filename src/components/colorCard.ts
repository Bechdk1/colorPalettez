import { fetchData } from "../data/api.ts";

export function colorCard() {
  const container = document.createElement("div");

  const generateBtn = document.createElement("button");
  generateBtn.textContent = "Generate Palettes";
  generateBtn.className = "buttonClass";

  container.append(generateBtn);

  let currentCard: HTMLElement | null = null;

  generateBtn.addEventListener("click", async () => {
    const data = await fetchData();
    if (!data) return;

    const card = generateCard(data.result);
    if (currentCard) currentCard.replaceWith(card);
    else container.appendChild(card);
    currentCard = card;
  });

  function generateCard(colorArray: number[][]): HTMLElement {
    const card = document.createElement("figure");

    colorArray.forEach((rgb) => {
      const wrapper = document.createElement("div");
      wrapper.classList = "flex flex-row items-center p-2";

      const hexSub =
        "#" + rgb.map((v) => v.toString(16).padStart(2, "0")).join("");
      const hexText = document.createElement("h3");
      hexText.innerText = hexSub;

      const colorSub = document.createElement("div");
      colorSub.style.backgroundColor = hexSub;
      colorSub.style.width = "100px";
      colorSub.style.height = "100px";

      wrapper.append(colorSub, hexText);
      card.appendChild(wrapper);
    });

    return card;
  }

  return container;
}
