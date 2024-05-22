$(document).ready(function(){
    $("#registroForm").submit(function(event){

        event.preventDefault();
        

        var usuario = $("#usuario").val();
        var contraseña = $("#contraseña").val();
        var verificarcontra = $("#verificarcontra").val();

        if(usuario.length < 5 || usuario.length > 15){
            alert("El nombre de usuario debe tener entre 5 y 15 caracteres.");
            return;
        }

        if(contraseña.length < 8 || contraseña.length > 15){
            alert("La contraseña debe tener entre 8 y 15 caracteres.");
            return;
        }

        if(verificarcontra !== contraseña){
            alert("Las contraseñas deben coincidir.");
            return;
        }


        alert("¡Registro exitoso!");
        document.getElementById("registroForm").reset();
    });
});