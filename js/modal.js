function abrirModal() {
    const numero = pedirDigitos("Ingresar Numero 10 Digitos:", 10);
    if (numero === null) return;
    alert("¡Dato Ingresado Correctamente!");
    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function agregarPaquete(monto) {
    agregarRenglon(1, "Paquete Datos $" + monto, monto * 100);
    cerrarModal();
}

const saldo50  = () => agregarPaquete(50);
const saldo100 = () => agregarPaquete(100);
const saldo200 = () => agregarPaquete(200);
const saldo500 = () => agregarPaquete(500);
