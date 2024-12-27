document.querySelectorAll('.photos img').forEach(Image =>{
   Image.onclick =()=>{
    document.querySelector('.container').style.display ='block';
    document.querySelector('.container img').src = Image.getAttribute('src')
   }
});

document.querySelector('.container #x').onclick =()=>{
    document.querySelector('.container').style.display ='none';
}
let index=0;

for(let i=0; i<Image.length; i++){
    index=Image[i];
    break;
}

function left(){
    let images = document.querySelectorAll('.photos img');
    index = (index - 1 + images.length) % images.length;
    document.querySelector('.container img').src = images[index].getAttribute('src');
}
function right(){
    let images = document.querySelectorAll('.photos img');
    index = (index + 1 + images.length) % images.length;
    document.querySelector('.container img').src = images[index].getAttribute('src');
}