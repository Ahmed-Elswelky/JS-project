let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let subButton =document.querySelector(".con-btn");
console.log(subButton);


function check(e){
    e.preventDefault();    
    if(nameInput.value.length == 0){
          let pName = document.getElementById("p1");
          pName.style.display = "block"; 
          e.preventDefault();   
      };

      if(phoneInput.value.length < 14 ){
         let pphone = document.getElementById("p2");
         pphone.style.display = "block"; 
         e.preventDefault();    
      };  
      if(emailInput.value !== 1 ){
         let pEmail = document.getElementById("p3");
         pEmail.style.display = "block";  
         e.preventDefault();   
      };
   };
subButton.addEventListener("click", check);
