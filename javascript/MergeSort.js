const merge=document.querySelector(".merge")










const MergeSort=async(bars,l,h)=>{
       if(l<h){
           let mid=(l+h)/2
           MergeSort(bars,l,mid-1)
           MergeSort(bars,mid+1,h)
           await Merge(bars,l,mid,h)
       }else{
           bars[l].style.backgroundColor='green'
           bars[h].style.backgroundColor='green'
       }
}




merge.addEventListener('click',async()=>{
    const bars=document.querySelectorAll(".bar")
    let i=0,h=bars.length-1
    await MergeSort(bars,l,h)
})