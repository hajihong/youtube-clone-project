var guideButton = document.querySelector('.menu-btn');
var closeButton = document.querySelector('.closebtn');
var menuBox = document.querySelector('.menu-box');
var homeTouch = document.querySelector('.homeTouch');
var safariTouch = document.querySelector('.safariTouch');
var subscribeTouch = document.querySelector('.subscribeTouch');

guideButton.addEventListener('click', function(){
    document.querySelector(".menuWrap").classList.add("on");
    let div = document.createElement("div");
    div.id = "dimned";
    document.body.append(div);
})

closeButton.addEventListener('click', function(){
    document.querySelector('section').classList.remove("on");
    document.querySelector('#dimned').remove();
})

function change(state){

    const isSelect = [0, 0, 0, 0, 0]
    isSelect[state-1] = 1

    isSelect[0] == 0 ? document.querySelector('.safari').src="safari2.png" : document.querySelector('.home').src="home2.png";

    if(state == 1){
        document.querySelector('.home').src="home2.png";
        document.querySelector('.safari').src="safari1.png";
        document.querySelector('.subscribe').src="subscribe1.png";
        document.querySelector('.folder').src="folder1.png";
        document.querySelector('.record').src="record1.png";
    } else if (state == 2) {
        document.querySelector('.safari').src="safari2.png";
        document.querySelector('.home').src="home1.png";
        document.querySelector('.subscribe').src="subscribe1.png";
        document.querySelector('.folder').src="folder1.png";
        document.querySelector('.record').src="record1.png";
    } else if (state == 3) {
        document.querySelector('.subscribe').src="subscribe2.png";
        document.querySelector('.home').src="home1.png";
        document.querySelector('.safari').src="safari1.png";
        document.querySelector('.folder').src="folder1.png";
        document.querySelector('.record').src="record1.png";
    } else if (state == 4) {
        document.querySelector('.folder').src="folder2.png";
        document.querySelector('.home').src="home1.png";
        document.querySelector('.safari').src="safari1.png";
        document.querySelector('.subscribe').src="subscribe1.png";
        document.querySelector('.record').src="record1.png";
    } else {
        document.querySelector('.record').src="record2.png";
        document.querySelector('.home').src="home1.png";
        document.querySelector('.safari').src="safari1.png";
        document.querySelector('.subscribe').src="subscribe1.png";
        document.querySelector('.folder').src="folder1.png";
    }
}

function touch(state){
    if (state == 1) {
        document.querySelector('.homeTouch').src="home2.png";
        document.querySelector('.safariTouch').src="safari1.png";
        document.querySelector('.subscribeTouch').src="subscribe1.png";
        document.querySelector(".btns1").classList.add("on");
        document.querySelector(".btns2").classList.remove("on");
        document.querySelector(".btns3").classList.remove("on");
    } else if (state == 2) {
        document.querySelector('.homeTouch').src="home1.png";
        document.querySelector('.safariTouch').src="safari2.png";
        document.querySelector('.subscribeTouch').src="subscribe1.png";
        document.querySelector(".btns1").classList.remove("on");
        document.querySelector(".btns2").classList.add("on");
        document.querySelector(".btns3").classList.remove("on");
    } else {
        document.querySelector('.homeTouch').src="home1.png";
        document.querySelector('.safariTouch').src="safari1.png";
        document.querySelector('.subscribeTouch').src="subscribe2.png";
        document.querySelector(".btns1").classList.remove("on");
        document.querySelector(".btns2").classList.remove("on");
        document.querySelector(".btns3").classList.add("on");
    }
}

//배열로 바꿔서