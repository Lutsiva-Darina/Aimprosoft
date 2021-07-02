// var plus = document.querySelectorAll('.plus');
// var submenu = document.querySelectorAll('.submenu');
// plus.forEach(element => {
//     element.addEventListener('click', (e) => {
//         slideTo = e.target.getAttribute('submenu');
//         console.log(slideTo);
//     });
// });
// let nav = document.querySelectorAll('.nav');
// nav.forEach(nav_elem => {
//     nav_elem.addEventListener('click', function(event) {
//         var target = event.target; //где был клик
//         console.log(target);
//         var s = target.getElementsByClassName('submenu')[0];
//         console.log(s);
//         // closeMenu();
//         // s[0].style.display = "block";

//     });
// });

let nav = document.getElementById('nav').onmouseover = function(event) {
    var target = event.target; //где был клик
    console.log(target);
    if (target.className == 'menu__wrapper' || target.className == 'topmenu_block indent' || target.className == 'plus' || target.className == 'plus_vertical') {
        console.log("name");
        let s = target.getElementsByClassName('submenu')[0];
        console.log(s);
        // // closeMenu();
        //     for (let i = 0; i < s.length; i++) {
        //         console.log("jkjk");
        //     }
        // } else {
        //     console.log("wrong");
        // }
    }
};
// nav.forEach(nav_elem => {
//     nav_elem.addEventListener('click', function(event) {
//         var target = event.target; //где был клик
//         console.log(target);
//         var s = target.getElementByClassName('submenu')[0];
//         closeMenu();
//         s[0].style.display = "block";
//     });
// });