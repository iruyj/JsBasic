/**
 * 메서드를 호출할 때 this의 값 : 인스턴스화 된 객체를 참조함
 * 
 */
function f(){
    console.log(this);
    console.log("f is called");
}

function setName(name){
    this.name = name;
}
var o = {name:"object", method:f};
var o2 ={name:"",setName:setName};

o.setName("object1");
o2.setName("object2");

console.log(o,o2);
