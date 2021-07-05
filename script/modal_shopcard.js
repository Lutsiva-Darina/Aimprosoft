let button = document.querySelector(".menu__basket");
let shopcard = document.querySelector(".shopcard__container");
let body = document.querySelector("body");

button.addEventListener("click", function() {
//    shopcard.style.cssText="";
//    shopcard.style.display="flex";
//    shopcard.style.position="absolute";
//    shopcard.style.top=0+"px";
//    body.style.backgroundColor="rgba(0, 0, 0, 0.4)";
//    body.style.overflow="hidden";
// display: flex;
//     position: absolute;
//     /* top: 0px; */
//     right: 0px;
//     /* left: 0; */
//     z-index: 100;
   shopcard.style.cssText = "display:flex; position:absolute; z-index: 100; right:0; top:0;overflow:hidden; opacity:1";
   document.querySelectorAll("body, body :not(.menu__basket *)")
   .forEach(element=>element.classList.add("block2"));

//    document.querySelectorAll("body, body :not(.menu__basket *)")
//   .forEach(element => element.style.backgroundColor=`rgba(${0},${0},${0},${0.5})`);
//    body.style.backgroundColor="rgba(255, 255, 255, 1);";
  });
  window.onclick = function(event) {
    if (shopcard.contains(event.target) || event.target == button) {
      shopcard.style.display = "flex";
    }
    else if (event.target != shopcard) {
        console.log(event);
        shopcard.style.display = "none";
        body.style.overflow="";
      }
  }

  
