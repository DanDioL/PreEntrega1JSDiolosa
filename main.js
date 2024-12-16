//Agregar ciclos, bucles y cierres de itineracion

alert("Bienvenido a la Clinica Virtual");

const usuarios = [];
const passwords = [];

const nuevoUsuario = () => {
    let usuario = prompt("Ingrese su nuevo usuario:").toLowerCase();
    usuarios.push(usuario);
    alert("Su nuevo usuario se creado con exito");
    nuevoPassword();
}

const nuevoPassword = () => {
    let password = prompt("Ingrese su nueva contraseña:").toLowerCase();
    passwords.push(password);
    alert("Su contraseña ha sido guardada con exito");
    ingresoUsuario();
}

const ingresoUsuario = () => {
    let usuario = prompt("Ingrese su usuario:").toLowerCase();
    if (usuarios.includes(usuario)) {
        alert("Bienvenido"+" "+usuario);
        ingresoPassword();
    } 
    while (usuario != usuarios) {
        alert("Usuario incorrecto, intente nuevamente");
        usuario = prompt("Ingrese su usuario:").toLowerCase();       
    }   
}

const ingresoPassword = () => {
    let password = prompt("Ingrese su contraseña:").toLowerCase();
    if (passwords.includes(password)) {
        alert("Contraseña correcta");
    } 
    while (password != passwords) {
        alert("Contraseña incorrecta, intente nuevamente");
        password = prompt("Ingrese su contraseña:").toLowerCase();
        }
}

let login = parseInt(prompt("1 - Ingresar con mi usuario y contraseña\n2 - Crear una nueva cuenta"));

if (login === 1) {
    ingresoUsuario();
} else if (login === 2) {
    nuevoUsuario();
} else {
    confirm("Opcion incorrecta, ¿Desea continuar navegando?");
    login = parseInt(prompt("1 - Ingresar con mi usuario y contraseña\n2 - Crear una nueva cuenta"));
}

console.log(usuarios);
console.log(passwords);

    

let menu = parseInt(prompt("Por favor seleccione una opcion:\n1 - Consulta medica virtual\n2 - Turnos"));

if (menu === 1){
    let consulta = parseInt(prompt("Seleccione la especialidad que desea consultar:\n1 - Clinico Adulto\n2 - Pediatria"));
    if (consulta === 1){
        alert("Por favor aguarde en linea, nuestros doctores lo atenderan a la brevedad\nTiempo aproximado de espera 16 minutos")
    }else if (consulta === 2){
        alert("Por favor aguarde en linea, nuestros doctores lo atenderan a la brevedad\nTiempo aproximado de espera 7 minutos")
    }else {
        parseInt(prompt("Usted ha seleccionado una opcion que no es valida\nPor favor seleccione la especialidad que desea consultar:\n1 - Clinico Adulto\n2 - Pediatria"))
    }
}else if (menu === 2){
    const turno = parseInt(prompt("Seleccione la especialidad:\n1 - Traumatologia\n2 - Gastroenterologia\n3 - Dermatologia\n4- Obstetricia y ginecologia"))
    switch (turno){
        case 1: 
            alert("Su turno para traumatologia fue asignado para el dia 01-11-2036 a las 16:00hs\nPor favor sea puntual")
            break;
        case 2:
            alert("Su turno para Gastroenterologia fue asignado para el dia 26-04-2027 a las 04:00hs\nPor favor sea puntual")
            break;
        case 3:
            alert("Su turno para Dermatologia fue asignado para el dia 14-02-2024 a las 12:37hs\nPor favor sea puntual")
            break;
        case 4:
            alert("Su turno para traumatologia fue asignado para el dia 25-12-2024 a las 00:00hs\nPor favor sea puntual")
            break;
        default:
            parseInt(prompt("Usted ha seleccionado una opcion que no es valida\nSeleccione la especialidad:\n1 - Traumatologia\n2 - Gastroenterologia\n3 - Dermatologia\n4- Obstetricia y ginecologia"))                   
            break;
        }
}else{
    alert("Opcion incorrecta");
}
