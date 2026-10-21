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


// problem 2 solution

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