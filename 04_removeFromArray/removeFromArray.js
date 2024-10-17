const removeFromArray = function(array, ...args) {
    return array.filter(entries => !args.includes(entries))
};

// Do not edit below this line
module.exports = removeFromArray;
