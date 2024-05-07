
(function(){
    'use strict';

// taking data out of json file
    async function getData(){
        const myData = await fetch('data/days.json');
        const data = await myData.json();
        const values = Object.values(data);
        console.log(values);
        
        // allowing you to click on links
        const entries = document.querySelectorAll('nav ul li a');
        entries.forEach(function(eachEntry){
            eachEntry.addEventListener('click', function(event){
                event.preventDefault();
                const day = event.target.getAttribute('href');
                outputHTML(values[day]);
            } );
        });  
    }

    // updating each entry with data for that day
    function outputHTML(data){
        const frame = document.querySelector("#frame")
        frame.innerHTML =
        `<h3 id="title">${data.date}</h3>
        <img src="images/image-${data.picid}.png" alt="picture of what I did this day">
        <p id="text">${data.description}</p>
        <img src="images/paper.png" id="paper" alt="pink paper" width="1069" height="850">`;
    }
   
    getData();

})();


