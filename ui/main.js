console.log('Loaded!');


//change the text of the main - text div

var element = document.getElementById('main-text');


element.innerHTML='New Value';
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft + 10;
    img.style.marginLeft=marginLeft+'px';
    
    
}
img.onclick = function () {
    //img.style.marginLeft='100px';
     var interval=setInterval(moveRight,100);
};
   



