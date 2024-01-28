// ==================================== SHOW AND HIDE MENU ==========================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/* Menu show */
if(navToggle)
{
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
        console.log("toggle icon clicked.")
    })
}

/* Menu hidden */

if(navClose){
    navClose.addEventListener("click", () => {
        console.log("nav close icon clicked.")
        navMenu.classList.remove("show-menu");
    })
}

// =========================================================================


/*=============== REMOVE MENU MOBILE ===============*/

/*=============== CHANGE BACKGROUND HEADER ===============*/

/*=============== GSAP ANIMATION ===============*/
