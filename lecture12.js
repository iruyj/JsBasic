/*
String 다루기
- 특정 위치의 문자열 알아내기
    -> .charAt(인덱스)
    -> [인덱스] 사용 : str[0]
- 부분문자열 구하기
    -> .substring(pos1, [pos2]) : pos1 에서 pos2까지의 부분 문자열 반환
    -> substr([pos], length) : pos에서 length길이 만큼의 부분 문자열 반환
- 문자열 검색하기
    -> indexOf(문자열)
    -> lastIndexOf(문자열)
*/
var str = "abcedabcde"
str.charAt(0);  // "a"
str.length  // 10
str.charAt(9);  // "e"
str.charAt(10); // ""
str.charAt(-1); // ""

str[1]; // "b"
str[10];    // undefined
str[-1];    // undefuned

str.substring(2, 4);    // "cd"
str.substr(2, 4);   // "cdea"
str.substring(2);   // "cdeabcde"
str.substr(2);  // "cdeabcde"
str.substr(-7); // "deabcde"
str.substr(-7, 2);  // "de"

str.indexOf("bc");  // 1
str.lastIndexOf("bc");  // 6
str.lastIndexOf("f");   // 1