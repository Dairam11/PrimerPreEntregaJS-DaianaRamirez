/*el usuario debe elegír el monto a simular */

let opcionServ = parseInt(prompt
    ('¡Hola, bienvenido/a! para coordinar un turno elegí el servicio que querés realizarte: \n 1-Esmaltado semipermanente - $3000 \n 2-Esmaltado con Capping Gel -$4000 \n 3-Uñas esculpidas - $5000 \n 0-Salir o continuar al pago')
);

let total = 0;
const IVA = 0.21;
const cargo1 = 0.05;
const cargo2 = 0.07;
const cargo3 = 0.10;

while (opcionServ != 0) {
    switch (opcionServ) {
        case 1:
            total += 3000;
            alert('Elegíste el servicio de semipermanente 😍 Valor $' + total);
            break;
        case 2:
            total += 4000;
            alert('Elegíste el servicio de esmaltado con Capping Gel 🥰 Valor $' + total);
            break;
        case 3:
            total += 5000;
            alert('Elegíste el servicio de Uñas Esculpidas ✨ Valor $' + total);
            break;
        default:
            alert('Elegíste una opción invalida, por favor seleccioná entre (1 - 2 - 3 o 0 para salir)');
            break;
    }

    opcionServ = parseInt(prompt
        ('¡Hola, bienvenido/a! para coordinar un turno elegí el servicio que querés realizarte: \n 1-Esmaltado semipermanente - $3000 \n 2-Esmaltado con Capping Gel -$4000 \n 3-Uñas esculpidas - $5000 \n 0-Salir o continuar al pago')
    );
}

if (total != 0) {
let extras = parseInt(prompt('El valor del servicio no incluye decoraciónes, ni IVA, elegí tu extra para ver el total a pagar. \n 1- Extra decoración con brillos \n 2- Extra decoración a mano alzada \n 3- Extra decoración con piedras \n 4- Sin extras'));

if (extras == 1) {
    alert('Total a pagar $ '+aplicarImpuestosyCargos (IVA, cargo1));
}
else if (extras == 2) {
    alert('Total a pagar $ '+aplicarImpuestosyCargos (IVA, cargo2));
}
else if (extras == 3) {
    alert('Total a pagar $ '+aplicarImpuestosyCargos (IVA, cargo3));
}
else if (extras == 4) {
    alert('Total a pagar $ '+aplicarImpuestosyCargos (IVA, 0));
}
else {
    alert('Opcion incorrecta');
}
}

function aplicarImpuestosyCargos(impuestos, cargos) {
    let totalConImpuestos = total * (1 + impuestos);
    let totalConImpuestosyCargos;
    if(cargos != 0) {
        totalConImpuestosyCargos = totalConImpuestos * (1 + cargos);
    }else{
        totalConImpuestosyCargos = totalConImpuestos;
    }
    return totalConImpuestosyCargos;
}