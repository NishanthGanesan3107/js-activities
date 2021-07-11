function oddEvenObjs(myObj) {
    let resObj = {}
    let evenArr = []
    let oddArr = []
    for (const key in myObj) {
        for (let index = 0; index < myObj[key].length; index++) {
            
            if (myObj[key][index] % 2 === 0 ) {

                evenArr.push(myObj[key][index])
                
            }
            else[
                oddArr.push(myObj[key][index])
            ]
        }
    }

    resObj["Odd Numbers"]=oddArr
    resObj["Even Numbers"]=evenArr

    return resObj
}

let inpObj = {
    data1 : [1,2,3,4,5,6,7,8,9],
    data2 : [3,2,7,45,64,33,95,12,1222],
    data3 : [5,2,7,4,1,5,2,4]
}

console.log(oddEvenObjs(inpObj))