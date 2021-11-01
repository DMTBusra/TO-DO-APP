let input=document.getElementById("input__box");
let addbutton=document.getElementById("input__add");
let list =document.querySelector(".list");
let countertext =document.getElementById("counter_text");
let clearbutton =document.querySelector(".clear_all");
let serachinput = document.getElementById("input_search");
let searchbutton =document.querySelector("#search-button");

addbutton.addEventListener("click",()=>
{
    if(input.value==""){
        alert("Please enter todo");
    }
    else{
        const newTodo= input.value.trim();
        console.log(newTodo);
        addTheList(newTodo);
        counter_text.innerText = `There are ${list.children.length} things to do`; // eklerken sayma
    }
        
});
input.addEventListener("keyup",(e)=>{
    if(e.code =="Enter"){
        e.preventDefault();
        if(input.value==""){
            alert("Please enter todo");
        }
        else{
        const newTodo= input.value.trim();
        console.log(newTodo);
        addTheList(newTodo);
        }
    counter_text.innerText = `There are ${list.children.length} things to do`; // eklerken sayma
    }
    
});

function addTheList(newTodo){  //listeye ekleme fonk
    const listelement = document.createElement("li"); // liste elemanı
    listelement.className="list__element";

    const garbageicon = document.createElement("button");  //çöp ikonu
    garbageicon.className ="icon";
    garbageicon.id ="garbage";
    garbageicon.innerHTML = "<i class='fas fa-trash-alt'></i>"


    checkicon = document.createElement("button");  //tik ikonu
    checkicon.className = "icon";
    checkicon.id="check";
    checkicon.innerHTML = "<i class='far fa-check-square'></i>";

    listicon = document.createElement("i");
    listicon.id ="book";
    listicon.innerHTML = "<i class='fas fa-book-open'></i>";

    listelement.appendChild(listicon);
    listelement.appendChild(document.createTextNode(newTodo)) ;//liste elemanına yeni todo,çöp ve tik ikonu eklendi
    listelement.appendChild(garbageicon);
    listelement.appendChild(checkicon);    
    // console.log(listelement);     
    // console.log(garbageicon);
    // console.log(checkicon);

    list.appendChild(listelement);
    input.value = "";
}

list.addEventListener("click",(e)=>{  // silme işlemi
    if(e.target.className === "fas fa-trash-alt"){
        e.target.parentElement.parentElement.remove();
    }
    counter_text.innerText = `There are ${list.children.length} things to do`;//silerken kalanı sayma

});

list.addEventListener("click",(e)=>{  // check işlemi
    if(e.target.className === "far fa-check-square"){
        if((e.target.parentElement.parentElement.style).textDecorationLine != "line-through")
        {  
            (e.target.parentElement.parentElement.style).textDecorationLine = "line-through";
             (e.target.parentElement.parentElement).style.color = "rgb(187, 43, 187)";
    
        }
        else {
            e.target.parentElement.parentElement.style.textDecorationLine = "none";
            (e.target.parentElement.parentElement).style.color = "rgb(158, 105, 114)";
        }
    }
    });



clearbutton.addEventListener("click",(e)=> {  // hepsini sil
    if(confirm("Do you want to clear all todos?")){
       window.location.reload();
        // list.innerHTML = "";
        list.style ="opacity:0";
        // counter_text.innerText = "";
    }
     // hepsi silinince hiçbişey yazmasın
    
});
searchbutton.addEventListener("click",(e)=>{  //arama
    const searchtext =serachinput.value.toLowerCase();
    console.log(searchtext);
    const listıtems = document.getElementsByClassName("list__element");
    console.log(listıtems);
    console.log();
    for (i=0; i<listıtems.length ; i++){
        if ((listıtems[i].textContent.toLowerCase()).indexOf(searchtext) === -1){
           listıtems[i].setAttribute("style","display:none");
        }
        else{
            listıtems[i].setAttribute("style","display:block");
        }
    }
    serachinput.value = "";

    
});


    
















// add.addEventListener("click",()=>{

//   list.innerHTML+= ""
 
//   console.log(list);




// });