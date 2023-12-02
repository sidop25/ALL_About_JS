// console.log("2">1); // js engine converts stirng into number and then compares them
// console.log("02">1); // same for this one
// // the o/p value is in the form of boolean
// console.log(2>1); // yk - true
// console.log(2>=1); // yk -true
// console.log(2 != 1); //yk - true
// console.log(2==1); // yk - false 

// ** in javascript == and > < operator are treated differently in case of equality null is treated as null and in case of comparison operator null is converted into number i.e 0
//and the it is compared
// console.log(null == 0) // null == 0 o/p false
// console.log(null >= 0) // 0(null) >= 0 o/p true
// console.log(null > 0) // 0(null) > 0 o/p false
// console.log("2"==1)

// in case of undefined it is not converted into an number  so the o/p for all the cases is false
// console.log(undefined > 0)
// console.log(undefined >= 0)
// console.log(undefined == 0)

// === vs ==
// == checks only value - loose equality
// === checks value and datatype - strict equality
console.log("2" === 2 ) // o/p false
console.log("2" == 2 ) // o/p true