
document.getElementById("Segunda_Página").addEventListener("click", function(){
    document.getElementById("página2").style.display = "block";
    document.getElementById("página1").style.display = "none"; //Esto oculta el texto que tenga
})

document.getElementById("Primera_Página").addEventListener("click", function(){
    document.getElementById("página2").style.display = "none";
    document.getElementById("página1").style.display = "block"; //Esto hace aparecer el texto que tenga ocultado
})