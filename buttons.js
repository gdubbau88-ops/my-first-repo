//variables for accesibility features
let english = document.querySelector(".english");
let skills = document.querySelector(".skills");
let spanish = document.querySelector(".spanish");
let darkMode = document.querySelector(".dark-mode");
let lang = "en";
//variables for old project page turtle shell
let buttonCenter = document.querySelector(".button-center");
let contactInfo = document.querySelector(".contact-info");
let professionHeadshot = document.querySelector(".professional-headshot")
let buttonLeft = document.querySelector(".button-left");
let buttonRight = document.querySelector(".button-right");

// variables for landing page turtle shell
let buttonProjects = document.querySelector(".button-projects");
let buttonSkills = document.querySelector(".button-skills");
let buttonSettings = document.querySelector(".button-settings");
let buttonAboutMe = document.querySelector(".button-about-me");
let buttonSources = document.querySelector(".button-sources");
let buttonContactInfo = document.querySelector(".button-contact-info");
//variable for navbar buttons//
let homeButton = document.querySelector(".home-button");
let aboutMeButton = document.querySelector(".about-me-button")
let skillsButton = document.querySelector(".skills-button");
let settingsButton = document.querySelector(".settings-button");
let projectsButton = document.querySelector(".projects-button");
let contactInfoButton = document.querySelector(".contact-info-button");
let sourcesButton = document.querySelector(".sources-button");
//variables for page sections to display using navbar buttons//
let homeSection = document.querySelector(".home-section");
let aboutMeSection = document.querySelector(".about-me-section");
let skillsSection = document.querySelector(".skills-section");
let settingsSection = document.querySelector(".settings-section");
let projectsSection = document.querySelector(".projects-section");
let contactInfoSection = document.querySelector(".contact-info-section");
let sourcesSection = document.querySelector(".sources-section");

homeButton.addEventListener("click", function () {
    homeSection.style.display = "block";
    aboutMeSection.style.display = "none";
    skillsSection.style.display = "none";
    settingsSection.style.display = "none";  
    projectsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    sourcesSection.style.display = "none";
});
aboutMeButton.addEventListener("click", function () {
    homeSection.style.display = "none";
    aboutMeSection.style.display = "block";
    settingsSection.style.display = "none";
    projectsSection.style.display = "none";
    skillsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    sourcesSection.style.display = "none";
});
skillsButton.addEventListener("click", function () {
    skillsSection.style.display = "block";
    homeSection.style.display = "none";
    aboutMeSection.style.display = "none";
    settingsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactInfoSection.style.display = "none"; 
    sourcesSection.style.display = "none";
});
contactInfoButton.addEventListener("click", function () {
    homeSection.style.display = "none";
    aboutMeSection.style.display = "none";
    settingsSection.style.display = "none";
    projectsSection.style.display = "none";
    skillsSection.style.display = "none";
    contactInfoSection.style.display = "block";
    sourcesSection.style.display = "none";
});
projectsButton.addEventListener("click", function () {
    homeSection.style.display = "none";
    aboutMeSection.style.display = "none";
    settingsSection.style.display = "none";
    projectsSection.style.display = "block";
    skillsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    sourcesSection.style.display = "none";
});
settingsButton.addEventListener("click", function () {
    homeSection.style.display = "none";
    aboutMeSection.style.display = "none";
    settingsSection.style.display = "block";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    sourcesSection.style.display ="none";
});
sourcesButton.addEventListener("click", function(){
    homeSection.style.display = "none";
    aboutMeSection.style.display = "none";
    settingsSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    sourcesSection.style.display = "block";
});
buttonSources.addEventListener("click", function(){
    homeSection.style.display = "none";
    aboutMeSection.style.display = "none";
    settingsSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    sourcesSection.style.display = "block";
});
buttonProjects.addEventListener("click", function(){
    homeSection.style.display = "none";
    aboutMeSection.style.display = "none";
    settingsSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "block";
    contactInfoSection.style.display = "none";
    sourcesSection.style.display = "none";
});
buttonAboutMe.addEventListener("click", function(){
    homeSection.style.display = "none";
    aboutMeSection.style.display = "block";
    settingsSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    sourcesSection.style.display = "none";
});
buttonSettings.addEventListener("click", function(){
    homeSection.style.display = "none";
    aboutMeSection.style.display = "none";
    settingsSection.style.display = "block";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    sourcesSection.style.display = "none";
});
buttonSkills.addEventListener("click", function(){
    homeSection.style.display = "none";
    aboutMeSection.style.display = "none";
    settingsSection.style.display = "none";
    skillsSection.style.display = "block";
    projectsSection.style.display = "none";
    contactInfoSection.style.display = "none";
    sourcesSection.style.display = "none";
});
buttonContactInfo.addEventListener("click", function(){
    homeSection.style.display = "none";
    aboutMeSection.style.display = "none";
    settingsSection.style.display = "none";
    skillsSection.style.display = "none";
    projectsSection.style.display = "none";
    contactInfoSection.style.display = "block";
    sourcesSection.style.display = "none";
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
        if (buttonProjects !== null)
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