var myArr = ['a', 'b', 'c', ['d', 'e', 'f']]

for (let index = 0; index < myArr.length; index++) {

    if (Array.isArray(myArr[index]) === true) {

        for (let index2 = 0; index2 < myArr[index].length; index2++) {

            myArr.push(myArr[index][index2])

        }

        myArr.splice(index,index-2)

    }

}

console.log(myArr);

