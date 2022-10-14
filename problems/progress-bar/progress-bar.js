//progress-bar.js
/*
    PROMPT: Create a progress bar
    Requirements:
    1. Takes 3 seconds to fill
    2. Starts filling after button is clicked
    3. If button is clicked before the first bar is done, create another bar
    4. The newly created bar will not start progressing until the previous one is done

*/

//IIFE - Immediately Invoked Function Expression
(() => {
    const body = document.body
    const progressEl = document.getElementById('progress0')
    const barEl = document.getElementById('bar0')
    const startBtn = document.getElementById('start')

    startBtn.addEventListener('click', startBar)

    let isUpdating = false
    let barId = 0
    //Starts updating the first bar, if clicked again, create another bar
    function startBar(){
        if(!isUpdating){
            isUpdating = true
            let id = setInterval(updateBar,30)
            let width = 1
            function updateBar(){
                if(width >= 100){
                    clearInterval(id)
                    isUpdating = false
                }else{
                    width++
                    barEl.style.width = `${width}%`
                    barEl.innerHTML = `${width}%`
                }
            }
        }else{
            //create a new progress bar
            console.log('still updating...creating new bar...')
            barId++
            const newProgressEl = document.createElement('div')
            newProgressEl.id = `progress${barId}`
            newProgressEl.classList.add('progress')
            const newBarEl = document.createElement('div')
            newBarEl.id = `bar${barId}`
            newBarEl.classList.add('bar')

            newProgressEl.appendChild(newBarEl)
            body.appendChild(newProgressEl)
        }
        
    }
})()