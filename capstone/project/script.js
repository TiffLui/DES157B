
const gridItem = document.querySelector('section div');
const itemWidth = gridItem.offsetWidth + "px";
const itemHeight = gridItem.offsetHeight + "px";

const building = document.querySelector('.draggable');
building.style.width = itemWidth;
building.style.height = itemHeight;

$(function() {

    // Sweet Alert2 
        // Initialize the SweetAlert2 popup
        Swal.fire({
            title: 'Welcome!',
            html: `
        <div style="margin-bottom: 20px;">In this interactive experience, you will have the opportunity to design your own ideal walkable city by dragging various graphics to the grid boxes. Each time you make a choice, the text box will provide you with some statistics and information about walkable cities.</div>
        <div style="margin-bottom: 20px;">Why Walkable Cities?</div>
        <div>Walkable cities are designed to prioritize pedestrians, making it easier and safer for people to walk or bike to shops, schools, parks, and other places. By exploring this project, you will be able to learn more about the impact of walkability on your health, the environment, and the community well-being.</div>
    `,
            confirmButtonText: 'Start Designing!',
            customClass: {
                popup: 'my-swal-popup'
            }
        });

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

    //Keep track of dropped items
    let droppedCount = 0;

    function makeDraggable(element) {
        element.draggable({
            helper: 'original', // Use the original element during drag
            revert: 'invalid', // Revert if not dropped on a droppable
            snap: '.droppable',
            snapMode: 'inner',
            data : {
                dropped: false
            }
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
                droppedCount++; // Add the dropped count
            }

            //Info depending on drop count
            if (droppedCount === 1) {
                var typed = new Typed('#info', {
                    strings: [
                        "Zoning divides a city into different areas and specifies what types of land are allowed to be in each zone. Ex: when a city plans to have all the shopping and malls in one part of the city in one area, and housing in another. It is using commercial zoning for the shopping areas and residential zoning for the housing areas."
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 2) {
                var typed = new Typed('#info', {
                    strings: [
                        "Single-use zoning leads to 2 to 3 times higher carbon emissions per capita compared to mixed-use areas due to the increased reliance on cars. (Journal of Urban Planning and Development)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 3) {
                var typed = new Typed('#info', {
                    strings: [
                        "Walkable neighborhoods with mixed zoning reduce car travel by 20% to 40%. (Environmental Protection Agency)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 4) {
                var typed = new Typed('#info', {
                    strings: [
                        "Mixed-use development can reduce infrastructure costs by 32% and deliver 10 times more tax revenue per acre than single-use zones. (Brookings Institution)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 5) {
                var typed = new Typed('#info', {
                    strings: [
                        "Walkable cities often have better public transportation networks, making it easier for residents to travel without a car. (“Benefits of Public Transportation” American Public Transportation Association)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 6) {
                var typed = new Typed('#info', {
                    strings: [
                        "Efficient public transport combined with walkability reduces commuting times and stress. (“The Economic Case for Walkability in New York City” New York City Department of Transportation)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 7) {
                var typed = new Typed('#info', {
                    strings: [
                        "Increasing walkability within cities can also decrease air pollution and improve air quality. (“How Walkable Neighborhoods Can Reduce Air Pollution” Urban Land Institute)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 8) {
                var typed = new Typed('#info', {
                    strings: [
                        "Food for thought: This car ad replaces cars with humans on the streets, showing how much space cars take up."
                    ],
                    onComplete: function() { // Corrected: Moved outside of the strings array
                        var iframe = document.createElement('iframe');
                        iframe.setAttribute('src', 'https://www.youtube.com/embed/e_oWmY_mkCA');
                        iframe.setAttribute('frameborder', '0');
                        iframe.setAttribute('allowfullscreen', '');
                        iframe.style.width = '100%'; // Adjust width as needed
                        iframe.style.height = 'auto'; // Adjust height as needed
                        document.querySelector('#info').appendChild(iframe);
                    },
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 9) {
                var typed = new Typed('#info', {
                    strings: [
                        "“As cities become denser and city planners, commercial enterprises, and residents invest in walkability, 5 percent of urban mobility can be provided by foot instead of car by 2050. That shift could result in 2.83–3.51 gigatons of carbon dioxide equivalent greenhouse gas emissions and reduce costs associated with car ownership by US$3.18–3.94 trillion.” (Project Drawdown - Walkable Cities)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 10) {
                var typed = new Typed('#info', {
                    strings: [
                        "Important to note:",
                        "Walking requires cultural change in many places, because walking may be seen as the ‘poor person’s option.’ Changing attitudes must go hand in hand with changing cityscapes.",
                        "(Project Drawdown - Walkable Cities)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 11) {
                var typed = new Typed('#info', {
                    strings: [
                        "Other places in the world are slowly shifting away from private cars and towards more environmentally friendly and resident-focused means."
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 12) {
                var typed = new Typed('#info', {
                    strings: [
                        "Hamburg, Oslo, Helsinki, and Madrid have all announced their plans to become partly car free cities."
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 13) {
                var typed = new Typed('#info', {
                    strings: [
                        "Other cities like Paris, Milan, Chengdu, Masdar, Dublin, Brussels, Copenhagen, Bogota, and Hyderabad all have measures aiming at reducing motorized traffic including implementing car-free days, investing in cycling infrastructure and pedestrianization, among many other measures. (“Car free cities: Pathway to healthy urban living” Nieuwenhuijsen. Khreis.)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 14) {
                var typed = new Typed('#info', {
                    strings: [
                        "Air pollution and noise levels dropped considerably during the lockdown. And, around 90% of car drivers did not miss their commute at all or some aspects, while around 90% of cyclists missed commuting a lot or some aspects of it. (“New Urban Models For More Sustainable…” Nieuwenhuijsen)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 15) {
                var typed = new Typed('#info', {
                    strings: [
                        "The 15 Minute City of Paris:",
                        "“A project where work, school, shops, entertainment, culture, leisure, and other activities are reachable within a 15 minute walk or bike ride of the home. Ecology, proximity, solidarity among citizens and participation of citizens are some of the key aspects.”"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 16) {
                var typed = new Typed('#info', {
                    strings: [
                        "“Aim to make the city more pleasant, agile, healthy and flexible”", 
                        "Encouraging more physical activity and reduce urban inequalities and health inequalities.", 
                        "(“New Urban Models For More Sustainable…” Nieuwenhuijsen)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 17) {
                var typed = new Typed('#info', {
                    strings: [
                        "“Hamburg plans to be car free by 2034, partly to address the climate crisis.” (“New Urban Models For More Sustainable…” Nieuwenhuijsen)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 18) {
                var typed = new Typed('#info', {
                    strings: [
                        "Utrecht’s Merwede:", 
                        "Utrecht’s plan for a completely car-free neighborhood. It will be home to 12,000 residents. And important destinations including the Utrecht Central Station will be within walking or cycling distance. (“New Urban Models For More Sustainable…” Nieuwenhuijsen)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 19) {
                var typed = new Typed('#info', {
                    strings: [
                        "Surprisingly, people in walkable cities spend less time commuting, allowing for more leisure and family time. (Commuting and Time Use” Bureau of Labor Statistics)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 20) {
                var typed = new Typed('#info', {
                    strings: [
                        "“Walkable cities promote sustainable urban design principles, leading to more resilient and adaptable urban environments. (“Principles of Sustainable Urban Design” UN-Habitat)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 21) {
                var typed = new Typed('#info', {
                    strings: [
                        "“Higher levels of walkability are associated with stronger social networks and higher levels of trust among residents.” (“Walkable City: How Downtown Can Save America, One Step at a Time” Speck)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 22) {
                var typed = new Typed('#info', {
                    strings: [
                        "Residents of walkable neighborhoods are more likely to participate in local government and community organizations. (“Walkability and Civic Engagement” Journal of Urban Affairs)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            } else if (droppedCount === 23) {
                var typed = new Typed('#info', {
                    strings: [
                        "Compact, walkable urban areas consume less energy for heating, cooling, and transportation. (“Energy and Transportation” US Department of Energy)"
                    ],
                    typeSpeed: 12,
                    backSpeed: 10
                });
            }        
        }
    });
});