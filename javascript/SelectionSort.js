const selection=document.querySelector(".selection")


const SelectionSort=async()=>{ 
let bars=document.querySelectorAll(".bar")

for(let i=0;i<bars.length;i++){
    bars[i].style.backgroundColor='red'
    let index=i,minHeight=parseInt(bars[i].style.height)
    for(let j=i+1;j<bars.length;j++){
        bars[j].style.backgroundColor='red'
        if(parseInt(bars[j].style.height)<minHeight){
            index=j;
            minHeight=parseInt(bars[j].style.height)
        }
        bars[j].style.backgroundColor='black'
    }
    await wait(200)
    swap(bars[i],bars[index])
    bars[i].style.backgroundColor='green'
}
}


selection.addEventListener('click',async()=>{
    await SelectionSort()
})

