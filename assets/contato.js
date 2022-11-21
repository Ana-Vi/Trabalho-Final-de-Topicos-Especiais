document.getElementById("form").style.display = "none";
document.getElementById("submit").addEventListener("click", enviaEmail);
        

function enviaEmail(){
    let assunto = document.getElementById("assunto").value;
    let descricao = document.getElementById("descricao").value;
    let to = document.getElementById("to").value;
    window.location.href = "mailto:"+to+"?Subject="+assunto+"&Body="+descricao;
}


function mostraForm(email){
    document.getElementById("to").value = email;
     document.getElementById("form").style.display = "flex";
}