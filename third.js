var main = document.querySelector('.main');

var crsr = document.querySelector('.cursor');
 //crsr.style.backgroundColor='red';
main.addEventListener("mousemove",function(dets){
      crsr.style.left = dets.x+"px";
      crsr.style.top = dets.y+"px";
})