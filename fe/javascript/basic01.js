
// .js 파일

// javascript 작성 영역

console.log('basic01.js');
console.log('text');
console.log('이 영역에 있는 값을 출력해라~');


// 변수 선언

// 변수 타입
// var let const

// 변수선언 : let
// 상수선언 : const        (*한번 할당/저장 하면 값이 바뀌지 않는다)

// 숫자 문자 논리형 ...

let a = 10;         //숫자타입 정수형
let b = 20.321;     //숫자타입 실수형
let c = "안녕하세요";//문자타입
let d = '반갑습니다';
let e = true;   // 참       논리타입
let f = false;  // 거짓

//let g = 헬로;
let v1 = 123;      //변수 선언 + 값 저장  :  변수초기화
let v2 = 0;
let v3 = null;
let v4 = undefined;
let v5;     //변수 선언

//let v1 = 222;  //v1 변수를 다시 선언 만들겠다! --> 중복 X
v1 = 124;

// 변수명  숫자시작불가, $ _ 이외에 특수문자 불가, 띄어쓰기 불가, 예약어(키워드) 불가

// 변수명을 짓는 관례
/*
    like food X
    like_food   snake case
    likeFood    camel case

    my bag price
    my_bag_price
    myBagPrice

*/


const g = 30;
const h = "헬로";

a = 20;
//g = 300;      // const 변수 상수형 변수로 값 변경이 불가

console.log(102390);
//console.log(abcd);
console.log('abcd');
console.log("abcd");
console.log('안녕 "상당히" 반가워');
console.log("안녕 '상당히' 반가워");
console.log("안녕 \"상당히\" 반가워"); 
console.log(`백틱문자로하면 중간에 '작은' "큰" 상관없음 `);


let x = 20;
let y;

console.log(x);
console.log(y); //undefined



//-------------------------------------------
var abc = 10;
var abc = 20;
var abc = 30; 
//var 중복선언을 오류발생하지 않는다
//오류를 발생시킬 리스크가 크다  ---> 그래서 let 을 쓰자

z = 50;
console.log(z);

//let z = 500;
var z = 30;
console.log(z);

