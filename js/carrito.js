function renderCarrito() {
    const carrito = obtenerCarritoLS();
    let contenido = `<table class="table">
    <tbody>`;
      
    for (const producto of carrito) {
        contenido += `<tr> 
        <td class="text-start"><img src="${producto.imagen}" alt="${producto.nombre}" width="100" /></td>
        <td class="text-start">${producto.nombre}</td>
        <td class="text-start"><b>$${producto.precio}</b></td>
        <td class="text-end"><img src="img/trash.svg" alt="Eliminar Producto" width="24"/></td>
        
        </tr>`;
    }

    contenido += `<tr>
    <td class="text-cemter" colspan="2"><b> Total a pagar </b></td>
    <td><b>$${sumaTotalProductos()}</b></td> 
    <td>&nbsp;</td>
    </tr>
    </tbody> </table>`

    document.getElementById("productos").innerHTML = contenido;
}

renderCarrito();
renderBotonCarrito();