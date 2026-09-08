// function capitalize(str) {
//     let newStr = ""
//   for (let i = 1; i < str.length; i++) {
//     newStr += str[i]
//   }
//   return(str[0].toUpperCase() + newStr);
// }

function capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
}

