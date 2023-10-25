var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function(event){
    console.log("click duplo");

    event.target.parentNode.classList.add("esmaecer");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    },600);
 
    
});
