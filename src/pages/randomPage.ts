import { colorCard } from "../components/colorCard.ts"

export function randomPage() {
  const page = document.createElement("section")
  page.id = "random-page"

  const generator = colorCard()

  page.append(generator)

  return page
}
