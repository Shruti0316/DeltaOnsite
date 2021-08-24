const whiteKey = document.querySelectorAll(".whiteKey");
const blackKey = document.querySelectorAll(".blackKey");

const whiteKeys = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l'];
const blackKeys = ['z','x','c','v','b','n','m','1','2','3','4','5','6'];

//USING KEYBOARD
addEventListener("keydown",function(event){
    // console.log(event.key);
    const whiteIndex = whiteKeys.indexOf(event.key);
    const blackIndex = blackKeys.indexOf(event.key);
    if (whiteIndex>-1){
        // console.log(whiteKey[whiteIndex]);
        console.log(whiteKey[whiteIndex].dataset.note);
        playWhiteNote(whiteKey[whiteIndex])
    }
    if (blackIndex>-1){
        // console.log(blackKey[blackIndex]);
        console.log(blackKey[blackIndex].dataset.note);
        playBlackNote(blackKey[blackIndex]);
    }
})
function playWhiteNote(key){
    document.getElementById(key.dataset.note).play();
    key.classList.add('active');
    setTimeout(function(){
        key.classList.remove('active');
    },150)
}
function playBlackNote(key){
    document.getElementById(key.dataset.note).play();
    key.classList.add('bactive')
    setTimeout(function(){
        key.classList.remove('bactive');
    },150)
}
//USING MOUSE/TOUCHPAD
addEventListener("click",function(event){
    document.getElementById(event.target.dataset.note).play();
})