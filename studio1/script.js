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
    const video = document.getElementById('swimmingSeals');
    const intervalID = setInterval(checkTime, 1000);
    const volumeX = document.querySelector('.fa-volume-mute');
    const music = document.getElementById('music');

    // Loading screen
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('loadingScreen').style.display = 'none';

        document.getElementById('swimmingSeals').style.display = 'block';
    });

    fs.addEventListener('click', function() {
        console.log('Full screen icon clicked');
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })

    volumeX.addEventListener('click', function() {
        if (music.muted) {
            music.muted = false;
            music.play();
            // volumeX.classList.remove('fa-volume-mute');
            // volumeX.classList.add('fa-volume-up');
            volumeX.innerHTML = '<i class="fas fa-volume-up"></i>';
        } else {
            music.muted = true;
            music.pause();
            // volumeX.classList.remove('fa-volume-up');
            // volumeX.classList.add('fa-volume-mute');
            volumeX.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        }
    });  
    
    
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

    let lastRippleTime = 0;

    // Ripple Event Handler for Mouse Move
    const drawRipple = function(ev) {
        const currentTime = Date.now();
        if (currentTime - lastRippleTime < 100) { // 100 milliseconds
            return; // Exit the function if the delay hasn't passed
        }

        const ripple = document.createElement('div');
        ripple.classList.add('ripple');
        ripple.classList.add('animate');
        ripple.style.left = ev.clientX - 5 + "px";
        ripple.style.top = ev.clientY - 5 + "px";

        document.body.appendChild(ripple);

        lastRippleTime = currentTime; // Update the last ripple time
    };
    
    const controller = document.querySelector(".controller");
    document.body.addEventListener("mousemove", drawRipple);

})();
