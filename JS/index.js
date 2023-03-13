let navbar = document.querySelector('.header .navbar')
document.querySelector('#menu-btn').addEventListener('click',function(){
    navbar.classList.add('active')
})
document.querySelector('#close-navbar').addEventListener('click',function(){
    navbar.classList.remove('active')
});

let registerBtn = document.querySelector('.account-form .register-btn');
let loginBtn = document.querySelector('.account-form .login-btn');

registerBtn.onclick = () =>{
    registerBtn.classList.add('active')
   loginBtn.classList.remove('active')
   document.querySelector('.account-form .login-form').classList.remove('active')
   document.querySelector('.account-form .register-form').classList.add('active')
}

loginBtn.onclick = () =>{
    registerBtn.classList.remove('active')
   loginBtn.classList.add('active')
   document.querySelector('.account-form .login-form').classList.add('active')
   document.querySelector('.account-form .register-form').classList.remove('active')
}



let accountForm = document.querySelector('.account-form')

document.querySelector('#account-btn').addEventListener('click',function(){
    accountForm.classList.add('active')
})
document.querySelector('#close-form').addEventListener('click',function(){
    accountForm.classList.remove('active')
});

var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    loop:true,
    grabCursor:true
  });


var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCursor:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      }
  });


  var swiper = new Swiper(".teachers-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      }
  });
  
  var swiper = new Swiper(".reviwes-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      }
  });
  


  var swiper = new Swiper(".logo-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },

        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }
  });
 
  

 let accordion = document.querySelectorAll('.faq .accordion-container .accordion');
 
  accordion.forEach((acco,index) =>{
   acco.onclick =()=>{


  // accordion.forEach(item => item.classList.remove('active'))
  accordion.forEach((item,i) => 
    {
      if(index != i){
        item.classList.remove('active')
      }
  
    }
    )
 

// if(acco.classList.contains('active')){
//   console.log("Containss")
//   acco.classList.remove('active');
// }  else{
//   console.log("Does not contain")
//   acco.classList.add('active');
// }

acco.classList.toggle('active');
}
  });


  // Hasan Calc function to be run 9 times ( 1.5 years)

  // function checkPrinciple(principal){
  //   let rate = 0.1
  //   let monthInterval= 2

  //     return principal  + (principal * rate * monthInterval)

  // }

  //   let InitialAmmount = 500000
  //   let monthsToInvest = 24
  // function TotalPrincipal(){
  //   let finalAmmount = InitialAmmount 

  //   for(let i =0 ; i<Math.floor(monthsToInvest/2);i++){
  //     finalAmmount=checkPrinciple(finalAmmount)
  //   }
  //   return finalAmmount

  // }
  // const finalPrincipalAmmount =  TotalPrincipal()
  // console.log("Final Price",finalPrincipalAmmount)
  // console.log("Hasan /Vivek Profit 60%",(finalPrincipalAmmount - InitialAmmount )* 0.6)
  // console.log("Ranjay 40%",(finalPrincipalAmmount - InitialAmmount )* 0.4)


  
  document.querySelector('.load-more .btn').onclick = () =>{
    document.querySelectorAll('.courses .box-container .hide').forEach(show=>{
      show.style.display = 'block'
    });
    document.querySelector('.load-more .btn').style.display = 'none'
  };



  