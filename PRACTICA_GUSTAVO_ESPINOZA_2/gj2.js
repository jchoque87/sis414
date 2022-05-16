/*const campo = document.querySelector('#campo');
const boton = document.querySelector('#boton');

boton.addEventListener('click', e=>{
    let intro= " ";
    const pisicion = intro.search(/[0-9]/);
    if(posicion<0){
        console.log("No puede haber numeros en un nombre")
    }
    else{
        console.log("Es un nombre")
    }
});
este era el 1 :V
var error = document.getElementById('error')
error.style.color = 'red';
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')


const expresiones = {
    nombre: /^[a-z A-Z\_\-]{1,40}$/,
    correo: /^[a-z A-Z 0-9 _.+-]+@[a-z A-Z 0-9-]+\.[a-z A-Z 0-9-.]+$/,
    telefono: /^\d{8,13}$/,
    telefono8d: /^\d{8,8}$/,
}
*/
/*
function enviarFormulario(){
    console.log('Enviando Formulario...')
    const validarFormulario = (e) => {
        e.target.name
        var mensajesError = [];
        if(expresiones.nombre.test(e.target.value)){
            mensajesError.push('Tu nombre esta bien')
        }
        else{
            mensajesError.push('El nombre no debe contener numeros ni simbolos');
        }
    }
    return false;
}
FAIL
var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        console.log('Enviando formulario...')
        const validarFormulario = (e) => {
            e.target.name
            var mensajesError = [];
            if(expresiones.nombre.test(e.target.value)==0){
                mensajesError.push('Tu nombre esta bien')
            }
            else{
                mensajesError.push('El nombre no debe contener numeros ni simbolos');
            }
        }
    });
*/
//NUEVO INTENTO

function validar(){
    var nombre, correo, telefono, telefono8d, expresion_nombre,expresion_correo, expresion_num, expresion_num8d;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    telefono8d = document.getElementById("telefono8d").value;
    let nombreTable = " ";

    expresion_nombre = /^[a-z A-Z\_\-]{1,40}$/;
    expresion_correo = /^[a-z A-Z 0-9 _.+-]+@[a-z A-Z 0-9-]+\.[a-z A-Z 0-9-.]+$/;
    expresion_num = /^\d{8,12}$/;
    expresion_num8d = /^\d{8,8}$/;

    if(nombre ==="" || correo==="" || telefono==="" || telefono8d===""){
        alert("Todos los campos son obligatorios")
        return false;
    }
    else {
        //ITERACION 1 PARA NOMBRES
        if(!expresion_nombre.test(nombre)) {
            alert("El nombre no puede tener numeros ni caracteres")
            return false;
        }
        else{
            alert("El NOMBRE esta bien")
            //ITERACION 2 PARA CORREO
            if(!expresion_correo.test(correo)) {
                alert("El CORREO esta mal")
                return false;
            }           
            else{
                alert("El CORREO esta bien")
                //ITERACION 3 PARA TELEFONO FIJO
                if(!expresion_num.test(telefono)){
                    alert("-El Telefono fijo debe tener almenos 8 dijitos 2.No debe existir caracteres")
                }
                    else{
                        alert("El TELEFONO FIJO esta bien")
                        //ITERACION 4 PARA TELEFONO 8 DIGITOS
                        if(!expresion_num8d.test(telefono8d)){
                            alert("El Telefono celular no debe tener letras ni numeros, ni espacios Y tienen que ser de 8 a 12 digitos")
                        }
                        else{
                            alert("El TELEFONO esta bien")
                        }
                        
                    }
                    
            } 
        }
        return false;
    }
    /*
    else{
        if(correo.length>80) {
            alert("El correo es muy largo")
        } 

        
    }        
    else if(expresion_num.test(telefono)){
        alert("El Telefono no debe tener letras ni numeros, ni espacios")
        return false;
    }
    else if(telefono8d.length>8) {
        alert("El telefono de 8 digitos es muy largo")
        return false;
    }
    */
}