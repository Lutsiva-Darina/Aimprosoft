// let block = document.querySelectorAll('.flex__block');
// let user_block = document.querySelectorAll('.user__block');
// let like_container = document.querySelectorAll('.like__container');
// block.forEach(el => {
//     const blockDark = document.createElement('div');
//     blockDark.style.cssText = `
//                                 display:block;
//                                 color:white;
//                                 margin-right: 25px;
//                                 background-color:rgba(0,0,0,0.7);
//                                 width: 100%;
//                                 height: 227px;
//                                 max-width: 227px;`;
//     el.onmouseover = function(event) {
//         el.append(blockDark);
//         var target = event.target; //где был к
//         // console.log(target);
//         el.style.position = 'relative';
//         // console.log(el);
//         if (el.hasChildNodes()) {
//             // console.log(el);
//             let s = target.getElementsByClassName('like__container')[0];
//             s.style.display = "block";
//         } else {
//             console.log("container" + el);
//         }

//     };
//     el.onmouseout = function(event) {
//         el.removeChild(blockDark);
//         var target = event.target; //где был к
//         let s = target.getElementsByClassName('like__container')[0];
//         s.style.display = "none";
//         if (el.hasChildNodes()) {
//             console.log(el);
//             let s = target.getElementsByClassName('like__container')[0];
//             s.style.display = "none";
//         } else {
//             console.log("container" + el);
//         }

//     };
// });
// user_block.forEach(el => {
//     const blockDark = document.createElement('div');
//     blockDark.style.cssText = `
//                                 display:block;
//                                 color:white;
//                                 background-color:rgba(0,0,0,0.7);
//                                 width: 100%;
//                                 max-width: 287px;
//                                 height: 287px;
//                                 margin-right: 32px;`;
//     el.onmouseover = function(event) {
//         el.append(blockDark);
//         var target = event.target; //где был к
//         console.log(target);
//         el.style.position = 'relative';
//         let s = target.getElementsByClassName('user__black__container')[0];
//         s.style.display = "block";
//     };
//     el.onmouseout = function() {
//         el.removeChild(blockDark);
//         var target = event.target; //где был к
//         let s = target.getElementsByClassName('user__black__container')[0];
//         s.style.display = "none";

//     };
// });

let flex__block = document.querySelectorAll(".flex__block");
let slide__block = document.querySelectorAll(".container__slider__user .slide__block");
let like__container = document.querySelector(".like__container");
let like__container2 = document.querySelector(".like__container2");
let user__black__container = document.querySelectorAll(".user__black__container");


flex__block.forEach(flex__block__el => {
    flex__block__el.addEventListener("mouseover", func, false);
    flex__block__el.addEventListener("mouseout", func1, false);
    const blockDark = document.createElement('div');
    function func(event){   
    var target = event.target;
    
   blockDark.style.cssText = `
                                display:block;
                                color:white;
                                background-color:rgba(0,0,0,0.7);
                                width: 100%;
                                max-width: 287px;
                                height: 287px;
                                margin-right: 32px;`;
    flex__block__el.append(blockDark);
    var result = this.compareDocumentPosition(like__container);
    slide__block.forEach(slide__block__el => {
        if(result == 20){
            like__container.style.display="block";
        }
    });
    result = this.compareDocumentPosition(like__container2);
    slide__block.forEach(slide__block__el => {
        if(result == 20){
            like__container2.style.display="block";
        }
    });
    
}
function func1()
{  
    blockDark.style.display="none";
    like__container.style.display="none";
    like__container2.style.display="none";
}
});
