function odd(targetArr) {

    let oddArr = []
    for (let index = 0; index < targetArr.length; index++) {
        
        if (targetArr[index] % 2 === 1) {

            oddArr.push(targetArr[index])
            
        }
        
    }

    return oddArr
}

function even(targetArr) {
    let evenArr = []
    for (let index = 0; index < targetArr.length; index++) {
        
        if (targetArr[index] % 2 === 0) {

            evenArr.push(targetArr[index])
            
        }
        
    }

    return evenArr
    
}

function sum(inpArr) {
    let sum = 0;
    for (let index = 0; index < inpArr.length; index++) {
        
        sum+=inpArr[index]
        
    }
    
    return sum
}
function oddEven(targetArr1,targetArr2,oddOrEven) {

    if(oddOrEven.toLowerCase() === "odd"){
        let oddArr = odd(targetArr1)
        let evenArr = even(targetArr2);
        let oddSum = sum(oddArr)
        let evenSum = sum(evenArr)
        let res = [oddSum,evenSum]
        return res
    }
    if (oddOrEven.toLowerCase() === "even") {

        let oddArr = odd(targetArr2)
        let evenArr = even(targetArr1);
        let evenSum = sum(evenArr)
        let oddSum = sum(oddArr)
        let res = [evenSum,oddSum]
        return res
        
    }
    
}


var result = oddEven([1,2,3,4,5,6,7,8,9,10,11,12,13],[1,2,3,4],"even"); 

console.log(result);