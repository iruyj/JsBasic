/* Number
1. 숫자를 나타내는 자료형
2. 64bit로 실수와 정수 모두 표현 가능
3. NaN, Infinity : 정상적이지 않는 숫자나 표현할 수 없는 범위의 수를 표시하는  
4. parseInt : 정수로 변환 */

var height = prompt("키를 입력해 주세요.");
console.log(height, typeof(height));

var height_int = parseInt(height);
console.log(height_int, typeof(height_int));

var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));