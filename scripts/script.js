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

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}