let block = document.querySelectorAll('.flex__block');
let user_block = document.querySelectorAll('.user__block');
let like_container = document.querySelectorAll('.like__container');
block.forEach(el => {
    const blockDark = document.createElement('div');
    blockDark.style.cssText = `
                                display:block;
                                color:white;
                                margin-right: 25px;
                                background-color:rgba(0,0,0,0.7);
                                width: 100%;
                                height: 227px;
                                max-width: 227px;`;
    el.onmouseover = function(event) {
        el.append(blockDark);
        var target = event.target; //где был к
        // console.log(target);
        el.style.position = 'relative';
        // console.log(el);
        if (el.hasChildNodes()) {
            // console.log(el);
            let s = target.getElementsByClassName('like__container')[0];
            s.style.display = "block";
        } else {
            console.log("container" + el);
        }

    };
    el.onmouseout = function(event) {
        el.removeChild(blockDark);
        var target = event.target; //где был к
        // let s = target.getElementsByClassName('like__container')[0];
        // s.style.display = "none";
        if (el.hasChildNodes()) {
            console.log(el);
            let s = target.getElementsByClassName('like__container')[0];
            s.style.display = "none";
        } else {
            console.log("container" + el);
        }

    };
});
user_block.forEach(el => {
    const blockDark = document.createElement('div');
    blockDark.style.cssText = `
                                display:block;
                                color:white;
                                background-color:rgba(0,0,0,0.7);
                                width: 100%;
                                max-width: 287px;
                                height: 287px;
                                margin-right: 32px;`;
    el.onmouseover = function(event) {
        el.append(blockDark);
        var target = event.target; //где был к
        console.log(target);
        el.style.position = 'relative';
        let s = target.getElementsByClassName('user__black__container')[0];
        s.style.display = "block";
    };
    el.onmouseout = function() {
        el.removeChild(blockDark);
        var target = event.target; //где был к
        let s = target.getElementsByClassName('user__black__container')[0];
        s.style.display = "none";

    };
});

// user_block.forEach(el => {
//     const blockDark = document.createElement('div');
//     blockDark.style.cssText = `
//         display:block;
//         color:white;
//         margin-right: 25px;
//         background-color:rgba(0,0,0,0.7);
//         width: 100%;
//         max-width: 287px;
//         height: 287px;`;
//     el.onmouseover = function() {
//         el.append(blockDark);
//     };
//     el.onmouseout = function() {
//         el.removeChild(blockDark);
//     };
// el.addEventListener('moseover', function(event) {
//     console.log(el);
//     const indicators = document.createElement('div');
//     indicators.style.cssText = `
//                     display:block;
//                     content:hhhh;
//                     color:white;
//                     margin-right: 25px;
//                     background-color:rgba(0,0,0,0.7);
//                     width: 100%;
//                     max-width: 227px;
//                     height: 227px;`;
//     el.append(indicators);
//     const block_heart = document.createElement('div');
//     block_none.forEach(s => s.display = 'block');
// el.addEventListener('click', function() {
//     block.forEach(i => {
//         indicators.style.display = 'none';
//     });
// });
// });