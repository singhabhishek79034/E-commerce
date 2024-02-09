

let bar = document.getElementById('Menubar');
let  navbar =document.getElementById('nav');
let crossbar = document.getElementById('crossmenubar');

if(bar){

   bar.addEventListener('click' , ()=> {
      //   bar.style.position ="right 0px";
       navbar.classList.add('active');
   })

}

if(crossbar){

    crossbar.addEventListener('click' ,()=>{
     navbar.classList.add('non-active');
     
   })
}



