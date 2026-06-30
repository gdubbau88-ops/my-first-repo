let english = document.querySelector(".english");
let skills = document.querySelector(".skills");
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
let homeButton = document.querySelector(".home-button");
let aboutMeButton = document.querySelector(".about-me-button")
let skillsButton = document.querySelector(".skills-button");
let settingsButton = document.querySelector(".settings-button");
let projectsButton = document.querySelector(".projects-button");
let contactInfoButton = document.querySelector(".contact-info-button");
let homeSection = document.querySelector(".Home-Section");
let aboutMeSection = document.querySelector(".About-Me-Section");
let skillsSection = document.querySelector(".Skills-Section");
let settingsSection = document.querySelector(".Settings-Section");
let projectsSection = document.querySelector(".Projects-Section");
let contactInfoSection = document.querySelector(".Contact-Info-Section");
homeButton.addEventListener("click", function(){
    homeSection.style.display = "block";
    aboutMeSection.style.display = "none";
    skillsSection.style.display = "none";
    settingsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    projectsSection.style.display = "none";
});
aboutMeButton.addEventListener("click", function(){
    homeSection.style.display = "none";
    aboutMeSection.style.display = "block";
    skillsSection.style.display = "none";
    settingsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    projectsSection.style.display = "none";
});
function setLang(l) {
    localStorage.setItem("lang", l)
    if (l === "en") {
        buttonRight.innerHTML = "Choose Your Own Adventure Game";
        buttonLeft.innerHTML = "Website for change";
        if (buttonSkills !== null)
            buttonSkills.innerHTML = "Skills";
        if (buttonProjects !== null)
        buttonProjects.innerHTML = "Projects";
    } else if (l === "es") {
        buttonRight.innerHTML = "Juego de elige tu propia aventura";
        buttonLeft.innerHTML = "Sitio web para el cambio";
        if (buttonSkills !== null)
            buttonSkills.innerHTML = "Habilidades";
        if(buttonProjects !== null)
        buttonProjects.innerHTML = "Projectos";
    } else {

    }

};

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
});