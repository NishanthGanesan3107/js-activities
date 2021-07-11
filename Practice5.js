function mergeCurrency(myObj1, myObj2) {

    let resObj = {}
    for (const key in myObj1) {
        if (myObj2[key] !== undefined) {

            resObj[key] = myObj1[key] + myObj2[key]

        }
        else {
            resObj[key] = myObj1[key]
        }
    }
    for (const key2 in myObj2) {
        if (myObj1[key2] === undefined) {
            resObj[key2]=myObj2[key2]
        }
    }
    return resObj
}
console.log(mergeCurrency({ US: 100, CD: 200, IN: 250, SL: 400 }, { US: 150, ML: 900, CD: 200, IN: 220, JP: 200 }))