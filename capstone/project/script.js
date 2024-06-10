
const gridItem = document.querySelector('section div');
const itemWidth = gridItem.offsetWidth + "px";
const itemHeight = gridItem.offsetHeight + "px";

const building = document.querySelector('.draggable');
building.style.width = itemWidth;
building.style.height = itemHeight;

$(function() {

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

    function makeDraggable(element) {
        element.draggable({
            helper: 'original', // Use the original element during drag
            revert: 'invalid', // Revert if not dropped on a droppable
            snap: '.droppable',
            snapMode: 'inner',
            data : {
                dropped: false
            },
        });
    }

    makeDraggable($('.draggable'));
    
    $('section div').droppable({
        accept: '.draggable',
        drop: function(event, ui) {
            // Check if the draggable element is already in its target location
            var isAlreadyDropped = $(this).children().length > 0 && $(this).children()[0] === ui.helper[0];
            $(this).append(ui.draggable);
            ui.draggable.position({my: "center", at: "center", of: this});
            ui.draggable.drop
            if (!(ui.draggable.data('dropped'))) {
                const newDraggable = ui.draggable.clone();
                ui.draggable.data('dropped',true)
                newDraggable.css({
                    width: itemWidth,
                    height: itemHeight
                }).appendTo('aside');
                makeDraggable(newDraggable);
            }
            
            
        }
    });
});