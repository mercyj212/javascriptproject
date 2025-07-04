// let age = 60;
// let name = 'gedoni';
// let is_student = true;
// let gp = 1.5
// let courses = ['maths', 'eng']


// console.log(age);
// console.log(name);
// console.log(is_student);
// console.log(typeof gp);
// console.log(typeof courses);


// let a = 20;
// let b = 30;

// let c = a + b;
// console.log("the sum of 20 and 30 is: ", c);

// let d = a - b;
// let e = b / a;
// let f = c * b;
// let h = c % b;

// console.log("the subtraction of 30 and 20 is: ", d);
// console.log("the division of 30 and 20 is: ", e);
// console.log("the multiplication of 50 and 30 is: ", f);
// console.log("th reminder of 50 and 30 is: ", h);

// let score = 5;

// if (score >= 70) {
//     console.log('excellent');
// }else if (score >= 50) {
//     console.log('passed');
// }
//  else{
//     console.log('failed');

//  let grade = prompt("enter you grade");

// if (grade >= 70) {
//     console.log('A');
// }else if (grade >= 50) {
//         console.log('B');     
// }else if (grade >= 40) {
//         console.log('C');      
// }else if (grade >= 30) {
//         console.log('D');     
// }
//   else {
//     console.log('F'); 
//   }
  

// let color = 'yellow';

// if (color == 'red') {
//     console.log("stop");
// }
// else if (color == 'yellow') {
//     console.log("warning");
// }
// else{
//     console.log("go");  
// }


// let num1 = Number(prompt("enter your first number"))
// let num2 = Number(prompt("enter your second number"))

// let res1 = num1 + num2;
// let res2 = num1 * num2;
// let res3 = num1 / num2;
// let res4 = num1 - num2;

// console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
    
// let name = prompt("What is your name?");
// let age = Number(prompt("How old are you?"));
// let gender = prompt("What is your gender?, answer with M or F")
// let country = prompt("What Country are you from?")

// alert("Hello my name is " + name);
// console.log("Hello my name is " + name);
// alert("I am " + age + " years old");
// console.log("I am " + age, "years old");
// alert("I am a " + gender);
// console.log("I am a " + gender);
// alert("I am from " + country)
// console.log("I am from " + country);

// let time = prompt("What is the time? Answer with the 24hrs timeframe")

// if (time >= 12) {
//     console.log("Hello Good Afternoon, have you had lunch?");
//     alert("Hello Good Afternoon, have you had lunch?");
    
// }else if(time <= 8) {
//     console.log("Hey you just woke up?, hope you had a goodnight rest");
//     alert("Hey you just woke up?, hope you had a goodnight rest.")
    
// }

// else {
//     console.log("Hey there, what did you have for brakfast?");
//     alert("Hey there, what did you have for brakfast?");
    
// }

// For loops 
// for (let num = 1; num <= 10; num++) {
//     console.log(num);
// }

// While loops 
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Do while loops
// let j = 1;
// do {
//     console.log(j);
//     j++;
// }while (j <= 10);


// for (let no = 10; no >= 1; no--) {
//     console.log(no);
// }



//  let a= 2;
//  do {
//     console.log(a);
//     a++;
//  }while (a <= 15);

// let y = 10;
// while (y >= 1) {
//     console.log(y);
//     y--;
// }

// num = prompt("Enter a number to check if it is even or odd: ");
// if (num % 2 == 0) {
//     console.log("The number is even"); 
//     alert("The number is even"); 
// }
// else {
//     console.log("The number is odd");
//     alert("The number is odd");
// }


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// for (let i = 10; i >= 1; i--) {
//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }

// function in js is a whole block of code designed to perform a particular task.
// why we use fuctions is to avoid repetition of code, it makes the code more readable and easier to maintain.
// fuctions without parameters

// let num1 = 10;
// let num2 = 20;

// function sum() {
//       console.log("the sum of 20 and 10 is " + (num1 + num2));   
// }
// sum();

// // fuctions with parameters
// function sumWithParams(a, b) {
//     return a + b;
// }

// let psum = sumWithParams(5, 10);
// console.log("the sum of 5 and 10 is ", psum);


// function greet(name) {
//     console.log("Hello " + name);
// }
// greet("gedoni");
// greet("john");

 
// function sum(num) {
//   if (num % 2 == 0) {
//          console.log(num, "is even number");
         
// groceryList.pop();
//  console.log(groceryList);

//  groceryList.shift();
//  console.log(groceryList);

//  groceryList.unshift('juice');
// console.log(groceryList);

// for (let j = 0 ; j < groceryList.length; j++) {
//    console.log(groceryList[j]);
// }    
//    else {
//       console.log(num, "is odd number");
//    }
// }
// sum(30);
// sum(17);

// function sum() {
//    for (let num = 1; num <=10; num++) {
//       if (num % 2 == 0) {
//          console.log(num, "is even number");
//       }
//       else {
//          console.log(num, "is odd number");
//       }
//    }
// }
// sum();

// // Arrays are special variables that can hold more than one value at a time.
//  let courses = ['maths', 'english', 'biology', 'chemistry'];
//  let numbers = [1, 2, 3, 4, 5];

//  console.log(courses [2]);
//  console.log(numbers [4]);

//  courses[2] = 'physics';
//  console.log(courses);
 
// //  push method in array adds an item to the array
// courses.push('history');
// console.log(courses);

// // pop method in array removes the last item in the array
// courses.pop();
// console.log(courses);

// // shift method in an array removes the first item in the array
// courses.shift();
// console.log(courses);

// courses.unshift('geography'); // unshift method in an array adds an item to the beginning of the array
// console.log(courses);

// console.log(courses.length); // this returns the length of the array


// let fruits = ['apple', 'banana', 'orange', 'grape'];
//  fruits.reverse();
//  console.log(fruits);

//  fruits.sort();
//  console.log(fruits);


//  let num = [8, 2, 6, 5, 8, 3];
//  num.sort()
//  console.log(num);

//  for (let i = 0; i < num.length; i++) {
//      console.log(num[i]);
//  }

//  let groceryList = ['milk', 'bread', 'eggs', 'butter', 'cheese'];

//  groceryList.push('chips');
//  console.log(groceryList);



let myFavNum = [2, 5, 4, 7, 6, 3, 8, 10];

function num() {
   for (let y = 0; y < myFavNum.length; y++) {
      console.log(myFavNum[y]);
   }  
}


function num2(number) {
    if (number % 2 == 0) {
      console.log(number, "is even");
   }
   else {
      console.log(number, "is NOT even");
   }
}

num();
num2(7);

