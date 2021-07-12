let submenu = document.querySelector('.submenu');
let plus = document.querySelectorAll(".menu-item .plus");
let menuWrapper = document.querySelectorAll(".submenu .menu__wrapper");
let count = 0;
plus.forEach(plus_el => {
    plus_el.addEventListener('click', event => {
        if(submenu.childNodes.length>0){
            count++; 
            console.log(count);
        menuWrapper.forEach(menuWrapper_el => {
            console.log(menuWrapper_el);
           menuWrapper_el.classList.add("sub__wrapper");
           let plus__stick = document.querySelectorAll(".menu-item .plus_vertical");
           plus__stick.forEach(stick_el => {
                if(count %2==0){
                    submenu.style.display = "none";
                    stick_el.style.display="block";
                    
                }
                else{
                    stick_el.style.display="none";
                submenu.style.display = "block";
                }
           });
           
        });
        
        }
      });
     
});

submenu.addEventListener('click', event => {
  console.log("bur");
});

document.querySelector(".menu__burger_title").addEventListener('click', function() { submenu.style.backgroundColor="aqua"});
