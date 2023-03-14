const rotateLeft = document.querySelector("#rotateLeft");
const rotateRight = document.querySelector("#rotateRight");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");

//DEFAULTS
document.getElementById("myTextBox").placeholder = "write something...";

//GRITTER
function createGritt(){
    const newLi = document.createElement("LI");
    const img = document.createElement("IMG");
    const newP = document.createElement("P");
    const newTxtBox = document.getElementById("myTextBox").value;

   
    img.src = "./images/better_than_drake.png";
    newLi.appendChild(img);
   
    if(newTxtBox==""){
        alert("you can not share empty message!");

    }
    else{

        newP.innerHTML = newTxtBox;
        document.getElementById("myList").appendChild(newLi);
        newLi.appendChild(newP);
        document.getElementById("myTextBox").value="";
    }

    
    
    
   
    

   
    }
    const submit = document.querySelector("#submit");
    submit.addEventListener("click",createGritt);



//HIDE AND GO
const imgDIV=document.getElementById("hide-and-goIMG");

imgDIV.addEventListener("mouseout",()=>{
    img2.style.visibility="visible";
});

imgDIV.addEventListener("mouseover",()=>{
    img2.style.visibility="hidden";
});


 





//ROTATE
rotateRight.addEventListener("click",right);
rotateLeft.addEventListener("click",left);


let rotation=0;
function right(){
    rotation = rotation + 15
    document.querySelector("#img1").style.transform='rotate(' + rotation + 'deg)';
}

function left(){

    rotation = rotation - 15
    document.querySelector("#img1").style.transform='rotate(' + rotation + 'deg)';
}