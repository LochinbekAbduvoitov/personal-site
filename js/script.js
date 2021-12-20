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
  
  const typed=document.querySelector('.typed');
  typed={
    strings:[
      'Lochinbek ',
      'Abduvoitov'
    ],
    typedSpeed:60,
    startDelay:500,
    backSpeed:40,
    loop:true,
    loopCount:Infinity,
  };
 

  
});
