const image = [...document.querySelectorAll(".carousel-image")]
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const carousel = document.querySelector(".carousel")
let i=0

// let slider = setInterval(() => {
//     image[i].style.display = "none"
//     i++
//     if(i>=image.length){
//         i=0
//     }
//     image[i].style.display = "block"
// }, 2000);

function atomaticSlider(){
    image[i].style.display = "none"
    i++
    if(i>=image.length){
        i=0
    }
    image[i].style.display = "block"
}


let auto;
auto = setInterval(()=>{
    atomaticSlider()
},1000);

function stop(){
    clearInterval(auto)
}

function start(){
    return auto = setInterval(()=>{
        atomaticSlider()
    },1000);
}

carousel.addEventListener('mouseover', function(){
    stop()
})

carousel.addEventListener('mouseout', function(){
    start()
})
