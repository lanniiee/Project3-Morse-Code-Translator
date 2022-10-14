// JQuery
import { translateToMorseCode } from "./morse-code-translate.js";

const inputBox = document.querySelector("#input");
const display = document.querySelector("#display");
const translateButton = document.querySelector("#btn");

const translate = () => {
    const input = inputBox.value;
    display.innerHTML = translateToMorseCode(input);
}


translateButton.addEventListener("click", translate)