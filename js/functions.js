const productos = [
  // Bebidas (1-20)
  ["001", "Coca-Cola Original 600ml", 18.50],
  ["002", "Coca-Cola Light 600ml", 18.50],
  ["003", "Coca-Cola Sin Azúcar 600ml", 18.50],
  ["004", "Sprite 600ml", 17.00],
  ["005", "Fresca 600ml", 17.00],
  ["006", "Fanta Naranja 600ml", 17.00],
  ["007", "Pepsi 600ml", 17.50],
  ["008", "7Up 600ml", 16.50],
  ["009", "Manzanita Sol 600ml", 16.50],
  ["010", "Agua Ciel 1L", 14.00],
  ["011", "Agua Bonafont 1L", 14.50],
  ["012", "Agua Epura 1L", 14.00],
  ["013", "Topo Chico 600ml", 22.00],
  ["014", "Jugo Del Valle Mango 413ml", 20.00],
  ["015", "Jumex Manzana 450ml", 21.00],
  ["016", "Gatorade Naranja 500ml", 25.00],
  ["017", "Powerade Moras 500ml", 24.00],
  ["018", "Monster Energy 473ml", 42.00],
  ["019", "Red Bull 250ml", 45.00],
  ["020", "Electrolit Fresa 625ml", 32.00],

  // Botanas (21-40)
  ["021", "Sabritas Sal 170g", 45.00],
  ["022", "Ruffles Queso 120g", 42.00],
  ["023", "Doritos Nacho 146g", 44.00],
  ["024", "Cheetos Torciditos 145g", 38.00],
  ["025", "Tostitos Salsa Verde 65g", 22.00],
  ["026", "Fritos Sal y Limón 170g", 40.00],
  ["027", "Rancheritos 145g", 38.00],
  ["028", "Churrumais 145g", 25.00],
  ["029", "Takis Fuego 280g", 48.00],
  ["030", "Runners 145g", 35.00],
  ["031", "Kacang Japoneses 100g", 20.00],
  ["032", "Cacahuates Mafer 100g", 28.00],
  ["033", "Paketaxo Mezcladito 215g", 55.00],
  ["034", "Sabritones 160g", 36.00],
  ["035", "Pinguinos Marinela 80g", 22.00],
  ["036", "Choco Roles 80g", 22.00],
  ["037", "Gansito 50g", 18.00],
  ["038", "Submarinos Vainilla 75g", 20.00],
  ["039", "Barritas Fresa 67g", 19.00],
  ["040", "Polvorones Tia Rosa 116g", 21.00],

  // Galletas y Panadería (41-55)
  ["041", "Galletas Emperador Chocolate 101g", 18.50],
  ["042", "Chokis Clásicas 84g", 19.00],
  ["043", "Galletas Oreo 114g", 21.00],
  ["044", "Marias Gamesa 170g", 17.00],
  ["045", "Ritz 93g", 18.00],
  ["046", "Triki Trakes 86g", 18.50],
  ["047", "Pan Blanco Bimbo Grande", 48.00],
  ["048", "Pan Integral Bimbo Grande", 52.00],
  ["049", "Medias Noches Bimbo 8pz", 42.00],
  ["050", "Nito Bimbo 62g", 16.00],
  ["051", "Mantecadas Bimbo Vainilla 4pz", 25.00],
  ["052", "Donas Bimbo Espolvoreadas 4pz", 24.00],
  ["053", "Roles de Canela Bimbo 2pz", 26.00],
  ["054", "Tortillinas Tia Rosa 10pz", 28.00],
  ["055", "Pan Tostado Bimbo Clásico", 35.00],

  // Dulces y Chocolates (56-70)
  ["056", "Snickers 48g", 28.00],
  ["057", "Milky Way 48g", 28.00],
  ["058", "Carlos V 18g", 12.00],
  ["059", "Hershey's Almendras 38g", 25.00],
  ["060", "M&M's Cacahuate 49g", 29.00],
  ["061", "Kinder Sorpresa 20g", 32.00],
  ["062", "Pelon Pelo Rico 30g", 10.00],
  ["063", "Skittles Original 55g", 22.00],
  ["064", "Halls Miel 25g", 13.00],
  ["065", "Trident Menta 18g", 15.00],
  ["066", "Clorets 18g", 15.00],
  ["067", "Sabritas Ruffles", 24.00],
  ["068", "Paleta Payaso 45g", 18.00],
  ["069", "Duvalin Avellana Vainilla", 6.00],
  ["070", "Mazapán De la Rosa 28g", 8.00],

  // Abarrotes y Básicos (71-85)
  ["071", "Leche Lala Entera 1L", 28.00],
  ["072", "Leche Alpura Clásica 1L", 27.50],
  ["073", "Huevo San Juan 12pz", 45.00],
  ["074", "Aceite Nutrioli 850ml", 48.00],
  ["075", "Frijoles Isadora Refritos 430g", 22.00],
  ["076", "Atún Dolores en Agua 140g", 21.00],
  ["077", "Atún Tuny en Aceite 140g", 20.00],
  ["078", "Mayonesa McCormick 190g", 29.00],
  ["079", "Ketchup Heinz 397g", 34.00],
  ["080", "Salsa Valentina Etiqueta Amarilla 370ml", 18.00],
  ["081", "Puré de Tomate Del Fuerte 210g", 9.00],
  ["082", "Sopa Maruchan Pollo 64g", 18.00],
  ["083", "Sopa Maruchan Camarón 64g", 18.00],
  ["084", "Café Nescafé Clásico 120g", 68.00],
  ["085", "Azúcar Estándar Zulka 1kg", 32.00],

  // Cuidado Personal, Higiene y Otros (86-100)
  ["086", "Papel Higiénico Pétalo 4pz", 35.00],
  ["087", "Jabón Zest Aqua 90g", 16.00],
  ["088", "Jabón Palmolive Naturals 90g", 18.00],
  ["089", "Shampoo Caprice 750ml", 45.00],
  ["090", "Pasta Dental Colgate Máxima Protección 100ml", 32.00],
  ["091", "Cepillo Dental Colgate Premier", 25.00],
  ["092", "Desodorante Rexona Aerosol Hombre", 65.00],
  ["093", "Toallas Femeninas Kotex Naturals 10pz", 30.00],
  ["094", "Rastrillo Gillette Prestobarba 3", 38.00],
  ["095", "Detergente Ariel en Polvo 1kg", 42.00],
  ["096", "Suavitel Cuidado Superior 850ml", 28.00],
  ["097", "Sal de Uvas Picot 1pz", 6.00],
  ["098", "Aspirina 500mg 40pz", 55.00],
  ["099", "Condones Sico Safety 3pz", 58.00],
  ["100", "Encendedor BIC Clásico", 22.00]
];


// El total se guarda en CENTAVOS (enteros) para evitar errores de decimales
let total = 0;

function formatoDinero(centavos) {
    return "$" + (centavos / 100).toFixed(2);
}

function actualizarTotal() {
    document.getElementById("total").textContent = formatoDinero(total);
}

function mostrarMensaje(texto) {
    const feedback = document.getElementById("feedback");
    feedback.textContent = texto;
}

function agregarRenglon(cantidad, descripcion, precioCentavos, alineacion = "left") {
    const fila = document.getElementById("cuerpo").insertRow();
    const subtotal = cantidad * precioCentavos;
    const datos = [
        cantidad,
        descripcion,
        (precioCentavos / 100).toFixed(2),
        (subtotal / 100).toFixed(2)
    ];
    const alineaciones = ["center", alineacion, "right", "right"];

    datos.forEach((dato, i) => {
        const celda = fila.insertCell(i);
        celda.style.textAlign = alineaciones[i];
        celda.textContent = dato;
    });

    total += subtotal;
    actualizarTotal();
}

function pedirMonto(mensaje) {
    const texto = prompt(mensaje);
    if (texto === null) return null;
    const monto = parseFloat(texto);
    if (!Number.isFinite(monto) || monto <= 0) {
        alert("¡Error! Ingresa un monto válido mayor a 0.");
        return null;
    }
    return Math.round(monto * 100);
}

function pedirDigitos(mensaje, cantidadDigitos) {
    const regex = new RegExp("^\\d{" + cantidadDigitos + "}$");
    while (true) {
        const texto = prompt(mensaje);
        if (texto === null) return null;
        if (regex.test(texto.trim())) return texto.trim();
        alert("¡Error! Debes ingresar " + cantidadDigitos + " dígitos.");
    }
}

function nuevaVenta() {
    document.getElementById("cuerpo").innerHTML = "";
    document.getElementById("codigodelproducto").value = "";
    total = 0;
    actualizarTotal();
}

function buscarProducto(event) {
    if (event.key !== "Enter") return;

    const input = document.getElementById("codigodelproducto");
    let texto = input.value.trim();
    let cantidad = 1;
    let codigo = texto;

    if (texto.includes("*")) {
        const partes = texto.split("*");
        cantidad = parseInt(partes[0], 10);
        codigo = partes[1].trim();
    }

    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        mostrarMensaje("Cantidad inválida");
        input.value = "";
        return;
    }

    const producto = productos.find(p => p[0] === codigo);
    if (!producto) {
        mostrarMensaje("Producto no encontrado");
        input.value = "";
        return;
    }

    mostrarMensaje("");
    agregarRenglon(cantidad, producto[1], Math.round(producto[2] * 100));
    input.value = "";
}

function cancelarVenta() {
    if (confirm("Desea Cancelar la Venta?")) {
        nuevaVenta(); 
        mostrarMensaje("");
    }
}

function saldoCamion() {
    const monto = pedirMonto("Ingresar Cantidad de Saldo UNE: ");
    if (monto === null) return;
    agregarRenglon(1, "Saldo UNE", monto);
}

function transferencia() {
    const tarjeta = pedirDigitos("Ingresar Numero 16 Digitos:", 16);
    if (tarjeta === null) return;
    const monto = pedirMonto("Ingresar Monto a Transferir");
    if (monto === null) return;
    agregarRenglon(1, "Transferencia ****" + tarjeta.slice(-4), monto, "center");
}

function pagar() {
    if (total === 0) {
        mostrarMensaje("No hay productos");
        return;
    }
    const input = document.getElementById("codigodelproducto");
    const pago = parseFloat(input.value);
    if (!Number.isFinite(pago)) {
        mostrarMensaje("Escribe con cuánto paga el cliente");
        return;
    }
    const pagoCentavos = Math.round(pago * 100);
    if (pagoCentavos < total) {
        mostrarMensaje("Falta: " + formatoDinero(total - pagoCentavos));
        return;
    }
    const cambio = pagoCentavos - total;
    nuevaVenta();
    mostrarMensaje("Cambio: " + formatoDinero(cambio));
}
