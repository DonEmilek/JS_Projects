window.onload = function(e){
    const change = document.getElementById("change")
    const btn = document.getElementById("buttonid")
    const colorTab = ["#a0b0c0","#aabcd1","#46abc6","#ff1ffa","#b0c0c0","#ba4242","#ddccdd","#abcdef","#ff1aac"]
    const body = document.body;
    let tmp = 0;
    btn.addEventListener("click",(e)=>{
        change.innerHTML = colorTab[tmp]
        body.style.backgroundColor=colorTab[tmp]
        tmp++
        if(tmp==colorTab.length)
            tmp=0;
    })
}
