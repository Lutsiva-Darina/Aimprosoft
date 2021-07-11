let button = document.querySelector(".menu__basket");
let menu__down_btn = document.querySelector(".menu__burger");
let menu__down = document.querySelector(".menu__down");
let shopcard = document.querySelector(".shopcard__container");
let body = document.querySelector("body");
let opacity = document.querySelector(".block__opacity");
menu__down.style.display="none";

menu__down_btn.addEventListener("click", function() {
    opacity.style.display="block";
    menu__down.style.display="block";
let menu__close = document.querySelector(".menu__down__close");
    window.onclick = function(event) {
      if (menu__close.contains(event.target)) {
        menu__down.style.display = "none";
        opacity.style.display="none";
      }
    }
});

button.addEventListener("click", function() {
  button.style.cursor="pointer";
    opacity.style.display="block";
    shopcard.style.cssText = "display:flex; position:absolute; z-index: 100; right:0; top:0;overflow:hidden; opacity:1";
  // });
  window.onclick = function(event) {
    if (shopcard.contains(event.target) || event.target == button) {
      shopcard.style.display = "flex";
    }
    else if (event.target != shopcard) {
        console.log(event);
        shopcard.style.display = "none";
        opacity.style.display="none";
      }
    }
  });
  
