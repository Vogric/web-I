document.addEventListener("DOMContentLoaded", iniciarPagina);
//NO FUNCIONA*/
function iniciarPagina(){
    "use strict";
    setInterval(function(){ 
        // toggle the class every five second
        $('#div').toggleClass('change1');  
        setTimeout(function(){
          // toggle back after 1 second
          $('#div').toggleClass('change1');  
        },1000)

        $('#div').toggleClass('change2');  
        setTimeout(function(){
          // toggle back after 1 second
          $('#div').toggleClass('change2');  
        },1000)

        $('#div').toggleClass('change3');  
        setTimeout(function(){
          // toggle back after 1 second
          $('#div').toggleClass('change3');  
        },1000)
     
     },5000);
}