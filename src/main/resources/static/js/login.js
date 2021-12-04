function validarUsuario() {
    var urlBaseLogin = "http://168.138.142.158:8080/api/user";
    //var urlBaseLogin = "/api/user";

    console.log("ejecutando validacion de usuario")

    var email = $("#useremail").val();
    var clave = $("#password").val();

    if (email.length == 0) {
        alert("Ingrese el correo ...!")
        return 0;
    }

    if (clave.length == 0) {
        alert("Ingrese la contraseña ...!")
        return 0;  
    }

    let credentials = {
        email: $("#useremail").val(),
        clave: $("#password").val(),
    };
    
       
    $.ajax({
        type: 'GET',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',

        url: urlBaseLogin + "/" + credentials.email + "/" + credentials.clave,

        success: function (response) {
        console.log(response);
        if (response.name == 'NO DEFINIDO') {
            console.log(response);
            alert('Usuario o contraseña incorrecta ...!');
            return;
            
        }else{  
            console.log(response);
            alert("Acabas de iniciar sesion");    

            }
        }
    });
}

