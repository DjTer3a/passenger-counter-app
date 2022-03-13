
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
let errorPara = document.getElementById("error-el")

function increment(){
    if(count<22){
        count += 1
        countEl.innerText = count 
    }
    else{
        countEl.innerText = `Max count of passangers reached.`;
    }
}

function decrement(){
    if(count>0){
        count -= 1
        countEl.innerText = count
    }
    else{
        countEl.innerText = `No passangers left on bus.`;
    }
}

function save(){ 
   let countStr = count + " - "
   saveEl.textContent += countStr
   count = 0
   countEl.innerText = count
}

