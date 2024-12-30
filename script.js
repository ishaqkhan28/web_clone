const img = document.querySelectorAll(".hero-secti div img")
const control_prev = document.querySelector(".control-prev")
const control_next = document.querySelector(".control-next")

let n = 0;

function changeSlide() {
    for( let i=0;i<img.length;i++){
        img[i].style.display = 'none'

    }
    img[n].style.display = 'block'
}
changeSlide()

control_prev.addEventListener('click',(e)=>{
    if (n>0) {
        n--;
    }else{
        n = img.length -1
    }
    changeSlide()
})
control_next.addEventListener ('click',(e)=>{
    if (n<img.length -1) {
        n++;
    }else{
        n = 0
    }
changeSlide()

})