

  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  window.addEventListener("load",function(){
 
   showPopup();
   

  })

  function showPopup(){
        const timeLimit = 3 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
         } 
         console.log(i)
        },1000);
  }


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })


























let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{

    navbar.classList.remove('active');

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}























document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

// slider


document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-2').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
});






document.querySelectorAll('.small-image-5').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-5').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-9').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-9').src = images.getAttribute('src');
    }
});

document.querySelectorAll('.small-image-8').forEach(images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-8').src = images.getAttribute('src');
    }
});



$('.gallery .btn').click(function(){

    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.gallery .box').show(400);
    }else{
        $('.gallery .box').not('.'+filter).hide(200);
        $('.gallery .box').filter('.'+filter).show(400);
    }

    $(this).addClass('button-active').siblings().removeClass('button-active');

});








// new



