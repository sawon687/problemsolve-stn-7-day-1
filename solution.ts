// problem 1 solution

// var staircase = function(n:number) {

//     for(let i=1; i<=n;i++)
//     {       let result = "";
//          for(let j=1; j<=n-i; j++)
//          {
//              result+=" "
//          }

//           for(let j=1; j<=i; j++)
//          {
//              result+="#"
//          }

//          console.log(result)
//     }
// };

// staircase(4)

// // problem 2 solution

// var gradingStudents = function(grades:number[]) {
//   const newArray:number[]=[]
//    for(let grade of grades){

//       const nextMultipleOfFive = Math.ceil(grade / 5)*5
//       const newValue=grade>=38 && ((nextMultipleOfFive-grade)<3)?nextMultipleOfFive:grade
//       newArray.push(newValue)
//    }

//    return newArray
// };

// console.log(gradingStudents([73, 67, 38, 33]))

// problem 3 solution

// var timeConversion = function(s:string) {

//     const modifier=s.slice(-2)
//     const modifierTimer=s.slice(0,-2)

//     let [hour,minute,second]=modifierTimer.split(":")

//         if(hour==='12')
//         {
//            hour=modifier==='AM'?"00":"12"
//         }else{
//            if(hour=="PM")
//            {
//              hour=String(Number(hour)+12)
//            }
//         }

//     return `${hour}:${minute}:${second}`
// };

// console.log(timeConversion("07:05:45PM"));

// problem 04 solution
// // option 1
// var repeatStr = function(n:number, s:string) {
//     let result=''
//       for(let i=0 ; i<n;i++)
//       {
//         result+=s
//       }
//      return result
// };

// option 2
// var repeatStr = function(n:number, s:string) {

//     return s.repeat(n)

// };

// console.log(repeatStr(0,"hello"))

//  problem 05 solution
// var solution = function (str: string) {
//   return str.split("").reverse().join("");
// };

// console.log(solution("hello"));
// console.log(solution("world"));
// console.log(solution(""));

// // prolem 06 solution

// var positiveSum = function (arr: number[]) {
//   return arr.reduce((acc, curr) => {
//     if (curr > 0) {
//       return acc + curr;
//     }
//     return acc;
//   }, 0);
// };

// console.log(positiveSum([1, -4, 7, 12]))
// console.log(positiveSum([-1, -2, 0, -5]))

// //  problem 07 solution
// var summation = function(num:number) {
//   return (num*(num+1))/2
// };

// console.log(summation(8))
// console.log(summation(1))

// // problem 08 solution

// var booleanToString = function(b:boolean) {
//   return String(b)
// };
// console.log(booleanToString(true))
// console.log(booleanToString(false))

// // problem 09

// var fizzBuzz = function(n:number) {
//       const arr:string[]=[]

//       for(let i=1; i<=n;i++){
//           if(i%3==0&&i%5==0)
//           {
//              arr.push('FizzBuzz')
//           }else if(i%3==0){
//              arr.push('Fizz')
//           }else if(i%5==0){
//             arr.push('Buzz')
//           }else{
//             arr.push(String(i))
//           }

          
//       }

//       return arr
// };

// console.log(fizzBuzz(5))
// console.log(fizzBuzz(15))

// // problem 10 solution

// var runningSum = function(nums:number[]) {
//     const arr:number[]=[]
//       let sum=0
//      for(let i=0 ; i<nums.length; i++){
           
//           sum+=nums[i]
//           arr.push(sum)
//      }

//      return arr
// }

// console.log(runningSum( [1, 2, 3, 4]))
// console.log(runningSum( [1, 1, 1, 1, 1]))

// problem 11 solution
var maximumWealth = function(accounts:number[][]) {
    
           let maximum = 0

           for(let i=0; i<accounts.length; i++) {
             let sum = 0
             for(let j=0; j<accounts[i].length; j++) {
               sum += accounts[i][j]
             }
             maximum = Math.max(maximum, sum)
           }

           return maximum

};

console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))
console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))
