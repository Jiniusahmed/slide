
let photos = ["slider1.jpg","slider2.jpg","slider3.jpg","slider4.jpg","slider5.jpg"];
let imgTag = document.querySelector("img");
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')

count = 0;



prev.addEventListener('click', function(){
    count++;

    if(count>=photos.length){
        count= 0;
        imgTag.src= photos[count];
    }else{
        imgTag.src = photos[count];
    }

})


next.addEventListener('click', function(){
    count--;
    
    if(count<0){
        count= photos.length -1;
        imgTag.src= photos[count];
    }else{
        imgTag.src= photos[count];
    }

})

