
// js 배열

//동적으로 처리
/*
    shift       : 앞 삭제
    unshift     : 앞 추가

    pop         : 뒤 삭제
    push        : 뒤 추가
*/

let arr = [1,2,3];

console.log( arr ); 
arr.unshift(55);
console.log( arr ); 
arr.shift();
console.log( arr ); 
arr.push(99);
console.log( arr ); 
arr.push(100);
console.log( arr ); 
arr.pop();
console.log( arr ); 


// concat 배열 연결 함수

let arr1 = [1,2,3];
let arr2 = [4,5,6];

// [1,2,3,4,5,6]
console.log( arr1.concat(arr2) );
console.log( arr2.concat(arr1) );

console.log( arr1 );

arr1 = arr1.concat(arr2); //비파괴적인함수 사용시 원본을 바꾸려면, 원본에 다시 "저장"

/*
    함수 수행

    파괴적함수      : 함수 실행 하면 원본에 영향 O
    비파괴적함수    : 함수 실행 하면 원본에 영향 X
*/

let n = 10;
console.log(n);
console.log(n+1); //11
console.log(n);   //10
console.log(n++); //10
console.log(n);   //11
n=n+1;

console.log("-----------------------------------------------");

//배열 복사 (참조타입변수)

/*
    깊은 복사 (deep copoy)      : 값 자체를 통으로 새롭게 새로운 곳에 복사
    얕은 복사 (shallow copy)    : 들고있는 값만 복사 (바라보는 주소만 복사)
*/

let a = 10;
let b = a;

console.log(a, b);
b = 20;
console.log(a, b);


let arr3 = [1,2,3];
let arr4 = arr3;

console.log(arr3, arr4);
arr3[0] = 999;
console.log(arr3, arr4);


// ... 전개연산자

let arr5 = arr3; //얕은복사  (주소만.)
let arr6 = [...arr3]; //깊은복사           [ ...[999,2,3] ]     999,2,3    [ 999,2,3 ]
// arr6 = [999,2,3];

console.log( arr3, arr6 );
arr3[1] = 333;
console.log( arr3, arr6 );

//----------------------------------------

let x = [1,2,3];
let y = x;      //얕은
let z = [...x]; //깊은

console.log( x, y, z);
x[2] = 888;
console.log( x, y, z);


let q = [10, 20, 30, ...x, 40, 50 ];    // let q = [10, 20, 30, 1, 2, 888, 40, 50 ];
console.log(q);


//----------------

// splice 함수
// 배열의 특정 위치에 추가, 삭제

// splice(인덱스, 삭제할갯수)
// splice(인덱스, 삭제할갯수, 추가할값)

// 파괴적 vs 비파괴적

console.log("-------------------------------");

let arr7 = [1,2,3,4,5];
console.log(arr7);
//let temp = arr7.splice(1, 2);   //[1,4,5];
arr7.splice(1, 2);  //[1,4,5];      //파괴적인 함수
console.log(arr7);
//console.log(temp);

arr7.push(6);       //[1,4,5]    ->  [1,4,5,6]
arr7.unshift(0);    //[1,4,5,6]  ->  [0,1,4,5,6]

console.log(arr7);  //[ 0, 1, 4, 5, 6 ]
//arr7[2] = 2;  // 덮어쓰기
arr7.splice(2, 0, 2);
console.log(arr7);
//arr7[2] = 20;
arr7.splice(2, 1, 20);
console.log(arr7);


//--------------------------
console.log("-------------------------------");

let obj = {
    name:"김밥천국",
    menu:"참치김밥"
};

console.log(obj);
obj.menu = "치즈김밥";
console.log(obj);
obj.price = 5000;
console.log(obj);
obj.price = 6500;
console.log(obj);
obj.price = 0;  //존재하는 키값을 0으로 수정
console.log(obj); 
delete obj.price; // 특정키 자체를 삭제
console.log(obj); 

console.log("-------------------------------");
let obj2 = obj;
console.log(obj, obj2);
obj.name = "김밥나라";
console.log(obj, obj2);

let obj3 = structuredClone(obj);  //깊은복사
console.log(obj, obj3);
obj.menu = "돈까스김밥";
console.log(obj, obj3);


//-------------------------------------------

obj = { name: '김밥나라', menu: '돈까스김밥' };  //js 객체로 인식  -> 복사 -> 참조타입변수 -> 주소가 복사
console.log(obj.name);
obj = "{ name: '김밥나라', menu: '돈까스김밥' }"; //js 문자형(텍스트)로 인식
let obj4 = obj;  // "{ name: '김밥나라', menu: '돈까스김밥' }"
console.log(obj, obj4.name, obj4.length);

//   jsobj 타입 -> text -> jsobj 

//   js obj -> text 변환 : JSON.stringify
//   text -> js obj 변환 : JSON.parse

obj = { name: '김밥나라', menu: '돈까스김밥' };

let jsonText = JSON.stringify(obj);
console.log(jsonText);
let newObj = JSON.parse(jsonText);
console.log(newObj);
console.log(newObj.name);

console.log(obj, newObj);
obj.menu = "새우김밥";
console.log(obj, newObj);

let newObj2 = JSON.parse(JSON.stringify(obj));  //객체 깊은복사 