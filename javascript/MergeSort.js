const merge=document.querySelector(".merge")

const Merge=async(bars,l,mid,h)=>{
let a1=[],a2=[]
console.log(l,mid,h)
for(let i=l;i<=mid;i++){
    a1.push(parseInt(bars[i].style.height))
}
for(let i=mid+1;i<=h;i++){
    a2.push(parseInt(bars[i].style.height))
}
let i=0,j=0,k=l,n1=a1.length,n2=a2.length
while(i<n1&&j<n2){
    
    if(a1[i]<=a2[j]){
        bars[k].style.backgroundColor='red'
        await wait(100)
        bars[k].style.height=`${a1[i]}px`
        i++
    }else{
        
        bars[k].style.backgroundColor='red'
        await wait(100)
        bars[k].style.height=`${a2[j]}px`
        j++
    }
    bars[k].style.backgroundColor='green'
    k++
}
while(i<n1){
    bars[k].style.backgroundColor='red'
    await wait(100)
    bars[k].style.height=`${a1[i]}px`
    bars[k].style.backgroundColor='green'
    k++,i++
}
while(j<n2){
    bars[k].style.backgroundColor='red'
    await wait(100)
    bars[k].style.height=`${a2[j]}px`
    bars[k].style.backgroundColor='green'
    k++,j++
}
}

const MergeSort=async(bars,l,h)=>{
       if(l<h){
           let mid=Math.floor(((l+h))/2)
            await MergeSort(bars,l,mid)
            await MergeSort(bars,mid+1,h)
            await Merge(bars,l,mid,h)
       }
}




merge.addEventListener('click',async()=>{
    let bars=document.querySelectorAll(".bar")
    console.log(bars)
    let l=0,h=bars.length-1
    await MergeSort(bars,l,h)
})