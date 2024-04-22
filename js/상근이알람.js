let hour = prompt("시간 입력 : ", "");
hour = Number(hour); // 프롬프트로 입력을 받으면 String type임
let min = prompt("분 입력 : ", "");
min = Number(min);
let calc = hour * 60 + min;
if(calc < 45) calc = 24 * 60 + min;
calc -= 45;
//document.write("<h2>" + '${parseInt(calc / 60)}시 ${calc % 60}분' + "</h2>"); 수업시간에 적어주신 선생님 방법 출력 안 됨...
console.log(calc);
hour = parseInt(calc / 60);
min = calc % 60;
document.write("<h2>" + `${hour}시 ${min}분` + "</h2>");