let button = document.querySelector(".menu__basket");
let shopcard = document.querySelector(".shopcard__container");
let body = document.querySelector("body");
let opacity = document.querySelector(".block__opacity");

button.addEventListener("click", function() {
    opacity.style.display="block";
    shopcard.style.cssText = "display:flex; position:absolute; z-index: 100; right:0; top:0;overflow:hidden; opacity:1";
  });
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

 
