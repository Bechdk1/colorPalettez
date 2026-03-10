export function loadPalette() {
  const data = localStorage.getItem("userPalettes")

  if (data) {
    return JSON.parse(data)
  }

  return []
}