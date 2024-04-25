// 4월 25일 목
function newRegister() {
    let newItem = document.createElement("li");
    let subject = document.querySelector("#subject");
    newItem.innerHTML = subject.value;
    
    // 추가
    let itemList = document.querySelector("#itemList");
    itemList.insertBefore(newItem, itemList.childNodes[0]); // 리액트에서 안 쓰는 방법

    // 입력창 초기화
    subject.value = "";
    // 삭제를 위해 목록 전체 가져오기
    let items = document.querySelectorAll("li");
    // 삭제할 아이템 찾아서 삭제하기
    for (i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() { // 여기서 화살표 쓰면 안 됨
            if(this.parentNode) { // this는 자기 자신, 삭제할 것
                this.parentNode.removeChild(this);
            }
        });
    }
}