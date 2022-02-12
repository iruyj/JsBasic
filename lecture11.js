/*
String 이어 붙이기
문자열 길이 : .length
문자열 붙이기 : .const, 더하기(+)
*/

var str = "Hello";
str.length; // 5
str["length"];    // 5

var str2 = " World";
str.concat(str2);   // "Hello World"

var str3 = str.concat(str2);    // "Hello World"

str.concat(str2).concat("!");   // "Hello World!"

"Hello".concat(" World").concat("!");   // "Hello World!"

"hello".length  // 5

str + str2;     // "Hello World"

"Hello" + " World"  // "Hello World"

"Pi is " + 3.14     // "Pi is 3.14"

3.14 + " is Pi"     // "3.14 is Pi"