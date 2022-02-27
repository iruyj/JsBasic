/*
if문
- 조건에 따라 프로그램의 흐름을 분기해서 특정 코드가 실행되도록 함
*/

// example1
if(true) {
    // 항상 조건식이 참이므로 중괄호 안의 코드가 실행됨
    console.log("이 구문은 실행");
}

if(false) {
    // 항상 조건식이 거짓이므로 중괄호 안의 코드가 실행되지 않음
    console.log("이 구문은 실행되지 않음");
}

// example2
if(true) {
    console.log("1");
} else {
    console.log("2");
}

// example3
if (false) {
    console.log("1");
} else if(false) {
    console.log("2");
} else if(false){
    console.log("3");
} else {
    console.log("4");
}