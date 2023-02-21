
////////////////////ContactList/////////////////////////////
let contactList={
    contacts:[
        {
          nome:"Mirco Abbrecsia",
          telefono:"111111",
             email:"Some e-mail"
        },
        {
            nome:"Andriy Hado",
            telefono:"234324354",
            email:"Some e-mail"
          },   
    ],
    viewContact(){},

    insertContact(nome, telefono, email){
        this.contacts.push(
          {
            nome:nome,
            telefono:telefono,
            email:email,
          },
        );
    },
    
    uppDateCoontct(){},
    deleteContact(){},
}
////////////////////End ContactList/////////////////////////////

////////////////////Button "Visualizza Contatti"/////////////////////////////
let viueButton=document.querySelector("#viewButton");
viueButton.addEventListener("click",viewContacts);
function viewContacts(){
    let contactsWrapper=document.querySelector("#contactsWrapper");
    contactsWrapper.innerHTML=""
    contactList.contacts.forEach( viewContact)

    function viewContact(contact){
        const userContact=document.createElement("div");
        userContact.addEventListener("click",eddingBorder);
        userContact.classList.add("card", "card-layot",
        "shadow", "m-3");

        userContact.innerHTML=`<div class="avatar mx-auto my-4">
        <img src="img/avatar.jpg" class="w-50 h-100 rounded-circle mx-5 " alt="...">
      </div>
      <div class="card-body pt-0 divInfo  d-flex flex-column">
        <span class="text-center mb-1 mb-1 text-info-emphasis">${contact.nome}</span>
        <div class="d-flex flex-column mb-1">
          <span class="text-center text-danger">Telefono</span>
          <span class="text-center">${contact.telefono}</span> 
        </div>
        <div class="d-flex flex-column mb-1">
          <span class="text-center  text-danger">E-mail</span>
          <span class="text-center">${contact.email}</span> 
        </div>`
        contactsWrapper.appendChild(userContact);
        function eddingBorder(){
          const allCards=document.querySelectorAll(".card.card-layot");
          for(let i=0; i<allCards.length; i++){
            allCards[i].classList.remove("selected-card");
          }
          userContact.classList.add("selected-card");
        }
    }

}
//////////////////// End Button "Visualizza Contatti"/////////////////////////////

////////////////////Button "Inserisci"/////////////////////////////
const inserireButtonForm=document.querySelector("#buttonInserireForm").addEventListener("click",getInputValues);

function getInputValues(){
  const imputUserName=document.querySelector("#imputUserName")
  const imputUserTelefon=document.querySelector("#imputUserTelefon")
  const imputUserEmail=document.querySelector("#imputUserEmail")
  contactList.insertContact(imputUserName.value,imputUserTelefon.value, imputUserEmail.value);
  viewContacts();
}

////////////////////End Button "Inserisci"/////////////////////////////


////////////////////CLEAR MODAL IMPUTS VALUE/////////////////////////////
const buttonsForClearImputsValue=document.querySelectorAll(".clearImput");
buttonsForClearImputsValue.forEach(clearImputs);
function clearImputs(value){
  value.addEventListener("click",abc);
  function abc(){
    const arrayImputUserName=document.querySelectorAll("#modal-body>input");
    arrayImputUserName.forEach(clearvalue);
    function clearvalue(input){
      input.value="";
    }
  } 
}

////////////////////END MODAL IMPUTS VALUE/////////////////////////////