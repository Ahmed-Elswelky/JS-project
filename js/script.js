// slider
let prevBtn = document.querySelector(".buttons .left")
let forBtn = document.querySelector(".buttons .right")
prevBtn.addEventListener("click",  previous);
forBtn.addEventListener("click",  forward);

let arr = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg" ]
let i=1;
function forward(){
 let img = document.querySelector(".img-slider");
 console.log(img.src);
 if(i==arr.length){i=0} ;
 img.setAttribute("src","./images/"+ arr[i]);
 i++;
}

function previous(){
    let img = document.querySelector(".img-slider");
    console.log(img.src);
    if(i<0){i=arr.length-1};
    img.setAttribute("src","./images/" + arr[i]);
    i--;
}


// cards
let catBtnLabtops = document.querySelector(".cat-1")
let catBtnPhones = document.querySelector(".cat-2")
let catBtnTablet = document.querySelector(".cat-3")
let catBtnAccessories = document.querySelector(".cat-4")

catBtnLabtops.addEventListener("click",showLaptops);
catBtnPhones.addEventListener("click",showPhones);
catBtnTablet.addEventListener("click",showTablets);
catBtnAccessories.addEventListener("click",showAcc);

let laps = document.querySelector(".laptops");
function showLaptops(){
    laps.style.display = "block";
    phones.style.display = "none";
    taps.style.display = "none";
    acc.style.display = "none";

}
let phones = document.querySelector(".phones");
function showPhones(){
    phones.style.display = "block";
    laps.style.display = "none";
    taps.style.display = "none";
    acc.style.display = "none";

}
let taps = document.querySelector(".tablets");
function showTablets(){
    taps.style.display = "block";
    laps.style.display = "none";
    phones.style.display = "none";
    acc.style.display = "none";


}
let acc = document.querySelector(".accessories");
function showAcc(){
    acc.style.display = "block";
    laps.style.display = "none";
    phones.style.display = "none";
    taps.style.display = "none";

}


// Cart
let btnAdd = document.querySelectorAll(".add-btn");
let cart = document.querySelector(".cart");
let count = 1
console.log(btnAdd);
btnAdd.forEach((btn) => {
    btn.addEventListener("click",()=>{
     cart.innerHTML ="Cart " + count++;
    })
});
