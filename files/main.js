// JQuery
import { translateToMorseCode } from "./morse-code-translate.js";

const inputBox = document.querySelector("#input");
const display = document.querySelector("#display");
const translateButton = document.querySelector("#translate");
const resetBtn = document.querySelector("#reset");

const translate = () => {
    const input = inputBox.value;
    display.innerHTML = translateToMorseCode(input);
}

const reset = () => {
    display.textContent = "";
    inputBox.value = "";
}

translateButton.addEventListener("click", translate);
resetBtn.addEventListener("click", reset);