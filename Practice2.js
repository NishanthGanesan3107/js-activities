function toMyCase(input) {
    var toBeCapitalizedIndex = Math.floor(input.length / 2)
    var secCapitalized = input[toBeCapitalizedIndex].toUpperCase()
    secHalf = input.slice(toBeCapitalizedIndex + 1)
    if (input.length % 2 === 1) {
        
        var firstHalf = input.slice(0, toBeCapitalizedIndex)
        var res = firstHalf + secCapitalized + secHalf
        console.log(res);
    }
    else {
        firstCapitalized = input[toBeCapitalizedIndex - 1].toUpperCase()
        
        firstHalf = input.slice(0, toBeCapitalizedIndex - 1)
        res = firstHalf + firstCapitalized + secCapitalized + secHalf
        console.log(res);
    }
}
console.log("Test message 2");
toMyCase("abcdefghi")