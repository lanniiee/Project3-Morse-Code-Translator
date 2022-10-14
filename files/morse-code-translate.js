import { alphabet } from "./morse-code-Obj.js";

export const translateToMorseCode = (str) => {
    const keys = Object.keys(alphabet);
    const strLowerCase = str.toLowerCase();
    let result = "";
    if (strLowerCase === "") {
        result = "Enter a valid text";
    }
    for (let i = 0; i < strLowerCase.length; i++) {
        if (alphabet.hasOwnProperty(strLowerCase[i])) {
            result += alphabet[strLowerCase[i]];
        }
        else {
            return result = "invalid character included";
        }
    }
    return result.trim();
};

