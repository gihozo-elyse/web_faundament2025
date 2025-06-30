// function sumoffour(a, b, c, d) {
//   return a + b + c + d;
// }

// console.log(sumoffour(5, 3, 9, 6));

// const summArrow = (x, z) => {
//   return x + z;
// };

// console.log(summArrow(10, 20));

// let mark = 90;

// if (mark === 90) {
//   console.log("Excellent");
// } else {
//   console.log("Fail");
// }

// let num = 41;

// if (num % 2 === 0) {
//   console.log(num + " is even");
// } else {
//   console.log(num + " is odd");
// }
// let balance = 2000;
// let withdraw = parseFloat(prompt("Enter amount to withdraw:"));

// if (withdraw <= balance) {
//   alert(withdraw + " is successful");
// } else {
//   alert(withdraw + " is not successful");
// }
// let userName = "gihozo";
// let password = "12345";

// let enterUsername = prompt("Enter your user name:");
// let enterPassword = prompt("Enter your password:");

// if (userName === enterUsername && password === enterPassword) {
//   alert("Login successful");
// } else {
//   alert("Invalid username or password");
// }
// let =7;

// switch (dayNumber) {
  
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");

//     break;
//     case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Invalid day")}
// let num1 = parseFloat(prompt("Enter the first number:"));
// let num2 = parseFloat(prompt("Enter the second number:"));
// let operator = prompt("Enter an operation (+, -, *, /):");

// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
    
    
//     result = num1 / num2;
//     break;
//   default:
//     alert("Invalid operation");
//     break;
// }

// alert("the result is :"+result);
let balance = parseFloat(prompt("Enter your current account balance (RWF):"));

let transaction = prompt(
  "Choose a transaction:\n1. Withdraw\n2. Deposit\n3. Check Balance"
);

switch (transaction) {
  case "1": 
    let withdrawAmount = parseFloat(prompt("Enter amount to withdraw (RWF):"));
    if (withdrawAmount > balance) {
      alert("Insufficient balance!");
    } else {
      balance -= withdrawAmount;
      alert("Withdrawal successful.\nNew balance: " + balance.toFixed(2) + " RWF");
    }
    break;

  case "2": 
    let depositAmount = parseFloat(prompt("Enter amount to deposit (RWF):"));
    balance += depositAmount;
    alert("Deposit successful.\nNew balance: " + balance.toFixed(2) + " RWF");
    break;

  case "3": 
    alert("Your current balance is: " + balance.toFixed(2) + " RWF");
    break;

  default:
    alert("Invalid option selected. Please choose 1, 2, or 3.");
}
