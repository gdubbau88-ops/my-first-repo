let english = document.querySelector(".english");
let spanish = document.querySelector(".spanish");
let darkMode = document.querySelector(".dark-mode");
let buttonCenter = document.querySelector(".button-center");
let contactInfo = document.querySelector(".contact-info");
let professionHeadshot = document.querySelector(".professional-headshot")
let buttonLeft = document.querySelector(".button-left");
let buttonRight = document.querySelector(".button-right");
let lang = "en";
let buttonProjects = document.querySelector(".button-projects");
let buttonSkills = document.querySelector(".button-skills");
let buttonSettings = document.querySelector(".button-settings");
let buttonAboutMe = document.querySelector(".button-about-me");
let buttonMyGithub = document.querySelector(".button-my-github");
let buttonContactInfo = document.querySelector(".button-contact-info");

function setLang(l) {
     localStorage.setItem("lang",l)
    if (l === "en") {
        buttonRight.innerHTML = "Choose Your Own Adventure Game";
        buttonLeft.innerHTML = "Website for change";
        buttonSkills.innerHTML = "Skills";
        buttonProjects.innerHTML="Projects";
    } else if(l==="es"){
        buttonRight.innerHTML = "Juego de elige tu propia aventura"
        buttonLeft.innerHTML = "Sitio web para el cambio";
        buttonSkills.innerHTML = "Habilidades";
        buttonProjects.innerHTML = "Projectos";
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