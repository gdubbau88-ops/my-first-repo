let english = document.querySelector(".english");
let spanish = document.querySelector(".spanish");
let darkMode = document.querySelector(".dark-mode");
let buttonCenter = document.querySelector(".button-center");
let contactInfo = document.querySelector(".contact-info");
let professionHeadshot = document.querySelector(".professional-headshot")
let buttonLeft = document.querySelector(".button-left");
let buttonRight = document.querySelector(".button-right");
let lang = "en";

function setLang(l) {
     localStorage.setItem("lang",l)
    if (l === "en") {
        buttonRight.innerHTML = "Choose Your Own Adventure Game";
        buttonLeft.innerHTML = "Website for change";
    } else if(l==="es"){
        buttonRight.innerHTML = "Juego de elige tu propia aventura"
        buttonLeft.innerHTML = "Sitio web para el cambio";
    }else{

    }

}

if (english === null) {
    console.log("EN-null")
} else {
    english.addEventListener("click", function () {
        setLang("en")
    })
};
if (spanish === null) {
    console.log("Es-null")
} else {
    spanish.addEventListener("click", function () {
        setLang("es")
    })
};
document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded")
    lang = localStorage.getItem("lang")
    console.log(lang)
    setLang(lang)
})