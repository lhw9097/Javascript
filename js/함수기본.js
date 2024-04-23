// 2024년 4월 23일 화
// 함수 선언문 function 키워드로 선언하며 함수 이름을 가짐, 호이스팅에 영향을 받음

function sum(p1, p2) {
    let sum = p1 + p2;
    return sum; // 대괄호 안 2줄을 return p1 + p2 한 줄로 줄일 수 있음
}

let sum1 = sum(21, 24);
console.log(sum1); // 2줄을 console.log(sum(21, 24)); 한 줄로 줄일 수 있음

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅에 영향을 받지 않음
// 익명의 함수로 만드는 방식 : const 변수명 = function() {}; 변수 대입받으면 함수 표현식
// 네이밍 함수로 만드는 방식 : const 변수명 = function 함수이름(){};

const gugudan = function (x) {
    for(let i = 1; i < 10; i++) {
        console.log(`${x} x ${i} = ${x * i}`);
    }
};
gugudan(3);

// 화살표 함수 : ES6 문법

const gugudan2 = (x) => { // x를 둘러싼 소괄호 없어도 됨
    for(let i = 1; i < 10; i++) {
        console.log(`${x} x ${i} = ${x * i}`);
    }
};
gugudan2(5);

// 기본값 할당 :
function sum10(a = 10, b = 20) { // 소괄호 안에 a=10, b라고만 되어 있어도 NaN으로 출력될 뿐 에러 안 남
    console.log(a + b);
}
sum10(100); // sum 호출하면 120