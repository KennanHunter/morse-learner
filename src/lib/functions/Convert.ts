import { invert } from "underscore";
// Conversion table
export const textToMorseTable = {
	// Letters
	A: ".-",
	B: "-...",
	C: "-.-.",
	D: "-..",
	E: ".",
	F: "..-.",
	G: "--.",
	H: "....",
	I: "..",
	J: ".---",
	K: "-.-",
	L: ".-..",
	M: "--",
	N: "-.",
	O: "---",
	P: ".--.",
	Q: "--.-",
	R: ".-.",
	S: "...",
	T: "-",
	U: "..-",
	V: "...-",
	W: ".--",
	X: "-..-",
	Y: "-.--",
	Z: "--..",

	// Numbies
	1: ".----",
	2: "..---",
	3: "...--",
	4: "....-",
	5: ".....",
	6: "-....",
	7: "--...",
	8: "---..",
	9: "----.",
	0: "-----",
};

export const morseToTextTable = invert(textToMorseTable);

export function toMorse(text: string): string {
	let wordArray = text.split(" ");
	let convertedWordArray = wordArray.map((value) => {
		return [...(value.toUpperCase() as any)]
			.map((val: keyof typeof textToMorseTable) => {
				return textToMorseTable[val];
			})
			.join(" ");
	});
	return convertedWordArray.join(" / ");
}

export function toText(morse: string): string {
	let wordArray = morse.split(" / ");
	let convertedWordArray = wordArray.map((value) => {
		return value
			.split(" ")
			.map((val) => {
				return morseToTextTable[val as keyof typeof morseToTextTable];
			})
			.join("");
	});
	console.log(wordArray);
	return convertedWordArray.join(" ");
}
