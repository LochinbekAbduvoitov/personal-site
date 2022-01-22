window.addEventListener('DOMContentLoaded', function () {

const loader=document.querySelector(".loader");
  
  setTimeout(function(){
    loader.style.opacity=0;
    setTimeout(function(){
      loader.style.display="none"
    },1500)
  },2000)


  window.addEventListener('scroll',function(){
    const header=document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  });
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  const header = document.querySelector("header");
  const navigationItems=document.querySelectorAll('.navigation  a');
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
      'Abduvoitov','Junior'
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
  // My work SECTION CARUSEL

  const content=document.querySelector(".slide-content");
  const card=document.querySelectorAll(".slide-card");
  const prev=document.querySelector(".angle-box-left");
  const next=document.querySelector(".angle-box-right");

  content.style.overflow="hidden"













  //Botga xabar yuborish

let telegram_bot_id = "5243118463:AAGuCr1mfCqEFmyAUZMNn34zVM-RBldFefM";

let chat_id = 1652305676; 
let u_name, email, message;
let ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;
};
let sendtelegram = function() {
    ready();
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};

});
