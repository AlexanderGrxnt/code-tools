//HTML

function openHTMLNav(){
    document.getElementById("overlayNav-HTML").style.width ="180px";
    document.getElementById("blankPanel").style.width ="100%";
    document.getElementById("overlayNav-CSS").style.width = "0%";
}


//CSS

function openCSSNav(){
    document.getElementById("overlayNav-CSS").style.width ="150px";
    document.getElementById("blankPanel").style.width ="100%";
    document.getElementById("overlayNav-HTML").style.width ="0%";
}

//CLOSE

function closeNav(){
    document.getElementById("overlayNav-HTML").style.width ="0%";
    document.getElementById("overlayNav-CSS").style.width = "0%";   
    document.getElementById("blankPanel").style.width ="0%";
}






// (function openNavBar(){
//     document.getElementById("navBar").style.height ="100vh";
//     console.log("navbar");
// })();

