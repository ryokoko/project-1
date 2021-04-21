window.onload = function() {
    document.getElementById("btn--open").addEventListener("click", openNav, false);
    function openNav() {
        document.getElementById("sidebar").style.width = "30%";
    }

    document.getElementById("btn--close").addEventListener("click", closeNav, false);
    function closeNav() {
        document.getElementById("sidebar").style.width = "0";
    }
}