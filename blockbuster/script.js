(function(){
    'use strict';
    console.log('reading');
    const fscreen = document.querySelector('.fa-maximize');
    // const forward = document.querySelector('.fa-forward');
    // const loading = document.querySelector('.fa-star');
    let mode = 'dark';
    const room1 = document.querySelector('#room1');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');
    const line6 = document.querySelector('#line6');
    const line7 = document.querySelector('#line7');
    const line8 = document.querySelector('#line8');
    const line9 = document.querySelector('#line9');
    const line10 = document.querySelector('#line10');
    // const line11 = document.querySelector('#line11');

    // const lyrics = {
    //     start: [0, 5, 8],
    //     stop: [4, 7, 10],
    //     line: [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11]
    // }

    const intervalID = setInterval(checkTime, 1000);

    function checkTime() {
        // console.log(parseInt(room1.currentTime));

        if ( 0 < room1.currentTime && room1.currentTime < 10) {
            line1.className = "showing";
        } else {
            line1.className = "hidden";
        }

        if (1 < room1.currentTime && room1.currentTime < 10) {
            line2.className = "showing";
        } else {
            line2.className = "hidden";
        }

        if (3 < room1.currentTime && room1.currentTime < 10) {
            line3.className = "showing";
        } else {
            line3.className = "hidden";
        }

        if (5 < room1.currentTime && room1.currentTime < 10) {
            line4.className = "showing";
        } else {
            line4.className = "hidden";
        }

        if (7 < room1.currentTime && room1.currentTime < 10) {
            line5.className = "showing";
        } else {
            line5.className = "hidden";
        }

        if (12 < room1.currentTime && room1.currentTime < 23) {
            line6.className = "showing";
        } else {
            line6.className = "hidden";
        }

        if (13 < room1.currentTime && room1.currentTime < 23) {
            line7.className = "showing";
        } else {
            line7.className = "hidden";
        }

        if (15 < room1.currentTime && room1.currentTime < 23) {
            line8.className = "showing";
        } else {
            line8.className = "hidden";
        }

        if (17 < room1.currentTime && room1.currentTime < 23) {
            line9.className = "showing";
        } else {
            line9.className = "hidden";
        }

        if (19 < room1.currentTime && room1.currentTime < 23) {
            line10.className = "showing";
        } else {
            line10.className = "hidden";
        }

        if (21 < room1.currentTime && room1.currentTime < 23) {
            line11.className = "showing";
        } else {
            line11.className = "hidden";
        }
    }

    fscreen.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
    });

    // video.addEventListener('playing', function() {
    //   loading.style.display = 'none';
    // })

    // star.addEventListener('click',function(){
    //         if (mode === 'dark') {
    //             video.className = 'switch';
    //             mode = 'light';
    //         } else {
    //             video.removeAttribute('class');
    //             mode = 'dark'
    //         }
    // })

    // star.addEventListener('click', function() {
    //     if (mode === 'dark') {
    //         // document.querySelector('#vid1').src = "media/room2.webm"
    //         // document.querySelector('#vid2').src = "media/room2.mp4"
    //         document.querySelector('#vid1').setAttribute('src', 'media/room2.webm');
    //         document.querySelector('#vid1').setAttribute('type', 'video/webm');
    //         document.querySelector('#vid2').setAttribute('src', 'media/room2.mp4');
    //         document.querySelector('#vid2').setAttribute('type', 'video/mp4');
    //         mode = 'light';
    //     } else {
    //         // document.querySelector('#vid1').src = "media/room1.webm"
    //         // document.querySelector('#vid2').src = "media/room1.mp4"
    //         document.querySelector('#vid1').setAttribute('src', 'media/room1.webm');
    //         document.querySelector('#vid1').setAttribute('type', 'video/webm');
    //         document.querySelector('#vid2').setAttribute('src', 'media/room1.mp4');
    //         document.querySelector('#vid2').setAttribute('type', 'video/mp4');
    //         mode = 'dark'
    //     }
    // });

    // forward.addEventListener('click', function(){
    //     document.querySelector('#vid1').src= "media/room2.webm";
    //     document.querySelector('#vid2').src= "media/room2.mp4";
    // });

})();