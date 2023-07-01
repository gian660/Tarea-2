/* Mostrar un cuadro que confirme si se envia o no */
function validarDatos() {
    /* Si devuelve true la pregunta */
    if (confirm("¿Desea enviar su formulario?")) {

        /* Referencia al valor del elemento #user */
        let inputUser = document.getElementById("user").value;

        /* Validar si el usuario está mal escrito */
        if (inputUser.length < 4 || inputUser.length > 16 || inputUser.length == null) {
            /* Referencia al elemento de apoyo */
            let apoyoInputUser = document.getElementById("apoyoInputUser");
            /* Cambiar el atributo style */
            //apoyoInputUser.setAttribute("style", "");
            apoyoInputUser.style.display="";
            alert("El usuario es invalido.");
            return false;
        }else{
            let apoyoInputUser = document.getElementById("apoyoInputUser");
            /* Cambiar el atributo style para ocultar el mensaje */
            apoyoInputUser.style.display = "none";
        }



        /* Referencia al valor del elemento #user */
        let inputName = document.getElementById("nombre").value;

        /* Validar si el usuario está mal escrito */
        if (/^[a-zA-Z]+$/.test(inputName) == false || inputName.length == null) {
            /* Referencia al elemento de apoyo */
            let apoyoinputName = document.getElementById("apoyoinputName");
            /* Cambiar el atributo style */
            apoyoinputName.style.display="";
            alert("El nombre no es valido.");
            return false;
        }else{
            let apoyoinputName = document.getElementById("apoyoinputName");
            /* Cambiar el atributo style para ocultar el mensaje */
            apoyoinputName.style.display = "none";
        }



        /* Referencia al valor del elemento #user */
        let inputPassword = document.getElementById("password").value;
        /* Referencia al valor del elemento #user */
        let inputRePassword = document.getElementById("repassword").value;

        /* Validar que la contraseña cumpla las condiciones */
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(inputPassword) == false) {
            document.getElementById("password").value = "";
            document.getElementById("repassword").value = "";
            alert("La contraseña NO CUMPLE con los requisitos mínimos.");
            return false;
        }

        /* Validar si las contraseñas no son iguales */
        if (inputPassword != inputRePassword) {
            /* Referencia al elemento de apoyo */
            let apoyoInputPassword = document.getElementById("apoyoInputPassword");
            /* Cambiar el atributo style */
            apoyoInputPassword.setAttribute("style", "");
            document.getElementById("repassword").value = "";
            alert("Las contraseñas no son iguales.");
            return false;
        }

        /* Devolver AFIRMACIÓN para enviar el formulario */
        return true;

    } else {
        return false;
    }
}