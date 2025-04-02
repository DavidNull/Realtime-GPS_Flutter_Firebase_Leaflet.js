const titleElement = document.getElementById("page-title");
const earthIcons = ["🌍", "🌏", "🌎"]; // son 3 elementos asi q con % cuando sea 2%2 el resto sera 0 por tanto empezara de nuevo
const titleText = "WHERE IS MY KID?";
let index = 0;

function updateTitle() {
    const firstIcon = earthIcons[index % earthIcons.length];
    const secondIcon = earthIcons[(index + 1) % earthIcons.length];
    titleElement.textContent = `${firstIcon} ${titleText} ${secondIcon}`; 
    index++;
}

setInterval(updateTitle, 800); //infinito
