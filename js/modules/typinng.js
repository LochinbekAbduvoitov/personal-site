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