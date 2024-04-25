// 4월 25일 목

// 자바스크립트
// let colorBtn = document.getElementById("colorButton");
// const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
// let colorIndx = 0;

// colorBtn.addEventListener("click", () => {
//     document.body.style.backgroundColor = colors[colorIndx];
//     colorIndx = (colorIndx + 1) % colors.length;
// });

// jQuery
var colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
var colorIndex = 0;
  
$("#colorButton").click(function() {
    $("body").css("background-color", colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length;
});