const naming=document.getElementById("exampleInputName");
const email=document.getElementById("exampleInputEmail1");
const number=document.getElementById("exampleInputNumber")
const degree=document.getElementById("exampleInputSelect");
const year=document.getElementById("exampleInputSelect1")
const status1=document.getElementById("exampleInputSelect2")
const description=document.getElementById("exampleDescriptionName")
const submit=document.querySelector(".btn");
//console.dir(naming);
//console.dir(email);
//console.dir(number);
console.dir(status1);

const nameHelp=document.getElementById("nameHelp")
const emailHelp=document.getElementById("emailHelp")
const numberHelp=document.getElementById("numberHelp")
const branchHelp=document.getElementById("branchHelp")
const yearHelp=document.getElementById("yearHelp")
const statusHelp=document.getElementById("statusHelp")
const descriptionHelp=document.getElementById("descriptionHelp")
console.dir(nameHelp);



submit.addEventListener('click',function(event){
    event.preventDefault();
    if(naming.value ===""){
     console.log("entered")
     nameHelp.style.display="block"
    }
    else{
        nameHelp.style.display="none"
        localStorage.setItem('Is_name',exampleInputName.value)
    }
    if(email.value===""|| !email.value.includes("@")){
        console.log("entered");
        emailHelp.style.display="block" 
    }
    else{
        emailHelp.style.display="none" 
        localStorage.setItem('email',exampleInputEmail1.value)
    }
    if( number.value===""||number.value.length!=10){
     numberHelp.style.display="block"
    }
    else{
        numberHelp.style.display="none"
        localStorage.setItem('number',exampleInputNumber.value)
        
    }
    if(degree.value==="-select-"){
        console.log("entered");
        branchHelp.style.display="block"
    }
    if(year.value==="-select-"){ 
        console.log("entered");
        yearHelp.style.display="block"
    }
    if(status1.value==="-select-"){
        console.log("entered");
        statusHelp.style.display="block"
    }
    if(description.value ===""){
        console.log("entered")
        descriptionHelp.style.display="block"
        
       }
       else{
        localStorage.setItem('description',exampleDescriptionName.value)
       }
    }
    )
    