var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    console.log("testando botão");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        if (xhr.status == 200){
            
            console.log(xhr.responseText);
            resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente){
                adicionaPaciente(paciente);
            });
    }else{
        var erroxhr = document.querySelector("#erroxhr");
        erroxhr.classList.remove("invisivel");
    }
        
        
    });
    xhr.send();
});