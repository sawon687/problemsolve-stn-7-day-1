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



