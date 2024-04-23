// 2024년 4월 23일 화
// 자바스크립트에서는 원시 타입을 제외한 모든 값이 참조 타입
// 객체 리터럴 : 중괄호를 사용해서 만드며 속성(property)과 값(value)의 쌍으로 구성
const person = {
    name: "안유진",
    age: 21,
    addr: "서울시 강남구 청담동",
    group: "아이브"
    desc: function() {
        console.log("아이브는 여성 5인조 걸그룹입니다");
    }
};
console.log(person.name);
console.log(person.age);
console.log(person["addr"]);
console.log(person["group"]);
console.log(person.desc());