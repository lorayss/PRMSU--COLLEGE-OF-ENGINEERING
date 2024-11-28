var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.classList.add("active");
    document.getElementById("hamburgerIcon").style.display = "none";
}

function hideMenu() {
    navLinks.classList.remove("active");
    document.getElementById("hamburgerIcon").style.display = "block";
}
