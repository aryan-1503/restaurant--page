import createHome from "./home";
import createMenu from "./menu";
import createContactUs from "./contact";

const content = document.getElementById('content');
const displayContainer = document.createElement('div');
function createButtons() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons-container');

    const homeButton = createButton('Home', loadHome);
    const menuButton = createButton('Menu', loadMenu);
    const contactButton = createButton('Contact Us', loadContactUs);

    buttonContainer.append(homeButton, menuButton, contactButton);
    return buttonContainer;
}
function createButton(text, onClickFunction) {
    const button = document.createElement('button');
    button.innerText = text;
    button.onclick = onClickFunction;
    return button;
}

function loadHome(){
    displayContainer.innerHTML='';
    displayContainer.append(createHome());
    content.append(displayContainer);
}

function loadMenu(){
    displayContainer.innerHTML='';
    displayContainer.append(createMenu());
    content.append(displayContainer)
}
function loadContactUs(){
    displayContainer.innerHTML='';
    displayContainer.append(createContactUs());
}
function createDisplay() {

    displayContainer.classList.add('display');
    displayContainer.append(createHome());
    return displayContainer;
}
function initializeWebsite(){
    content.append(createButtons());
    content.append(createDisplay());
}

export default initializeWebsite;
