window.onload = ()=>{
    let headscr = document.getElementById('headscr');
    let tmp = 0;
    document.getElementById('burg').addEventListener("click", ()=>{
        if(tmp==0){
            headscr.style.transition='1s';
            headscr.style.top="100px";
            tmp+=1;
        }
        else{
            headscr.style.transition='2s';
            headscr.style.top="-200px";
            tmp=0;
        }
           
    })
}