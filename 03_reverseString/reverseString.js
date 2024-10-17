const reverseString = function(string) {
    let result = '';
    for (let character = string.length - 1; character >= 0; character--) {
        result += string.charAt(character)
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
