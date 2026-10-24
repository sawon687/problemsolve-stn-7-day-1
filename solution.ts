// problem 1 solution


// var staircase = function(n:number) {

//     for(let i=1; i<=n;i++)
//     {       let result = "";
//          for(let j=1; j<=n-i; j++)
//          {
//              result+=" "
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

// // problem 11 solution
// var maximumWealth = function(accounts:number[][]) {

//            let maximum = 0

//            for(let i=0; i<accounts.length; i++) {
//              let sum = 0
//              for(let j=0; j<accounts[i].length; j++) {
//                sum += accounts[i][j]
//              }
//              maximum = Math.max(maximum, sum)
//            }

//            return maximum

// };

// console.log(maximumWealth([[1, 5], [7, 3], [3, 5]]))
// console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]))

// // problem 12 solution
// var removeDuplicates = function (nums: number[]) {
//      let k=1

//      for(let i=0 ; i<nums.length ;i++)
//      {
//          if(nums[i]!==nums[k-1])
//          {   nums[k]=nums[i]
//              k++
//          }
//      }

//      return k
// };

// console.log(removeDuplicates([1, 1, 2]))
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
// // problem 13  solution
// var containsDuplicate = function (nums: number[]) {

//   const set=new Set(nums)

//   return set.size!==nums.length
// };

// console.log(containsDuplicate([1, 2, 3, 2]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

// problem 14 solution

// var moveZeroes = function (nums: number[]) {

//   for (let i = 0; i < nums.length; i++) {
//       if(nums[i]==0){
//         const zero=nums[i]
//             nums.splice(i,1)
//             nums.push(zero)
         
//       }
//   }


  
// };
// const nums=[0, 1, 0, 3, 12]
// moveZeroes(nums)

// console.log(nums)


// // Problem 15 solution

// var merge = function(nums1: number[], m: number, nums2: number[], n: number): void {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;

//     while (j >= 0) {
//         if (i >= 0 && nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             nums1[k] = nums2[j];
//             j--;
//         }

//         k--;
//     }
// };

// let nums1: number[] = [1, 2, 3, 0, 0, 0];
// merge(nums1, 3, [2, 5, 6], 3);
// console.log("Problem 15:", nums1);


// // Problem 16 solution

// var threeSum = function(nums: number[]): number[][] {
//     nums.sort((a, b) => a - b);

//     let result: number[][] = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) {
//             continue;
//         }

//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             let sum = nums[i] + nums[left] + nums[right];

//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);

//                 left++;
//                 right--;

//                 while (left < right && nums[left] === nums[left - 1]) {
//                     left++;
//                 }

//                 while (left < right && nums[right] === nums[right + 1]) {
//                     right--;
//                 }
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// };

// console.log("Problem 16:", threeSum([-1, 0, 1, 2, -1, -4]));


// // Problem 17 solution

// var plusOne = function(digits: number[]): number[] {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits;
//         }

//         digits[i] = 0;
//     }

//     digits.unshift(1);
//     return digits;
// };

// console.log("Problem 17:", plusOne([1, 2, 9]));


// // Problem 18 solution

// var reverseString = function(s: string[]): void {
//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {
//         let temporary = s[left];

//         s[left] = s[right];
//         s[right] = temporary;

//         left++;
//         right--;
//     }
// };

// let characters: string[] = ["h", "e", "l", "l", "o"];
// reverseString(characters);
// console.log("Problem 18:", characters);


// // Problem 19 solution

// var lengthOfLastWord = function(s: string): number {
//     let index = s.length - 1;

//     while (index >= 0 && s[index] === " ") {
//         index--;
//     }

//     let length = 0;

//     while (index >= 0 && s[index] !== " ") {
//         length++;
//         index--;
//     }

//     return length;
// };

// console.log("Problem 19:", lengthOfLastWord("Hello World"));


// // Problem 20 solution

// var longestCommonPrefix = function(strs: string[]): string {
//     if (strs.length === 0) {
//         return "";
//     }

//     let prefix = strs[0];

//     for (let i = 1; i < strs.length; i++) {
//         while (!strs[i].startsWith(prefix)) {
//             prefix = prefix.slice(0, -1);

//             if (prefix === "") {
//                 return "";
//             }
//         }
//     }

//     return prefix;
// };

// console.log(
//     "Problem 20:",
//     longestCommonPrefix(["flower", "flow", "flight"])
// );