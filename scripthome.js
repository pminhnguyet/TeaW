let buttonvideo1 = document.querySelector('.home-d2-video-1-1')
let video1 = document.querySelector('.home-d2-video-1-2')
let close = document.querySelector('.home-d2-video-1-2-close')
buttonvideo1.onclick = function(){
    buttonvideo1.classList.add('active')
    video1.classList.add('active')
}
close.onclick = function(){
    buttonvideo1.classList.remove('active')
    video1.classList.remove('active')
}




function Xemthem(){
    var xtcontent = document.querySelector('#xuavanay-d2-content')
    if (xtcontent.style.display === "block") {
        xtcontent.style.display = "none";
      } else {
        xtcontent.style.display = "block";
      }
}

function Dropdown(){
    var Dropdown = document.querySelector('.Dropdown')
    if (Dropdown.style.display === "block") {
      Dropdown.style.display = "none";
    } else {
      Dropdown.style.display = "block";
    }
}

function navbar(){
  var navbar = document.querySelector('.nav-bar-wrap')
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}

function Doi(){
  let eyeicon = document.getElementById("eyeicon");
  let password = document.getElementById("password");
  if(password.type == "password"){
    password.type = "text";
  }else {
    password.type = "password";
  }
}






