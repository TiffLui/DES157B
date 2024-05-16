(function(){
    'use strict';

    // Granim 
    const granimInstance = new Granim({
        element: '#gradientContainer',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#9CC1D9', '#6595BF'],
                    ['#5483BF', '#7E8BD9'],
                    ['#7E8BD9', '#E5A6FF']
                ]
            }
        }
    });

    // Instructions
    // When the Game Loads
    document.addEventListener('DOMContentLoaded', function() {
        // Show the overlay when the page loads
        const overlay = document.getElementById('instructions');
        if (overlay) {
            overlay.style.display = 'flex';
        } else {
            console.error('Overlay element not found');
        }
    });
    // Existing JavaScript code...

// Function to close the instructions popup
function closeInstructionsPopup() {
    const instructions = document.getElementById('instructions');
    if (instructions) {
        instructions.style.display = 'none'; // Hides the popup
    }
}

    // Event listener for the "Start" button
    document.getElementById('startBtn').addEventListener('click', closeInstructionsPopup);


}());
