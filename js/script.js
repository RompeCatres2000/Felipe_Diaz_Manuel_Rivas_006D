$(document).ready(function(){
    $("#registroForm").submit(function(event){
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();
        
        // Realizar las validaciones
        var usuario = $("#usuario").val();
        var contraseña = $("#contraseña").val();
        var verificarcontra = $("#verificarcontra").val();

        // Rut: largo entre 9 y 10 caracteres
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

        // Si todas las validaciones pasan, se puede enviar el formulario
        alert("¡Registro exitoso!");
        
        // Aquí podrías enviar el formulario utilizando AJAX o cualquier otro método
        document.getElementById("registroForm").reset();
    });
});