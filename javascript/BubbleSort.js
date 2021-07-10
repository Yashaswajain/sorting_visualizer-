const bubble=document.querySelector(".bubble")


const BubbleSort=async()=>{
    const bars=document.querySelectorAll(".bar")
     
    for(let i=0;i<bars.length;i++){
        bars[i].style.backgroundColor='red'
        for(let j=0;j<bars.length;j++){
            bars[j].style.backgroundColor='red'
            if(parseInt(bars[i].style.height)<parseInt(bars[j].style.height)){
                await wait(100)
                swap(bars[i],bars[j])
            }
            bars[j].style.backgroundColor='black'
        }
        bars[i].style.backgroundColor='black'
    }
    for(let i=0;i<bars.length;i++){
        await wait(100)
        bars[i].style.backgroundColor='green'
    }
}


bubble.addEventListener('click',async ()=>{
    await BubbleSort()
})