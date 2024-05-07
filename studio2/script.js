(function() {
    'use strict';

    let globalData;

    // getting data off json file
    async function getData() {
    const days = await fetch('data/days.json');
    const myData = await days.json();
    const values = Object.values(moreData);
    console.log(values);
    globalData = myData;
    }

    const btn = document.querySelector('button');

    async function showData(day) {
        const data = await getData();
        const frame = document.querySelector('#frame');
        const placeholder = document.querySelector('#placeholder');
        const title = document.querySelector('#title');
        const text = document.querySelector('#text');

        if (data && data[`day${day}`]) {
            const deData = data[`day${day}`];
            //tracker text
            title.innerHTML = `${deData.date}`
            // frame.innerHTML = `${deData.date}`
            text.innerHTML = `${deData.description}`

            //tracker image
            if (deData.day == "04/15") {
                placeholder.src = 'images/image1.png'; 
            } else if (deData.day == "04/16") {
                placeholder.src = 'images/image2.png'
            } else if (deData.day == "04/17") {
                placeholder.src = 'images/image3.png'
            } else if (deData.day == "04/18") {
                placeholder.src = 'images/image4.png'
            } else if (deData.day == "04/19") {
                placeholder.src = 'images/image5.png'
            } else if (deData.day == "04/20") {
                placeholder.src = 'images/image6.png'
            } else if (deData.day == "04/21") {
                placeholder.src = 'images/image7.png'
            } else if (deData.day == "04/22") {
                placeholder.src = 'images/image8.png'
            } else {
                placeholder.src = 'images/image0.png'; 
            }
        } else {
            text.innerHTML = "data couldn't be retrieved";
            placeholder.src = 'images/image0.png';
        }
    }

    btn.addEventListener('click', function(){
        for (let i = 1; i <= 8; i++) {
            const list = document.querySelector(`#day${i}`);
            list.addEventListener('click', () => showData(i));
        }
    })
      
})()