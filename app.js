window.onload = function(e){
    const tasks = document.querySelector('#todotask')
    let divs = 0;
    $("#addbtn").click(function (e) { 
        let textfield = document.querySelector('#textField')
        let text = document.getElementById("textField").value;
        if(text.length==0){

        }else{
            $(tasks).append('<div class="task1">'+text+'</div>');
            divs++;
        }
        $(textfield).val(null);
    });    

    $(document).on('click', '.task1', function () {
        $(this).remove();
        $("#finishtask").append('<div class="ftask1">'+this.textContent+'</div>');
    });
    $(document).on('click', '.ftask1', function () {
        $(this).remove();
    });
    
   
}


