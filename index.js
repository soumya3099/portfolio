let homeNavbarEl = document.getElementById("homeNavbar");
let homeEl = document.getElementById("homeSection");
let aboutMeEl = document.getElementById("aboutMeSection");
let academicEl = document.getElementById("academicSection");
let skillsEl = document.getElementById("skillsSection");
let projectsEl = document.getElementById("projectSection");
let footerEl = document.getElementById("footerSection");
let homeLinkEl = document.getElementById("homeLink");
let aboutLinkEl = document.getElementById("aboutMeLink");
let academicsLinkEl = document.getElementById("academicsLink");
let skillsLinkEl = document.getElementById("skillsLink");
let projectsLinkEl = document.getElementById("projectsLink");
let contactLinkEl = document.getElementById("contactLink");
function isVisible(el){
    let rect = el.getBoundingClientRect();
    console.log(rect.bottom)
    if(rect.bottom>(window.innerHeight*0.7||document.documentElement.clientHeight*0.7) &&
    rect.top<(window.innerHeight*0.7||document.documentElement.clientHeight*0.7)) return 1;
    else return 0;
}

function onScroll(){
 
    if(isVisible(homeEl)) homeLinkEl.classList.add("current-page-link");
    else homeLinkEl.classList.remove("current-page-link");
    if(isVisible(aboutMeEl)) aboutLinkEl.classList.add("current-page-link");
    else aboutLinkEl.classList.remove("current-page-link");
    if(isVisible(academicEl)) academicsLinkEl.classList.add("current-page-link");
    else academicsLinkEl.classList.remove("current-page-link");
    if(isVisible(skillsEl)) skillsLinkEl.classList.add("current-page-link");
    else skillsLinkEl.classList.remove("current-page-link");
    if(isVisible(projectsEl)) projectsLinkEl.classList.add("current-page-link");
    else projectsLinkEl.classList.remove("current-page-link");
    if(isVisible(footerEl)) contactLinkEl.classList.add("current-page-link");
    else contactLinkEl.classList.remove("current-page-link");

}
document.addEventListener("scroll",onScroll,{passive:true} );
function shiftWindow() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);