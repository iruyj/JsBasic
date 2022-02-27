/*
< for문 >
*/
var array = [1,2,3,4,5,6,7,8,9,10];

for( var i = 0 ; i < array.length ; i++ ){
    console.log(array[i]);  //반복실행코드
}

// for in문 : 객체의 각 엘리먼트에 접근
var obj ={
    name:"object",
    weight:30,
    isObject:true,
    arr:[1,2,3],
    obj:{property:1}
};

console.log('For 구문으로 object property 반복');

var property_list = Object.keys(obj);
console.log("Property List : ",property_list);

// for문
for( var propertyName in obj ){
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}

// for - in문
for( var propertyName in obj ){
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}