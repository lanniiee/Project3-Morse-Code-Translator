import { translateToMorseCode } from "./morse-code-translate.js"

describe("translateToMorseCode", () => {
    it("should translate A to .-", () => {
        const result = translateToMorseCode("A");
        expect(result).toBe(".-");
    });

    it("should translate hello to .... . .-.. .-.. --- ", () => {
        const result = translateToMorseCode("hello");
        expect(result).toBe(".... . .-.. .-.. ---");
    });

    it("should test for space", () => {
        const result = translateToMorseCode("hello world");
        expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    });

    it("should test for valid character", () => {
        const result = translateToMorseCode("$@=#!");
        expect(result).toBe("invalid character included");
    });

    it("should translate HELLO to .... . .-.. .-.. ---", () => {
        const result = translateToMorseCode("HELLO");
        expect(result).toBe(".... . .-.. .-.. ---");
    });

    it("should test for combination", () => {
        const result = translateToMorseCode("hello 123 &!");
        expect(result).toBe(".... . .-.. .-.. --- / .---- ..--- ...-- / .-... -.-.--");
    })

    it("should test for empty string", () => {
        const result = translateToMorseCode("");
        expect(result).toBe("Enter a valid text");
    })

});
