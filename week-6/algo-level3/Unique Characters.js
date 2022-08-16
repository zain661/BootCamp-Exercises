// (function () {
//     console.log(1);
//     setTimeout(function () { console.log(2) }, 1000);
//     console.log(3);
//     setTimeout(function () { console.log(4) }, 0);
//     setTimeout(function () { console.log(6) }, 0);
//     console.log(5);
// })();
//stack = 1 , 3 , 5
//queue = 4, 6 , 2

//Unique Characters
//Implement an algorithm to determine if a string has all unique characters.



// function isUniqueChar(str){
//     const setUnique = new Set(arr)
//    return (str.length == setUnique.size)
// }

// console.log(isUniqueChar("zayn"))

//Chars to Length

// function CharstoLength(str){
//     let count = 1
//     let result = ""
//     for(let i = 0 ; i<str.length ; i++){
//         if(str[i] === str[i+1]){
//             count++
//         }
//         else {
//            result += str[i] + count
//            count = 1
//         }
//     }
//     console.log(result)
// }

// CharstoLength("aaabbca")

//Camelcase

// function Camelcase(str) {
//   // let arr = str.split("")
//   for (let i in str) {
//     if (str[i] == ' ') {
//       // str.splice(i,1)
//       str = str.charAt(i + 1).toUpperCase()
//     }
//   }
//   console.log(str);
// }
// Camelcase("a b");
// let str = "abc sod"
// str = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(str)

function LongestSubstring(str){
        for(let i in str){
            if(str[i] == str[i+1]){

            }
            
        }
}