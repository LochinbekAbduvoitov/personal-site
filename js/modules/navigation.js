function navigation(){
    window.addEventListener('scroll',function(){
        const header=document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0)
      });
      const menuBtn = document.querySelector(".menu-btn");
      const navigation = document.querySelector(".navigation");
      const header = document.querySelector("header");
      const navigationItems=document.querySelectorAll('.navigation  a');
      menuBtn.addEventListener('click',()=>{
        navigation.classList.toggle('active');
      })

      
    
      navigationItems.forEach(navItem =>{
        navItem.addEventListener('click',() =>{
          // menuBtn.classList.remove("active");
          navigation.classList.remove("active");
        })
      })
};

module.exports=navigation;