let cars = ["assets/mclaren.png", "assets/golden.jpg", "assets/mazda.jpg","assets/nicepic7.jfif","assets/nicecar5.jpg","assets/nicecar6.jpg"];
const bubbleButtons = document.querySelectorAll('.bubble');

// document.addEventListener("DOMContentLoaded",(e)=>{
//     intervalID = setInterval(startCount,1000)
// })
// console.log(time)

document.querySelector(".img")
let index = 0
carhead.src = cars[index]
bubbleButtons[index].textContent = '●'

setInterval(()=>{
    if(index<5){
        index += 1;
        carhead.src = cars[index];
        bubbles();
        console.log(index);
    }else if(index == 5 ){
        index = 0 ;
        carhead.src = cars[index];
        bubbles();
        console.log(index);
    } 
},5000)

for (let i = 0; i < bubbleButtons.length; i++) {
    bubbleButtons[i].addEventListener('click', function (e) {
        index = i;
        carhead.src = cars[index]
        bubbles();
        // for(let i = 0; i < bubbleButtons.length; i++){
        //  bubbleButtons[i].textContent = '○'
        // bubbleButtons[index].textContent = '●'
        // }
    })
}
//handles the bubble selection to match what picture is shown.
function bubbles(){
    for(let i = 0; i < bubbleButtons.length; i++){
      let b1 = bubbleButtons[i].textContent = '○'
       let b2= bubbleButtons[index].textContent = '●'
       }
       return[b1,b2];
}