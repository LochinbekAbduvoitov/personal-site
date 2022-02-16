function scroll(){
    // Scroll BTN
 
  const scrolBtn=document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () =>{
    scrolBtn.classList.toggle('scrollactive', window.scrollY>500)
  })
  scrolBtn.addEventListener('click',() =>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0
  })
};

module.exports=scroll;