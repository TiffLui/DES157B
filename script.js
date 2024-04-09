(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner img');
    const sections = document.querySelectorAll('section')
    let mode = 'dark';

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
                section.style.backgroundColor = '#7dd7e1';
                section.style.borderRadius = '20px'
            }
            button.textContent = "Sleep";
            banner.src = "images/SnorlaxEating.jpg";
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
                section.style.backgroundColor = '#7cabc6';
                section.style.borderRadius = '20px';
            }
            button.textContent = "Wake Up!";
            banner.src = "images/SleepingSnorlax.jpg";
            mode = 'dark'
        }
    })

    function updateTimeDisplay() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;

        // Select the element where the time will be displayed
        const timeDisplay = document.getElementById('CurrentTime');
        timeDisplay.textContent = timeString;
    }
     // Function to update the date display
     function updateDateDisplay() {
        const now = new Date();
        const dateString = now.toLocaleDateString(); // Formats the date as per the user's locale

        // Select the element where the date will be displayed
        const dateDisplay = document.getElementById('CurrentDate');
        dateDisplay.textContent = dateString;
    }

    // Update the time display initially
    updateTimeDisplay();
    updateDateDisplay();

    // Set an interval to update the time display every second
    setInterval(updateTimeDisplay, 1000);
    setInterval(updateDateDisplay, 1000);

})()