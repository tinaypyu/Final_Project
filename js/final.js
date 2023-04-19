
window.addEventListener("load", function() {
    console.log("load");
});
    

document.addEventListener("DOMContentLoaded", function() {
    console.log("load2")
    document.querySelector(".ham").addEventListener("click", function() { 
        console.log ("ham clicked"); 
        document.querySelector(".ham").classList.toggle("active"); 
        console.log("ham change"); 
        document.querySelector(".nav").classList.toggle("active"); 
        console.log("menu appear"); 
    })  
});
