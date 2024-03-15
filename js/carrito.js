function renderCarrito() {
    const carrito = obtenerCarritoLS();
    let contenido = "";

    if(cantTotalProductos() > 0){
    contenido = `"<table class="table colorFondo">
        <tbody>
        <tr>
        <td colspan='4' class="text-end"><button class="btn colorFondo2 btn-sm" onclick="eliminarCarrito()" title="Eliminar Carrito">Eliminar Carrito[X]</button></td>
        </tr>`;


        for (const producto of carrito) {
            contenido += `<tr class="colorFondo">
            <td class="text-start"><img src="${producto.imagen}" alt="${producto.nombre}" width="64" /></td>
            <td class="text-start">${producto.nombre}</td>
            <td class="text-start"><b>$${producto.precio}</b></td>
            <td class="text-end"><button class="btn colorFondo2 btn-sm" onclick="eliminarProductoDelCart(${producto.id})" title="Eliminar Producto"><img src="img/trash.svg" alt="Eliminar Producto" width="24" /></button></td>
            </tr>`;
        }

        contenido+= `<tr>
        <td class="tect-center" colspan='2'><b>Total a pagar</b></td>
        <td><b>$${sumaTotalProductos()}</b></td>
        <td class="text-end"><button class="btn colorFondo2 btn-sm" onclick="finalizarCompra()" title="FinalizarCompra"><b>Finalizar compra</b></button></td>
        </tr>
        </tbody>
        </table>`;

    } else{
        contenido = `<h1 class="colorFuente roboto-bold my-5 p-5 text-center">
        Tu carrito esta vació!</h1>
      `;
    }
    document.getElementById("productos").innerHTML = contenido;
}

renderCarrito();
renderBotonCart();