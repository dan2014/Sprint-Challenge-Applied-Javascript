/* class Carousel {
    constructor(image){
        this.carouselImage = image;
        this.imageData = this.carouselImage.dataset.image; 
        this.rightButton = document.querySelector(`.right-button`);
        this.leftButton = document.querySelector(`.left-button`);
        //this.carouselArray = this.carouselImage.carouselArray;

        if(this.imageData==="1"){
            this.carouselImage.style.display = "block";
        }

        this.rightButton.addEventListener("click", () => this.selectImgR());
        this.leftButton.addEventListener("click", () => this.selectImgL());
    }
    selectImgR(){
        if(this.carouselImage.style.display==="block"){
            this.carouselImage.style.display = "none";
            //this.carouselArray[this.carouselArray.length-1] = this.carouselArray.shift();
            //const newView = document.querySelector(`.carouselImg[data-image="${this.carouselArray[0]}"]`);
            carouselArray[carouselArray.length-1] = carouselArray.shift();
            const newView = document.querySelector(`.carouselImg[data-image="${carouselArray[0]}"]`);
            console.dir(newView);
            console.log(`Image ${newView.dataset.image} is currently displayed block`);
            newView.style.display="block";
            return carouselArray;
        }
    }
    selectImgL(){

    }
}

let carouselArray = [];
let carousel = document.querySelectorAll(".carouselImg");
carousel.forEach(ele => carouselArray.push(ele.dataset.image))
carousel.forEach( ele => ele.carouselArray = Array.from(carouselArray));
carousel = Array.from(carousel).map( (image) => new Carousel(image));
 */

let carouselArray = [];
let carousel = document.querySelectorAll(".carouselImg");
carousel.forEach(ele => carouselArray.push(ele.dataset.image))
carousel = Array.from(carousel);
carousel[0].style.display = "block";
let currentNum = carousel[0].dataset.image;

rightButton = document.querySelector(`.right-button`);
leftButton = document.querySelector(`.left-button`);


function selectImgR(){
        const oldView = document.querySelector(`.carouselImg[data-image="${currentNum}"]`);
        oldView.style.display="none";
        carouselArray[carouselArray.length-1] = carouselArray.shift();
        currentNum = carouselArray[0];
        const newView = document.querySelector(`.carouselImg[data-image="${currentNum}"]`);
        newView.style.display="block";
        return carouselArray;
}

function selectImgL(){
    const oldView = document.querySelector(`.carouselImg[data-image="${currentNum}"]`);
    oldView.style.display="none";
    carouselArray.unshift(carouselArray[carouselArray.length-1]);
    carouselArray.pop();
    currentNum = carouselArray[0];
    const newView = document.querySelector(`.carouselImg[data-image="${currentNum}"]`);
    newView.style.display="block";
    return carouselArray;
}

rightButton.addEventListener("click", () => selectImgR());
leftButton.addEventListener("click", () => this.selectImgL());


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/