/***
 * Capitalize Word
 * @param string
 * @param everyWord
 * @returns {string|*}
 */
const toCapitalize = (string, everyWord) => {
    string = string.trim();
    if (everyWord) {
        return string.split(" ").map(word => {
            const lower = word.toLowerCase()
            return word.charAt(0).toUpperCase() + lower.slice(1)
        }).join(" ")
    } else {
        const lower = string.toLowerCase();
        return string.charAt(0).toUpperCase() + lower.slice(1);
    }
};

export default toCapitalize