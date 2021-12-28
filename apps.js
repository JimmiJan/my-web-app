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