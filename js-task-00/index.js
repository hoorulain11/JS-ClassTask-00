JS-ClassTask-00


QUESTION: 01
          -> SUM OF ALL DIGITS OF A NUMBER. FOR EXAMPLE, 123 -> 1+2+3=6
const num = prompt("Enter a numbers");
let sum = 0;
for (let i = 0; i < num.length; i++){
    sum = sum + parseInt(num[i]);
}

console.log(sum);


QUESTION: 02
        -> SUM OF THE RANGE OF 2 NUMBERS. FOR EAMPLE, NUM1=2, NUM2=5 -> 2+3+4+5=14.
let num1 = 2;
let num2 = 5;
let sum = 0;
for (let i = num1; i <= num2; i++){
    sum = sum + i;
}
console.log(sum);


QUESTION: 03
          -> CALCULATE THE AVERAGE OF NUMBERS GIVEN IN AN ARRAY.
let sum = 0;
let number = [10,20,30,40];
for (let i = 0; i < number.length; i++){
    sum = sum + number[i];
}
let average = sum / number.length;
console.log(average);


QUESTION: 04
          -> COMPARE STRINGS BY COUNT OF CHARACTERS. FOR EXAMPLE, CAR AND BAT ARE EQUAL. CAR AND CARE ARE NOT.

let firstString = prompt("Enter first string");
let secondString = prompt("Enter second string");
if (firstString.length === secondString.length) {
    console.log("two strings are equal");
} else {
    console.log("strings are not equal");
}


QUESTION: 05
        -> SWAP THE FIRST AND LAST CHARACTER OF A STRING. FOR EXAMPLE, NAME -> EAMN.

let string = "name";
let firstChar = string.slice(0, 1);
let lastChar = string.slice(-1);
let middleChars = string.slice(1, -1);
let swapString = lastChar + middleChars + firstChar;
console.log({ string, swapString});









