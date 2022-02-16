function animated(){
    // animation

  window.addEventListener('scroll',() =>{
    let reveal=document.querySelectorAll(".reveal")

    for(let i=0; i<reveal.length; i++ ){
      let windowHeight =window.innerHeight;
      let revealTop=reveal[i].getBoundingClientRect().top;
      let revealPoint =50;

      if(revealTop<windowHeight -revealPoint){
        reveal[i].classList.add("active")
      }
    }

  })
};


module.exports=animated