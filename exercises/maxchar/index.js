// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c" 
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    const characterMap = {};
    let max = 0;
    let maxChar = '';
// build character map to represent string 
    for (let character of str) {
        if (characterMap[character]) {
            characterMap[character]++;
        } else {
            characterMap[character] = 1;
        }
    }
// iterate through character map to find most used character
    for (let character in characterMap) {
        if (characterMap[character] > max) {
            max = characterMap[character];
            maxChar = character;
        }
    }
    return maxChar;
}

module.exports = maxChar;
