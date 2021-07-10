console.log("active")
function swap(el1, el2) {
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}
const speed=document.querySelector(".speed")
let increaseSpeedBy=0
speed.addEventListener('input',()=>{
    console.log(speed.value,typeof(speed.value))
    increaseSpeedBy=parseInt(speed.value)
})
function wait(milisec) { 
    return new Promise((resolve,reject)=> { 
        setTimeout(() => { resolve('') }, milisec-increaseSpeedBy); 
    }) 
}

//get the size
let size_of_array=document.querySelector(".slider")

size_of_array.addEventListener('input',()=>{
    
    createArray(parseInt(size_of_array.value))
    
})
//generate and clearing the array bars 
let arr=[]

//clearing the array_bars everytime
const clearArrayBars=()=>{
    let array_bars=document.querySelector(".array_bars")
    array_bars.innerHTML=''
}

const createArray=(size_of_array)=>{
    clearArrayBars()
    arr=[]
    //generate random array from 1 to 100 values
    for (let i = 0; i <size_of_array; i++) {
        arr.push(Math.floor(Math.random() *130) + 1);
    }
    let array_bars=document.querySelector(".array_bars")
    let width=30
     if(size_of_array>20&&size_of_array<=40){
         width=20
     }
     else if(size_of_array>40&&size_of_array<60){
         width=10
     }
     else if(size_of_array>=60&&size_of_array<=150){
         width=5
     }
    //append each value of array as a child in array_bars
    arr.map((element)=>{
        let bar=document.createElement("div")
        bar.style.height=`${element*3}px`
        bar.style.width=`${width}px`
        bar.classList.add("bar")
        array_bars.appendChild(bar)
    })

}
createArray(parseInt(size_of_array.value))

//generate new array on button click
const new_array=document.querySelector(".new_array")
new_array.addEventListener('click',()=>{
    let size=parseInt(size_of_array.value)
    createArray(size)
})