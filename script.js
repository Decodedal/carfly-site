let cars = ["assets/mclaren.png", "assets/golden.jpg", "assets/mazda.jpg","assets/nicepic7.jfif","assets/nicecar5.jpg","assets/nicecar6.jpg"];
const bubbleButtons = document.querySelectorAll('.bubble');

document.addEventListener("DOMContentLoaded",(e)=>{
    intervalID = setInterval(startCount,1000)
})
console.log(time)

document.querySelector(".img")
let index = 0
carhead.src = cars[index]
bubbleButtons[index].textContent = '●'

for (let i = 0; i < bubbleButtons.length; i++) {
    bubbleButtons[i].addEventListener('click', function (e) {
        index = i;
        carhead.src = cars[index]
        for(let i = 0; i < bubbleButtons.length; i++){
         bubbleButtons[i].textContent = '○'
        bubbleButtons[index].textContent = '●'
        }
    })
}