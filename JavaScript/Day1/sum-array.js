function sumArray(arr){
    if(arr.length == 0){
        return 0
    }else{
        let sum =0;
        for(let i = 0; i<=arr.length - 1; i++){
            sum += arr[i]
        }
        return sum
    }
}

let total =  sumArray([1, 2, 3, 4]) 
console.log(sumArray([])) 

console.log(total + 5)