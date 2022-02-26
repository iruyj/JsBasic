/*
배열 만들기
< 배열의 정의 >
    - 빈 배열 : var arr=[];
    - 초기화된 배열 : var arr=[1,2,3,4,5];
* 엘리먼트에는 어떤 자료형이든 저장될 수 있음
    -var mixed_arr = [ 1, true, 3.14, "string", {name:"object"}, [1,2,3] ];

< 배열의 길이 >
    .length 

< 배열의 엘리먼트에 접근하기 >
    - 대괄호 안에 인덱스를 사용 : arr[index]
        arr[0] = 1
        console.log(arr[arr.length-1]);
*/
var arr = [];
var arr2 = [1, 2, 3, 4, 5];
arr2;   // => [1, 2, 3, 4, 5]

var mixed_arr = [ 1, true, 3.14, "string", {name:"object"}, [1, 2, 3]];
mixed_arr;  // => [1, ture, 3.14, "string", >object, .Array[3]]

mixed_arr.length    // => 6
arr2.length // => 5
arr.length;  // => 0
arr2[0];    // => 1
arr2[3];    // => 4
arr2[7];    // => undefined