var cond =false;

while(cond){
    console.log("이 구문은 실행되지 않음");
}
do{
    console.log("이 구문은 최소한번 실행");
}while(cond);

do{
    var ans = parseInt(prompt("1+1=?"));
}while(ans!=2);

console.log("정답입니다.");