
// object
// obj

// 배열, 객체타입

let score1 = 100;
let score2 = 60;
let score3 = 80;
let score4 = 90;
let score5 = 40;

//총합 평균
let sum = score1 + score2 + score3 + score4 + score5;
let avg = sum / 5;

console.log( "총합 : " + sum + " 평균 : " + avg);

// 배열   변수값들을 모아서 관리하겠다
// Array
// scores, scoreArr, scoreArray, scoreList
let scoreArr = [10, 50, 100, 90, 45];
console.log(scoreArr);

// index
// [10, 50, 100, 90, 45]
//   0   1    2   3   4
// 배열변수[인덱스]

console.log( scoreArr[2] );
console.log( scoreArr[4] );

sum = 0;
sum = scoreArr[0] + scoreArr[1] + scoreArr[2] + scoreArr[3] + scoreArr[4];

sum = sum + scoreArr[0];
sum = sum + scoreArr[1];
sum = sum + scoreArr[2];
sum = sum + scoreArr[3];
sum = sum + scoreArr[4];

sum = 0;
for(let i=0; i<=4; i++){    // i: 0 1 2 3 4 
    sum = sum + scoreArr[i];
}

console.log("총합 : " + sum);
console.log("평균 : " + sum/5);

//------------------------------

// 배열 100개   1 2 3 4 5 .... 98 99 100
let arr = [];  //빈 배열
arr[50] = 50;
console.log(arr);

let arr100 = new Array(100);
console.log(arr100); //100칸짜리 빈배열   index : 0~99
// 1 2 3 4 ... 100
//arr100[0] = 1;
//arr100[1] = 2;
console.log( arr100.length );  //해당 배열의 길이 

//for(let i=0; i<100; i++){}

for(let i=0; i< arr100.length; i++){
    arr100[i] = i+1;
//  arr100[0] = 0+1;
//  arr100[1] = 1+1;
}

console.log(arr100);

for(let i=0; i<arr100.length; i++){
    console.log(arr100[i]);
}


//-----------------------------------------------
console.log('-----------------------------------------------');

// 배열의 값에 접근하기

let scores = [11, 22, 33, 44, 55]; //5명의 점수

// for문 + index 접근
for(let i=0; i<scores.length; i++){         //   i<5;  0 1 2 3 4 
    console.log( scores[i] );
}

// for in    -> index 값 획득
for(let i in scores){
    console.log(i + " 인덱스 위치의 값 : " + scores[i] );
}

// for of    -> 배열에 있는 값 획득
for(let v of scores){
    console.log(v);
}

// 배열 구조에서 제공하는 함수   forEach
scores.forEach( (value, index)=>{
    console.log( index + " : " + value); 
} )
