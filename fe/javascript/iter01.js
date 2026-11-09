
// Iteration 반복문
// iter

console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');
console.log('배고프다');

// 100


/*
    for 문

    for(초기화식; 조건식; 증감식){
        실행문;
    }

*/

// i: 1 2 3 4 5 6 7 8 9 10   <= 10   true
// i: 11 <= 10  --> false
for(let i=1; i<=10; i++){   
    console.log("반복문 재밌다");
}

console.log("반복문 for 끝남");

/*

let i=1;

if(i<=10)
    console.log("반복문 재밌다");
i++;
if(i<=10)
    console.log("반복문 재밌다");
i++;
if(i<=10)
    console.log("반복문 재밌다");
i++;
if(i<=10)
    console.log("반복문 재밌다");
i++;
if(i<=10)
    console.log("반복문 재밌다");
i++;

*/

//          1<3  2<3  true |  3<3 false
for(let i=1; i<3; i++){
    console.log("목마르다");
}

let i;
for( i=35; i<44; ++i){  // i: 35 36 37 38 39 40 41 42 43 
    console.log("for 실행문");
}

console.log(i);


// i: 10 15 20 25 30 35 40 45  true  50<50 false
for( i=10; i<50; i=i+5){
    console.log("i가 5씩 증가하네");
}



// i j k l ...

// 단순 몇회 반복

//단순 5회 반복
for(i=5; i>0; i--){  // i:5 4 3 2 1 > 0  true    0 > 0 false
    console.log("다이어트 중");
}

console.log("다이어트 1일차");
console.log("다이어트 2일차");
console.log("다이어트 3일차");
console.log("다이어트 4일차");
console.log("다이어트 5일차");

for(i=1; i<=5; i++){
    console.log("다이어트 1일차");
}

    console.log("-----------------------------");
for(i=1; i<=5; i++){
    console.log("다이어트 1일차");
    console.log("다이어트 2일차");
    console.log("다이어트 3일차");
    console.log("다이어트 4일차");
    console.log("다이어트 5일차");
}

// 실제 내부 실행문에 활용할 목적으로 값을 조정하면서 사용

console.log("-----------------------------");
for(i=1; i<=5; i++){  // i: 1 2 3 4 5 
    console.log("다이어트 " + i + "일차");
    //           다이어트     1    일차
    //           다이어트     2    일차
    //           다이어트     3    일차
    //           다이어트     4    일차
    //           다이어트     5    일차
}


// 숫자의 총합
// 1 ~ 10 총합
let number = 1+2+3+4+5+6+7+8+9+10;

number = number + 1;
number = number + 2;
number = number + 3;
//...
number = number + 10;

// 1 ~ 100 다 더하면 얼마?
//number = 1+2+3+... +99+100;

/*
i:1 +
i:2 +
i:3 + 
*/

let sum = 0;  // 0+ 0 +0 +0 +0 +0 덧셈에 영향을 안주는 0으로 초기화

// sum = sum + 1;
// console.log(sum);
for(i=1; i<=10; i++){     // i: 1 2 3 4 .... 9 10
    sum = sum + i;    //sum
/*          0 + 1   ->   1
            1 + 2   ->   3
            3 + 3   ->   6
            6 + 4   ->  10
            10 + 5  -> 15
            15 + 6   -> 21 
            ...
            ...

               + 10   -> 
*/
}

//반복문 다 돌고 sum 변수에는 1~10까지의 누적 합
console.log(sum);

//1~10 곱하기 ->   초기값 1    곱셈에 영향을 안주는 1로 초기화




// 총합
// 10 20 30 40 ... 90 100 의 총합


sum = 0;
for(i=10; i<=100; i=i+10){  //i: 10 20 30 40.. 90 100
    sum = sum + i;
}
console.log("sum : " + sum);



//  더하기계산값 :  10 20 30 40 ... 90 100
//  반복문기준값 :   1  2  3  4 ...  9  10
//  더할값 = 기준값 * 10 

sum = 0;
for(i=1; i<=10; i++){
    sum = sum + (i*10);
}
console.log("sum : " + sum);


for(i=2; i<20; i=i*2){}
// i:2 4 8 16     |   32

for(i=400; i>100; i=i-50){}
// 400 350 300 250 200 150        |  100

for(i=100; i>=90; i--){}
// 100 99 98 97 96 95 94 93 92 91 90    |   89


