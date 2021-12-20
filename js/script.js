window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  });
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const header = document.querySelector("header");
  menuBtn.onclick = () => {
    navigation.classList.toggle("active");
  };

  
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
 

  
});
