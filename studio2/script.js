(function(){
    'use strict';

    let globalData;
    let numDataPoints;
    async function getData(){
        const distractions = await fetch('data.json');
        const data = await distractions.json();
        // Gets the keys and puts them in an array
        globalData = data;
        // Get the number of entries in the JSON file
        numDataPoints = data.length;
        //console.log(globalData, numDataPoints);
        /* const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints); */
    }

    function showDistractionInfo(point, data) {
        
        //testing
        const timeElement = document.createElement('p');
        timeElement.textContent = data[point].time;
        timeElement.classList.add('dynamic-text'); // Apply the CSS class
        //ends here

        const pics = [
            '<img src= "images/working.png" alt="working" height=300>',
            '<img src= "images/callingParents.png" alt="parents" height=300>',
            '<img src= "images/noodles.png" alt="lunch" height=300>',
            '<img src= "images/tangyuan.png" alt="dessert" height=300>',
            '<img src= "images/break.png" alt="break" height=300>',
            '<img src= "images/blueberries.png" alt="snack" height=300>',
            '<img src= "images/bike.png" alt="cycling" height=300>',
            '<img src= "images/taco.png" alt="taco" height=300>',
            '<img src= "images/talkingToFriend.png" alt="chatting" height=300>',
            '<img src= "images/roommates.png" alt="roommates" height=300>',
            '<img src= "images/optometry.png" alt="appointment" height=300>'
        ];
        document.querySelector('#time').innerHTML = data[point].time;
        // document.querySelector('#pic').innerHTML = data[point].pic;
        document.querySelector('#pic').innerHTML = pics[globalData[point].pic - 1]; // Adjusted to use the pics array
        document.querySelector('#activity').innerHTML = data[point].activity;
    }

        // Event listener for when the mouse moves
        document.addEventListener('mousemove', reportPos);

        let prevLoc = 0;

        function reportPos(event) {
            const windowSize = window.innerWidth;
            //The window needs to be divided into sections for each time in the JSON data
            const timeSection = windowSize / numDataPoints;
            const xPos = event.clientX;
            // changeTime will be a number from 0-16
            const changeTime = Math.floor(xPos / timeSection);
    
            // When you move the mouse into the next segment, change the interface.
            if (changeTime !== prevLoc) {
                //console.log(changeTime);
                showDistractionInfo(changeTime, globalData);
                prevLoc = changeTime;
            }
        }
        getData();
})();