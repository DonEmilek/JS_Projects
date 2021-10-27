window.onload=function(e){
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus')
    const reset = document.getElementById('reset')
    let score = document.getElementById('hdwa')

    minus.addEventListener("click", ()=>{
        let tmp = parseInt(score.textContent)
        tmp-=1;
        score.innerHTML = tmp;
    })
    plus.addEventListener("click", ()=>{
        let tmp = parseInt(score.textContent)
        tmp=tmp+1;
        score.innerHTML = tmp;
    })
    reset.addEventListener("click", ()=>{
        let tmp = parseInt(score.textContent)
        tmp=0;
        score.innerHTML = tmp;
    })
}