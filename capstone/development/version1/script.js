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

}())