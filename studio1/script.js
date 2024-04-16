(function(){
    'use strict';

    const fs = document.querySelector('.fa-expand-alt');

    const section1 = document.querySelector('#marine');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
    const line6 = document.querySelector('#line6');
    const line7 = document.querySelector('#line7');
    const line8 = document.querySelector('#line8');
    const line9 = document.querySelector('#line9');
    const video = document.getElementById('swimmingSeaLions');
    const intervalID = setInterval(checkTime, 1000);
    
    fs.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })
    function checkTime() {
        if (1 < video.currentTime && video.currentTime < 4) {
            line1.className = "showing";
            line2.className = "showing";
        } else {
            line1.className = "hidden";
            line2.className= "hidden";
        }

        if (5 < video.currentTime && video.currentTime < 8) {
            line3.className = "showing";
            line4.className = "showing";
        } else {
            line3.className = "hidden";
            line4.className = "hidden";
        }

        if (9 < video.currentTime && video.currentTime < 12) {
            line5.className = "showing";
            line6.className = "showing";
        } else {
            line5.className = "hidden";
            line6.className = "hidden";
        }

        if (13 < video.currentTime && video.currentTime < 16) {
            line7.className = "showing";
            line8.className = "showing";
        } else {
            line7.className = "hidden";
            line8.className = "hidden";
        }

        if (17 < video.currentTime && video.currentTime < 20) {
            line9.className = "showing";
        } else {
            line9.className = "hidden";
        }
    }
})();