const quick=document.querySelector(".quick")

const pivot=async(bars,l,h)=>{
       let value=parseInt(bars[h].style.height)
       bars[h].style.backgroundColor='red'
       let i=l-1;
       for(let j=l;j<=h-1;j++){//4 1 4 5 6 3
            if(parseInt(bars[j].style.height)<value){
                i++
                bars[i].style.backgroundColor='red'
                bars[j].style.backgroundColor='red'
                await wait(100)
                swap(bars[i],bars[j])
                bars[i].style.backgroundColor='black'
                bars[j].style.backgroundColor='black'
            }
       }
       await wait(100)
       bars[i+1].style.backgroundColor='black'
       bars[h].style.backgroundColor='black'
       swap(bars[i+1],bars[h])
       bars[i+1].style.backgroundColor='green'
       return i+1
}
const QuickMethod=async(bars,l,h)=>{ 
      if(l<h){
          let i=await pivot(bars,l,h)
          QuickMethod(bars,l,i-1)
          QuickMethod(bars,i+1,h)
      }
      else{
          bars[l].style.backgroundColor='green'
          bars[h].style.backgroundColor='green'
      }
}


const QuickSort=async()=>{
    let bars=document.querySelectorAll(".bar")
    let l=0,h=bars.length-1
    await QuickMethod(bars,l,h)
}



quick.addEventListener('click',async()=>{
    
    await QuickSort()
})
