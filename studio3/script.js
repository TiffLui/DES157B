(function(){
    'use strict';

    //Granim 
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
    
    //jqPuzzle
    $(document).ready(function() { 
        $('img').jqPuzzle(); // apply to all images
        const settings = {
            rows: 3,
            cols: 3,
            hole: 9
        } 
    }); 
}());