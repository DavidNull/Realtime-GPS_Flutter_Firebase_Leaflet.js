const titleElement = document.getElementById("page-title");
const earthIcons = ["🌍", "🌏", "🌎"]; // there are 3 elements so with % when it is 2%2 the rest will be 0 so it will start again
const titleText = "WHERE IS MY KID?";
let index = 0;

function updateTitle() {
    const firstIcon = earthIcons[index % earthIcons.length];
    const secondIcon = earthIcons[(index + 1) % earthIcons.length];
    titleElement.textContent = `${firstIcon} ${titleText} ${secondIcon}`; 
    index++;
}

setInterval(updateTitle, 800); // ∞
