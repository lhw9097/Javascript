// 4월 25일 목

// 방식 1
function changeBg(color) {
    let result = document.querySelector('#result');
    result.style.backgroundColor = color;
}

// 방식 2
function changeBG(color) {
    const rst = document.querySelector("#color-box");
    rst.style.backgroundColor = color;
}