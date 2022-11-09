

document.querySelector("#submitBtn").addEventListener('click', isSubmited);



alert("Unfortunately Remove Button Is Not Working Properly")
alert("We Will Try To Fix It Soon")
function isSubmited(){
   
let inputValue = document.querySelector("#message").value;

if(inputValue == false){
    alert("Please Wish Something First")
}
else{
   
    let myMessage = document.createElement("input");
    myMessage.value = inputValue;
 let removebtn =  document.createElement("i");
let parents = document.querySelector("#Parent");
let div = document.createElement("div");
let edit = document.createElement("button");
let save = document.createElement("button");
removebtn.classList="fa-solid fa-rectangle-xmark"
myMessage.textContent = inputValue;
myMessage.setAttribute("disabled","")
edit.textContent ="Edit"
save.textContent = "Save"
myMessage.id ="remove";
parents.appendChild(div);
div.appendChild(myMessage);
div.appendChild(edit);
div.appendChild(removebtn);



//Edit List
edit.addEventListener("click", editList);
function editList(){
    myMessage.removeAttribute("disabled","")
    div.appendChild(save);
    div.appendChild(removebtn);
}

//Save List
save.addEventListener("click",saveList);
function saveList(){
    myMessage.setAttribute("disabled","")
    div.removeChild(save);
    alert("Your Wish Is Being Saved Successfully")
}
//Remove List
removebtn.addEventListener("click", removeWish);
function removeWish(){
parents.removeChild(div);
document.querySelector("#submitBtn").disabled = false;

};

 if(parents.childElementCount >= 5){
    document.querySelector("#submitBtn").disabled = true;
  alert("Unfortunately Your Wish Is Limited To Only For Five")
 };
 
}

 
}