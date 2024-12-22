
var arr =[
    { dp: "https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg",
        story:"https://i.pinimg.com/originals/2b/71/f6/2b71f6d0c9391df0bff54ee8f56e5b2b.png"
    },
    { dp: "https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg",
        story:"https://img.freepik.com/free-photo/anime-moon-landscape_23-2151645908.jpg?semt=ais_hybrid"
    },
    { dp: "https://i.pinimg.com/550x/98/93/8f/98938fbd7a19257388b258e6b2834396.jpg",
        story:"https://cdn.theanimegallery.com/theanimegallery/f32da540-e758-451f-9dcf-68c6da1f5804-wallpaper-anime-dark.webp"
    },
    { dp: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/329964070/original/d24c6d9da0a8c5e6da3c6b76bf2485c3c22e8033/provide-stock-4k-stock-live-wallpaper-video-for-pc.png",
        story:"https://wallpaper.dog/large/5483728.jpg"
    },
    { dp: "https://m.media-amazon.com/images/I/813hIf-biqL.png",
        story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB_jhUGzCeE-IGWYst47yEobXIGuOz_LpWlA&s"
    }
]

var storiya=document.querySelector(".storiya");


  var clutter=""
arr.forEach(function(elem,idx){
    clutter +=`<div class="story">
            <img id="${idx}" src="${elem.dp} " alt="">
         </div>`
})

storiya.innerHTML=clutter;

storiya.addEventListener("click",function(dets){
        // console.log( arr[dets.target.id].story);   
        document.querySelector(".full-screen").style.display="block";
        document.querySelector(".full-screen").style.backgroundImage= `url(${arr[dets.target.id].story})`

        setTimeout(function(){
            document.querySelector(".full-screen").style.display="none";
        },3000)
    })