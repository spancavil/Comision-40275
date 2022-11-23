export function capitalizeFirstLetter (word) {
    const wordLowerCase = word.toLowerCase();
    return wordLowerCase.charAt(0).toUpperCase() + wordLowerCase.slice(1)
}