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
                    ['#F2A766', '#F2B988'],
                    ['#F2BC79', '#D9BABA'],
                    ['#D9BABA', '#7A9FBF']
                ]
            }
        }
    });
    
    // Initialize the draggable element
    const draggableElements = document.querySelectorAll('.drag-drop');

    // Existing interact.js setup remains unchanged
    draggableElements.forEach((element) => {
        interact(element).draggable({
            listeners: {
                move(event) {
                    const target = event.target;
                    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
                    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                    target.style.transform = `translate(${x}px, ${y}px)`;
                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                },
            },
        });
    });

}())