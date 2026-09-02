function convertTemp(value, unit){
    let result;
    if(unit === "F"){
      result = (value - 32) * 5/9;
        return result
    }else if(unit === "C"){
        result = value * 9/5 + 32;
        return result;
    }else{
        return "Invalid unit"
    }
}

console.log(convertTemp(212, "F"))
console.log(convertTemp(0, "C"))
console.log(convertTemp(100, "K"))