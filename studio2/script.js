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

})();