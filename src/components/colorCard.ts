export function colorCard(color: string) {
  const card = document.createElement("div")
  const box = document.createElement("div")
  const info = document.createElement("div")
  const text = document.createElement("p")
  const copy = document.createElement("button")

  card.className = "color-card"
  box.className = "color-box"
  info.className = "color-info"


// цветной квадрат
  box.style.backgroundColor = color
//   HEX-код
  text.textContent = color
  copy.textContent = "copy"

//   <div class="color-card">
//   <div class="color-box"></div>
//   <div class="color-info">
//     <p>#CF9407</p>
//     <button>copy</button>
//   </div>
// </div>

  info.append(text, copy)
// собираем карточку
  card.append(box, info)

  return card
}