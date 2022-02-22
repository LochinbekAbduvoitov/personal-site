window.addEventListener('DOMContentLoaded', () => {

    const loader=require('./modules/loader'),
          animated=require('./modules/animated'),
          navigation=require('./modules/navigation'),
          scroll=require('./modules/scrol'),
          typed=require('./modules/typinng'),
          contact=require('./modules/contact')


    loader();
    animated();
    navigation();
    scroll();
    typed(); 
    contact(); 
  

});