
var elem =document.querySelectorAll('.elem');

elem.forEach(function(val){
    val.addEventListener('mouseenter',function(){
      //console.log("Entered");
      val.childNodes[3].style.opacity =1;
    });
    val.addEventListener('mouseleave',function(){
      //console.log("Leave");
      val.childNodes[3].style.opacity =0;
    });

    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px";
       // val.childNodes[3].style.top=dets.y+"px";
    })
});

















// var elemimg=document.querySelector('#elem1 img');

// elem1.addEventListener("mousemove",function(dets){
//     elemimg.style.left= dets.x+"px";
//     elemimg.style.top= dets.y+"px";
// })
// elem1.addEventListener("mouseenter",function(dets){
//     elemimg.style.opacity= 1;
// })
// elem1.addEventListener("mouseleave",function(dets){
//     elemimg.style.opacity= 0;
// })