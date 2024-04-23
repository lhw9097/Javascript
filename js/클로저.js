// 2024년 4월 23일 화
// 클로저란 : 함수가 해당 함수의 스코프 외부에 있는 변수에 접근(참조)할 수 있는 메커니즘
// function Counter() {
//     let count = 0;
//     return {
//         increment: function() {
//             count++;
//             console.log(count);
//         },
//         decrement: function() {
//             count--;
//             console.log(count);
//         },
//     }
// };
function Counter() {
    let count = 0;
    let increment: function() {
        count++;
        console.log(count);
    };
    let decrement: function() {
        count;
        console.log(count);
    };
    return {
        increment,
        decrement,
    };
}
const myCounter = Counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.increment();