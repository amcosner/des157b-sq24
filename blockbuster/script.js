(function() {
    'use strict';
    console.log('reading');
    const fscreen = document.querySelector(".fa-maximize");
    const room1 = document.querySelector('#room1');
    // const gg = document.querySelector('.gg-bot');
    // const line1 = document.querySelector('#line1');
    // const line2 = document.querySelector('#line2');
    // const line3 = document.querySelector('#line3');
    // const line4 = document.querySelector('#line4');
    // const line5 = document.querySelector('#line5');
    // const line6 = document.querySelector('#line6');
    // const line7 = document.querySelector('#line7');
    // const line8 = document.querySelector('#line8');
    // const line9 = document.querySelector('#line9');
    // const line10 = document.querySelector('#line10');

    // const lyrics = {
    //     start: [0, 5, 8],
    //     stop: [4, 7, 10],
    //     line: [line1, line2, line3]
    // }

    // const intervalID = setInterval(checkTime, 1000);

    // function checktime() {
    //     console.log(parseInt(myVideo.currentTime));

    //     if (lyrics.start[0] < myVideo.currentTime && myVideo.currentTime < lyrics.stop[0]) {
    //         lyrics.line[0].className = "showing";
    //     } else {
    //         line1.className = "hidden";
    //     }
    //     if (5 < room1.currentTime && room1.currentTime < 7) {
    //         line2.className = "showing";
    //     } else {
    //         line2.className = "hidden";
    //     }

    //     if (8 < room1.currentTime && room1.currentTime < 10) {
    //         line3.className = "showing";
    //     } else {
    //         line3.className = "hidden";
    //     }

    //     if (11 < room1.currentTime && room1.currentTime < 14) {
    //         line4.className = "showing";
    //     } else {
    //         line4.className = "hidden";
    //     }

    //     if (15 < room1.currentTime && room1.currentTime < 18) {
    //         line5.className = "showing";
    //     } else {
    //         line5.className = "hidden";
    //     }

    //     if (19 < room1.currentTime && room1.currentTime < 21) {
    //         line6.className = "showing";
    //     } else {
    //         line6.className = "hidden";
    //     }

    //     if (22 < room1.currentTime && room1.currentTime < 24) {
    //         line7.className = "showing";
    //     } else {
    //         line7.className = "hidden";
    //     }

    //     // for (let i = 0; i < poem.start.length; i++) {
    //     //     if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
    //     //         poem.line[i].className = "showing";
    //     //     } else {
    //     //         poem.line[i].className = "hidden";
    //     //     }
    //     // }
    // }

    // gg.addEventListener('click', function() {
    //     // The fullscreenElement attribute returns null if the element is in windowed mode
    //     if (!document.fullscreenElement) {
    //         // document.documentElement returns the Element that is a direct child of the document, the <html> element
    //         document.documentElement.requestFullscreen();
    //     } else {
    //         document.exitFullscreen();
    //     }
    // });

    fscreen.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
    });
})();