let message: string = "That's my message!";
let number1: number = 2;
let number2: number = 3;

console.log(message);
console.log("That's my number 1:" + number1);
console.log("That's my number 2:" + number2);

number1 += number2;

console.log("That's my result:" + number1);

message = message + number1;

console.log("Combined:" + message);
