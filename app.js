window.onload = function(){
    document.querySelector("#ref").addEventListener("click", ()=>{
        window.location.reload()
    })

    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => dataReady(data));
}
function dataReady(data){
    document.querySelector("#joke").innerHTML = data.value;
}