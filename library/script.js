(function(){
    'use strict';
    console.log('reading js')

    const frame = document.querySelector("#frame")

// taking data out of json file
    async function getData(){
        const myData = await fetch('data/users.json');
        const data = await myData.json();
        const values = Object.values(data);
        console.log(values);
        
        // allowing you to click on links
        const entries = document.querySelectorAll('nav ul li a');
        entries.forEach(function(eachEntry){
            eachEntry.addEventListener('click', function(event){
                event.preventDefault();
                frame.className = "showing";
                const user = event.currentTarget.getAttribute('href');
                outputHTML(values[user]);
            } );
        });  
    }

    // updating each entry with data for that day
    function outputHTML(data){
        // const frame = document.querySelector("#frame")
        frame.innerHTML =
        `<i class="si-x-square"></i><h3 id="title">${data.name}</h3>
        <img src="images/image-${data.picid}.png" alt="picture of what I did this day">
        <p id="text">${data.description}</p>`
        const exit = document.querySelector('.si-x-square');
        exit.addEventListener('click',function(event){
            frame.className="hidden"
        })

    }
   
    getData();

})();
