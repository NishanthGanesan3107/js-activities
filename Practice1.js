function checkCount(targetArr,findIt2){
    var ArrIndex = 0;
    for(let i =0;i<targetArr.length;i++){
      if(targetArr[i] === findIt2){
        ArrIndex+=i;
      }
    }
  
  return ArrIndex
}
function findIndexCnt(targetArr1,targetArr2,findIt){ 

    var sumOfArrIndex = checkCount(targetArr1,findIt)+checkCount(targetArr2,findIt)
    
    return sumOfArrIndex
}

var inputArr1 = [1,2,3,1]
var inputArr2 = [2,4,1,6,1]
var findInput = [1,6,5]


function findMultipleIndexCnt(targetArrOne,targetArrTwo,findItTwo){
  
  var sum = 0;

  for(let i =0;i<findItTwo.length;i++){
    
    let indexCount = findIndexCnt(targetArrOne,targetArrTwo,findItTwo[i])
    console.log("Count of "+findItTwo[i]+" is "+indexCount)
    
     sum+=indexCount
    
    
    
  }
 
  
  return "Sum of all index >>> "+sum
}
if(Array.isArray(findInput) !== true){
  console.log(findIndexCnt(inputArr1,inputArr2,findInput))
}

else{
  console.log(findMultipleIndexCnt(inputArr1,inputArr2,findInput))
}