window.addEventListener('DOMContentLoaded', function () {

const loader=document.querySelector(".loader");
  
  setTimeout(function(){
    loader.style.opacity=0;
    setTimeout(function(){
      loader.style.display="none"
    },2000)
  },3000)


  window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  });
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const header = document.querySelector("header");
  const navigationItems=document.querySelectorAll('.navigation a');
  menuBtn.onclick = () => {
    navigation.classList.toggle("active");
  };

  navigationItems.forEach(navItem =>{
    navItem.addEventListener('click',() =>{
      menuBtn.classList.remove("active")
      navigation.classList.remove("active")
    })
  })

  // Typed 
  const yozuv=document.querySelector('.typed');
  let options={
    strings: [
      'Lochinbek ',
      'Abduvoitov','Junior developer'
    ],
    typeSpeed:70,
    startDelay:500,
    backDelay: 1000,
    backSpeed:40,
    loop:true,
    loopCount:Infinity,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,
    
  };
  let typed=new Typed(yozuv,options)
  console.log(typed);



// Scroll BTN
 
  const scrolBtn=document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () =>{
    scrolBtn.classList.toggle('scrollactive', window.scrollY>500)
  })
  scrolBtn.addEventListener('click',() =>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0
  })
  
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
});
