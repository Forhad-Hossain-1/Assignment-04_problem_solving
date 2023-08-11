function cubeNumber(number) {
    if(isNaN(number)){
        return 'please input the number value'
    }
    return number * number * number;
}
// const provideNum = '';
// const result = cubeNumber(provideNum);
// console.log(result);






function matchFinder(string1, string2) {
    if(typeof string1=='number' || typeof string2=='number'){
        return 'You can use only word';
    }else
    return string1.includes(string2);
}

// const result = matchFinder("John Doe", "Doe");
// console.log(result);






function sortMaker(arr) {
    if(arr[0]===arr[1]){
        return 'equal'
    }
    for(item of arr){
        if(item<0){
            return "Invald input"
        }        
    }
    return arr.sort((x,y) => y-x)

}
// numberArr = [4, -2];
// console.log(sortMaker(numberArr))



function findAddress(obj) {
    if (typeof obj == "object"){
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street + ',' + house + ',' +''+society;
     }
 }
  let objectProperty={
     street: 10,
     house:'',
     society: "Earth Perfect"
 }
//   console.log(findAddress(objectProperty))





function canPay(changeArray, totalDue) {
    if(changeArray.length === 0){
        return 'array has no elements';
    }
    let kuchraTaka = 0;
    for(item of changeArray){
        kuchraTaka +=item
    }
    if(kuchraTaka<=totalDue){
        return false;
    }else{
        return true;
    }
}
// console.log(canPay([2,5,5],10))
