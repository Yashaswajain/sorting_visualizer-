const insertion=document.querySelector(".insertion")

const InsertionSort=async()=>{
    const bars=document.querySelectorAll(".bar")
    for(let i=1;i<bars.length;i++){
        let j=i-1;
        let value=parseInt(bars[i].style.height)
        while(j>=0&&parseInt(bars[j].style.height)>value){
            bars[j].style.backgroundColor='red'
            await wait(100)
            bars[j+1].style.height=`${parseInt(bars[j].style.height)}px`
            await wait(100)
            bars[j].style.backgroundColor='black'
            j--;
        }
        await wait(100)
        bars[j+1].style.height=`${value}px`
    }
    for(let i=0;i<bars.length;i++){
        await wait(100)
        bars[i].style.backgroundColor='green'
    }
}




insertion.addEventListener('click',async()=>{
    await InsertionSort()
})