export function savePalette(data: Array<Array<number>>) {
 if (data){
    
    localStorage.setItem("userPalettes", JSON.stringify(data))
 }
}