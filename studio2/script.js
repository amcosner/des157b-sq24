(function(){
    'use strict';
    console.log('reading js')
    const btns = document.querySelectorAll('button');

    function hideStart(){
        document.querySelector('#text').className = "hidden"
    }

    document.querySelector('#one').addEventListener('click',function(event){
        hideStart();
    })

    // if you need instructions again click on main text
    document.querySelector('h1').addEventListener('click',function(event){
        document.querySelector('#text').className = "showing"
    })
    
        let globalData;
    
        async function getData() {
            const myData = await fetch('data.json');
            const data = await myData.json();
            globalData = data;
        
            document.querySelector('nav ul').innerHTML = makeBtns(data);
    
            makeEvents();
            
            const firstDate = '04/15'; 
            updateInterface(firstDate, globalData);
        }
    
        function makeBtns(data){
            let html = '';
            const days = Object.keys(data['']);
            console.log(daysOfWeek);
            daysOfWeek.forEach(function(day){
                html += `<li><button id="${day}">${day}</button></li>`;
            });
    
            return html;
        }
    
        function createEvents() {
            const buttons = document.querySelectorAll('button');
        
            for (const button of buttons) {
                button.addEventListener('click', function(event) {
                    const day = event.target.id;
                    updateInterface(day, globalData);
    
                    const songTitle = document.querySelector('#song h2');
                    const img = document.querySelector('img');
                    const songlink = document.getElementById('songlink');
    
                    songTitle.classList.remove('hidden');
                    songTitle.classList.add('visible');
                    img.classList.remove('hidden');
                    img.classList.add('visible');
    
                    songlink.classList.remove('hidden');
                    songlink.classList.add('visible');
       
                });
    
            }
    
        }
    
        function updateInterface(day, jsonData){
            console.log(jsonData);
            const songTitle = document.querySelector('#song h2');
            const img = document.querySelector('img');
            const songlink = document.getElementById('songlink');
    
    
            const { song, artist, link } = jsonData['Top Songs of the Week'][day];
            songTitle.innerHTML = `${song} <br> by ${artist}`;
        
            const imageName = day.toLowerCase();
            img.src = `images/${imageName}.jpg`; 
            img.alt = `${day} cover`;
    
            songlink.href = link;
            
        }
    
    
        getData();
    
})();