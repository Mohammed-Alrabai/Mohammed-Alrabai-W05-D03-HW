// Home Work W05-D03-JAVASCRIPT_BOOTCAMP
/* 1. Question 1: Write a JavaScript function that reverse a number;
    _شرح_
    [تقبل رقم وتقوم بعكسه في حالة الطباعة ]
    */

function reverseNumber(num) {
  return num.toString().split("").reverse().join("");
}
var number = 987892131;
console.log(reverseNumber(number));

/* 2. Question 2: Write a JavaScript function that accepts a string
as a parameter and converts the first letter of each
word of the string in upper case.
                _شرح_
[تقبل نص وتقوم بتحويل اول حرف في الكلمة الى حرف كبيتل ]
*/

const string = "tuwaiq academy";
const str = string.split(" ");
for (let i = 0; i < str.length; i++) {
  str[i] = str[i][0].toUpperCase() + str[i].slice(1);
}
console.log(str.join(" "));

/* 3. Question 3: Write a JavaScript function that accepts a string
as a parameter and counts the number of vowels within
the string.
                _شرح_
[تقبل نص  وتبحث عن عدد الحروف الصوتية ]
*/
function countVowels(str) {
  var vowels = "aeiouAEIOU";
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }

  return count;
}

var myString = "Javascript is awesome";
console.log(countVowels(myString));

/* 4. Question 4: Write a JavaScript function that accepts a number
as a parameter and check the number is prime or not.
                _شرح_
[تقبل رقم وتتحقق اذا كان الرقم صحيح او لا ]
*/
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const num = 97;
console.log(isPrime(num));

/*
5. Question 5: Write a JavaScript function that accepts a string
as a parameter and find the longest word within the
string.
                _شرح_
[تقبل نص وتبحث عن اطول كلمة في النص ]
*/
function LongestWord(str) {
  return str.split(" ").sort((a, b) => b.length - a.length)[0];
}
console.log(LongestWord("Kingdom of Saudi arabia"));

/* 6. Question 6: Write a JavaScript function that returns a passed
string with letters in alphabetical order.
                _شرح_
[تقبل نص وتقوم يترتيب الحروف ابجديا]
                */
function alphabetical(str) {
  return str.split("").sort().join("");
}
console.log(alphabetical("webmaster"));

/* 7. Question 7: Create a function that takes two numbers as
arguments and returns their sum 
                _شرح_
[تقبل رقمين وتقوم بجمعهم]
*/
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(3, 2));
console.log(sum(-3, -6));
console.log(sum(7, 3));

/* 8. Question 8: Create a function that takes the age in years and
returns the age in days.
                _شرح_
[تقبل العمر وتقوم بتحويل العمر من سنوات الى ايام عن طريق ضربة في عدد ايام السنة ]
*/
function ageInDays(age) {
  return age * 365;
}
console.log(ageInDays(65));
console.log(ageInDays(0));
console.log(ageInDays(20));

/* 9. Question 9: Write a function that converts hours into
seconds.
                _شرح_
[تقبل الساعه وتقوم بتحويلها الى ثواني ]
*/
function hoursToSeconds(hours) {
  const seconds = 3600;
  return hours * seconds;
}
console.log(hoursToSeconds(2));
console.log(hoursToSeconds(10));
console.log(hoursToSeconds(24));

/* 10. Question 10: Create a function that takes a number as its
only argument and returns true if it's less than or
equal to zero, otherwise return false.
                _شرح_
[تقبل رقم وتقوم بتحقق اذا كان الرقم اكبر  من او يساوي الصفر ]
*/
function isLessThanOrEqualToZero(num) {
  return num <= 0;
}
console.log(isLessThanOrEqualToZero(5));
console.log(isLessThanOrEqualToZero(0));
console.log(isLessThanOrEqualToZero(-2));

/* 11. Question 11: Create a function that will return an integer number
corresponding to the amount of digits in the given
integer num
                _شرح_
[تقبل عدد وتتحقق من عدد الارقام في العدد المدخل ]
*/
function amountOfDigits(num) {
  return num.toString().length;
}
console.log(amountOfDigits(1000));
console.log(amountOfDigits(12));
console.log(amountOfDigits(1305981031));
console.log(amountOfDigits(0));

/* 12. Question 12: Write a function that converts an object into
an array, where each element represents a keyvalue pair in the form of an array.
                _شرح_
[تقوم بتحويل اوبجيكت الى مصفوفة ]
*/
function objectToArray(obj) {
  return Object.entries(obj);
}
let object = {
  a: 1,
  b: 2,
  c: 3,
};
let toArray = {
  shrimp: 15,
  tots: 12,
};
console.log(objectToArray(object));
console.log(objectToArray(toArray));
console.log(objectToArray({}));

/* 13. Question 13: . salesman has a number of cities to visit. They
want to calculate the total number of possible paths
they could take, visiting each city once before
returning home. Return the total number of possible
paths a salesman can travel, given n cities.
*/

function Paths(n) {
  let cities = 1;
  for (let i = 2; i <= n; i++) {
    cities *= i;
  }
  return cities;
}

console.log(Paths(4));
console.log(Paths(1));
console.log(Paths(9));

/* 14. Question 14: Create a function that takes a word and
returns true if the word has two consecutive identical
letters
                _شرح_
[تقبل كلمة وتتحقق اذا كانة تحتوي على حرفين متطابقين]
*/
function doubleLetters(word) {
  for (let i = 0; i < word.length - 1; i++) {
    if (word[i] === word[i + 1]) {
      return true;
    }
  }
  return false;
}
console.log(doubleLetters("loop"));
console.log(doubleLetters("yummy"));
console.log(doubleLetters("orange"));
console.log(doubleLetters("munchkin"));

/* 15. Question 15: Write a JavaScript program to get the current date.
                _شرح_
[تقوم بطباعة تاريخ اليوم ]
 */
function CurrentDate(format) {
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  return day + "/" + month + "/" + year;
}
const todaysDate = CurrentDate("dd-mm-yyyy");
console.log(todaysDate);

/* 16. Question 16: Create a function that takes two dates and returns
the number of days between the first and second date.
                _شرح_ 
[تقبل تاريخين وتقوم بحساب عدد الايام بينهم ]
*/
function daysBetweenDates(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const numberBetweenDays = Math.round(
    Math.abs((firstDate - secondDate) / oneDay)
  );

  return numberBetweenDays;
}

console.log(daysBetweenDates("June 14, 2019", "June 20, 2019"));
console.log(daysBetweenDates("December 29, 2018", "January 1, 2019"));
console.log(daysBetweenDates("July 20, 2019", "July 30, 2019"));

/* 17. Question 17: .Mubashir needs your help to find out number of
animals hidden in a given string txt.
You are provided with an array of animals given below:
animals = ["dog", "cat", "bat", "cock", "cow", "pig",
"fox", "ant", "bird", "lion", "wolf", "deer", "bear",
"frog", "hen", "mole", "duck", "goat"]
Rule: Return the maximum number of animal names. See the below
example:
txt = "goatcode"
*/

let animals = [
  "dog",
  "cat",
  "bat",
  "cock",
  "cow",
  "pig",
  "fox",
  "ant",
  "bird",
  "lion",
  "wolf",
  "deer",
  "bear",
  "frog",
  "hen",
  "mole",
  "duck",
  "goat",
];

function animalCount(txt) {
  let count = 0;
  for (let i = 0; i < animals.length; i++) {
    if (txt.includes(animals[i])) {
      count++;
    }
  }
  return count;
}
console.log(animalCount("goatcode"));

/* 18. Question 18: .Write a JavaScript program that accept two numbers and
print the larger number
              _شرح_
[تقيل عددين وتقوم برجاع العدد الاكبر]
*/
function largerNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(largerNumber(10, 20));

/* 19. Question 19:  You go to a jewelry shop and try to find the most
expensive piece of jewelry. You write down the name of
each piece of jewelry and its price.
Create a function that gets the name of the piece of
jewelry with the highest price and returns "The most
expensive one is the {name of jewelry piece}".
                  _شرح_
[تقبل اوبجيك وتقوم باؤجاع المجوهرات الاغلى سعر ]
*/

function mostExpensiveJewelry(jewelry) {
  let max = 0;
  let name = "";
  for (let i = 0; i < jewelry.length; i++) {
    if (jewelry[i].price > max) {
      max = jewelry[i].price;
      name = jewelry[i].name;
    }
  }
  return `The most
expensive one is the {${name}}`;
}
console.log(
  mostExpensiveJewelry([
    { name: "Jewelry1", price: 100 },
    { name: "Jewelry2", price: 200 },
    { name: "Jewelry3", price: 300 },
  ])
);

/* 20. Question 20: There are three cups on a table, at positions A, B, and
C. At the start, there is a ball hidden under the cup
at position B.

*/

function findBallPosition(swaps) {
  let ballPosition = "B";

  for (let i = 0; i < swaps.length; i++) {
    const swap = swaps[i];
    if (swap.includes(ballPosition)) {
      ballPosition = swap.replace(ballPosition, "");
    }
  }

  return ballPosition;
}

const cupSwapping = ["AC", "CA", "CA", "AC"];
console.log(findBallPosition(cupSwapping));
