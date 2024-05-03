(function(){
    'use strict';

    // Initialize the map
    var map = L.map('map').setView([37.319309, -122.029259], 12);

    // Add a tile layer to the map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Created a marker and bind a popup to it
    var chicha = L.marker([37.322790, -122.035380]).addTo(map);
    var popupChicha = '<div>Chicha San Chen!<br><img src="images/chicha.jpg" alt="Chicha San Chen" height="200"></div>';
    chicha.bindPopup(popupChicha);

    // Optionally, if you want to control the popup opening manually
    chicha.on('click', function() {
        this.openPopup();
    });

    //Adding a circle
    var foodCircle = L.circle([37.336760, -122.040270], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 300
    }).addTo(map);
    var popupFood = '<div>When in doubt, come here for food! (Siam Station)<br><img src="images/siam.jpg" alt="Siam Station" height="200"></div>';
    foodCircle.bindPopup(popupFood);

    //Adding a polygon
    var downtownSJ = L.polygon([
        [37.340580, -121.912560],
        [37.341810, -121.911000],
        [37.341780, -121.898890],
        [37.339180, -121.895390],
        [37.3634818, -121.906993],
        [37.3392781, -121.889048],
        [37.3372174, -121.8835346],
        [37.3355034,-121.8850749],
        [37.3281248,-121.8798965],
        [37.3209277,-121.8989678],
        [37.3319089,-121.9037373],
        [37.3317689,-121.9049258]
    ]).addTo(map);
    var popupSJ = '<div>There is lots to do in downtown SJ! (Urban Putt)<br><img src="images/urban.jpg" alt="Golfing" height="200"></div>';
    downtownSJ.bindPopup(popupSJ);
}());
