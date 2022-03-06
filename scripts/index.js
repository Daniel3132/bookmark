let acc = document.getElementsByClassName("accordion");
let simple = document.getElementById('btnSimple')
let speedy = document.getElementById('btnSpeedy')
let sharing = document.getElementById('btnSharing')
let tabCont = document.getElementById('tab')
let correoHtml = document.getElementById('email')
let alerta = document.querySelector('.alertText') 
let alertaCont = document.getElementById('alert') 

///////acorddion///////
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {

      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

////tabs////
function pintarTabs(elegida){
  let img;
  let title;
  let text;
  switch (elegida){
    case ('simple'):{
      img = './images/illustration-features-tab-1.svg'
      title = 'Bookmark in one click'
      text = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
      simple.classList.add('activeTab')
      speedy.classList.remove('activeTab')
      sharing.classList.remove('activeTab')
      break;
    }
    case ('speedy'):{
      img = './images/illustration-features-tab-2.svg'
      title = 'Intelligent search'
      text = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
      simple.classList.remove('activeTab')
      speedy.classList.add('activeTab')
      sharing.classList.remove('activeTab')
      break;
    }
    case ('sharing'):{
      img = './images/illustration-features-tab-3.svg'
      title = 'Share your bookmarks'
      text = ' Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
      simple.classList.remove('activeTab')
      speedy.classList.remove('activeTab')
      sharing.classList.add('activeTab')
      break;
    }
  }
    tabCont.innerHTML=`
    <div class="tab" id="tab">
    <div class="tabImgCont">
      <img class="tabImg" src="${img}" alt="" srcset="">
    </div>
    <div class="tabTextCont">
      <h2>${title}</h2>
      <p>${text}</p>
      <button class="moreInfo">More Info</button>
    </div>
  </div>
    `
}
///validar correo///////////
alerta.style.display="none"
alertaCont.style.backgroundColor = "none"
function validarCorreo(correo){
  var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  var valido = expReg.test(correo)
  if (valido==true){
    alerta.style.display="none"
    correoHtml.classList.remove('invalido')
    alert('valido')
  }else{
    alerta.style.display="block"
    correoHtml.classList.add('invalido')
    /* alert('el correo no es valido') */
  }
}