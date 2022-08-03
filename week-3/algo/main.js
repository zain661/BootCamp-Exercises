// //Count Vowels
// const a = ['a','a','b','c','d','e']
// const neW = a.filter(c => c != 'a' && c !='e' && c !='i' && c !='o' && c !='u')
// console.log(a.length - neW.length)

// //Median Char
//  const s = "question"
// //  "einoqstu"
//  let result = ' '
//  const b = s.split().sort().join()
//  const size = (b.length-1) / 2
//  result = b[size] 
//  console.log(result)

//  //Second Biggest
//  const array = [12,3,4,7,23]
//  let rel = 0
//  let max1 =0 , max2 =0
//  for(let i in array){
//     if(array[i]>max1){
//         max2 =  max1
//         max1 = array[i]

//     }
//     else if(array[i]>max2 && array[i]<max1){
//         max2 = array[i]
//     }
//  }
 
//  console.log(max2)

//  //Followed Numbers
//  let aaa=[];
//  const arra = [1,3,4,5] 
//  arra.sort((a,b) => a-b)
//  console.log(arra)
//  for(let i=0;i<arra.length-1;i++){
//     if(arra[i+1] == arra[i]+1)
//     {
//         aaa.push(arra[i]);
//         if(i==arra.length-2)
//         aaa.push(arra[i+1]);

//     } 

// }
// console.log(aaa)

//  // Duplicate an Array
//  const arr = [1,2,3]
//  const arr11=[]
//  for(let i of arr){
//     arr11.push(i)
//  }

// Reverse Only Numbers
//   const arr112 = [1,'w','e',2,'r',7,8]
//   let i = 0
//   let j = arr112.length -1
// while(i<j){
//       if(!(isNaN(arr112[i]))){
//          if(!(isNaN(arr112[j]))){
//              let temp = arr112[i]
//              arr112[i] = arr112[j]
//              arr112[j] = temp
//              i++
//              j--
//          }
//       }
// }
// console.log(arr112)
// function deepClone(obj) {
//     if (null == obj || 'object' != typeof obj) return obj;
//     if (obj instanceof Array) {
//       var copy = [];
//       for (var i = 0, len = obj.length; i < len; i++) {
//         copy[i] = deepClone(obj[i]);
//       }
//       return copy;
//     }
//     if (obj instanceof Object) {
//       var copy = {};
//       for (var attr in obj) {
//         if (obj.hasOwnProperty(attr)) copy[attr] = deepClone(obj[attr]);
//       }
//       return copy;
//     }
//   }
  
//   let x = { a: 'b', a2: ['first', 'second'] };
//   let y = { b: x, b3: ['firtsY', x] };
//   let z = deepClone(y);
//   x.a = 'a';
//   console.log(y);
//   console.log(z);
  
// const arr1 = [5]
// const arr2 = [1,2,5]
// const arr3 = [1,5]
// const newArr =[]
// let a = 0 , b=0, c=0
// // console.log(a , b ,c)
// // let min = Math.min(a,b,c)
// // console.log(min)
// let max = Math.max(arr1.length,arr2.length,arr3.length)
// while(a < arr1.length && b < arr2.length && c < arr3.length) {
//     if(arr1[a]==arr2[b]==arr3[c]){
//         newArr.push(arr1[a])
//     }
       
// }
// console.log(newArr)

const ar1 = [1, 2, 3, 4, 5, 15];
const ar2 = [1, 3, 4, 5, 25];
const ar3 = [1, 5, 8];

const common = function (ar1, ar2, ar3) {
  let fin = [];

  let a = 0;
  let b = 0;
  let c = 0;

  while (a < ar1.length && b < ar2.length && c < ar3.length) {
    if (ar1[a] == ar2[b] && ar2[b] == ar3[c]) {
      fin.push(ar1[a]);
      let temp = ar1[a];
      a++;
      while (a < ar1.length && ar1[a] == temp) {
        a++;
      }

      b++;
      temp = ar2[b];
      while (b < ar2.length && ar2[b] == temp) {
        b++;
      }

      c++;
      temp = ar3[c];
      while (c < ar2.length && ar3[c] == temp) {
        c++;
      }
    } else {
      let theMax =
        ar1[a] > ar2[b]
          ? ar1[a] > ar3[c]
            ? ar1[a]
            : ar3[c]
          : ar2[b] > ar3[c]
          ? ar2[b]
          : ar3[c];
      while (a < ar1.length && ar1[a] < theMax) {
        a++;
      }
      while (b < ar2.length && ar2[b] < theMax) {
        b++;
      }
      while (c < ar3.length && ar3[c] < theMax) {
        c++;
      }
    }
  }

  return fin;
};

console.log(common(ar1, ar2, ar3));



