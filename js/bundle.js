/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/animated.js":
/*!********************************!*\
  !*** ./js/modules/animated.js ***!
  \********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/contact.js":
/*!*******************************!*\
  !*** ./js/modules/contact.js ***!
  \*******************************/
/***/ ((module) => {

function contact() {

    const form = document.querySelector('form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let  telegram_bot_id = "5243118463:AAGuCr1mfCqEFmyAUZMNn34zVM-RBldFefM";

    let chat_id = 1652305676;
    let u_name, email, message;
    let ready = function () {
        u_name = document.querySelector("#name").value;
        email = document.querySelector("#email").value;
        message = document.querySelector("#message").value;
        message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;
    };
    let sendtelegram = function () {
        ready();
        var settings = {
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
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";
        return false;
    };
    sendtelegram()

    })

    
}

module.exports = contact;



/***/ }),

/***/ "./js/modules/loader.js":
/*!******************************!*\
  !*** ./js/modules/loader.js ***!
  \******************************/
/***/ ((module) => {

function loader(){
    const loader=document.querySelector(".loader");
  
  setTimeout(function(){
    loader.style.opacity=0;
    setTimeout(function(){
      loader.style.display="none"
    },1500)
  },2000)
};

module.exports=loader;

/***/ }),

/***/ "./js/modules/navigation.js":
/*!**********************************!*\
  !*** ./js/modules/navigation.js ***!
  \**********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/scrol.js":
/*!*****************************!*\
  !*** ./js/modules/scrol.js ***!
  \*****************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/typinng.js":
/*!*******************************!*\
  !*** ./js/modules/typinng.js ***!
  \*******************************/
/***/ ((module) => {

function typed(){
    //Typed
    const yozuv=document.querySelector('.typed');
    let options={
      strings: [
        'Lochinbek ',
        'Abduvoitov','Full stack'
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
    // let typed=new Typed(yozuv,options)
    // console.log(typed); 
  
}

module.exports=typed;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
window.addEventListener('DOMContentLoaded', () => {

    const loader=__webpack_require__(/*! ./modules/loader */ "./js/modules/loader.js"),
          animated=__webpack_require__(/*! ./modules/animated */ "./js/modules/animated.js"),
          navigation=__webpack_require__(/*! ./modules/navigation */ "./js/modules/navigation.js"),
          scroll=__webpack_require__(/*! ./modules/scrol */ "./js/modules/scrol.js"),
          typed=__webpack_require__(/*! ./modules/typinng */ "./js/modules/typinng.js"),
          contact=__webpack_require__(/*! ./modules/contact */ "./js/modules/contact.js")


    loader();
    animated();
    navigation();
    scroll();
    typed(); 
    contact(); 
  

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map