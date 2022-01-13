/*
< undefined >
- 시스템에서 어떤 변수나 속성이 정의되지 않은 경우
    - 선언만 하고 초기화가 되지 않는 변수의 타입이나 값
    - 객체의 정의되지 않은 속성의 타입이나 값
< null >
- 명시적으로 아무것도 없는 비어있는 상태
    - typeof:  object /  값: null
*/
var uninitialized_var;

var obj = {
    x:1,
    y:2
};

/*
예시/출력 -----------------------
obj.z => undefined
typeof(obj.z) => "undefined"
var null_var; => undefined
null_var = null; => null
null_var; => null
typeof(null_var); =. "object"
*/