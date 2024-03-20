function renderCarrito() {
    const carrito = obtenerCarritoLS();
    let contenido = "";

    if (cantTotalProductos()> 0) {
        
    contenido = `<table class="colorFondo">
    <tbody>
    <tr>
    <td colspan="4" class="text-center"><button class="btn  btn-danger" onclick="eliminarCarrito()" title="Vaciar Carrito"><img src="img/cart-x-fill.svg" alt="Eliminar Producto" width="24"/>Vaciar Carrito</button></td>
    </tr>`;
      
    for (const producto of carrito) {
        contenido += `<tr> 
        <td class="text-start"><img src="${producto.imagen}" alt="${producto.nombre}" width="100" /></td>
        <td class="text-start">${producto.nombre}</td>
        <td class="text-start"><b>$${producto.precio}</b></td>
        <td class="text-end"><button class="btn  btn-danger" onclick="eliminarProductoCarrito(${producto.id})"  title="Eliminar Producto"> <img src="img/trash.svg" alt="Eliminar Producto" width="24"/>Eliminar Producto</button></td>
        
        </tr>`;
    }

    contenido += `<tr>
    <td class="text-center" colspan="2"><b> Total a pagar </b></td>
    <td><b>$${sumaTotalProductos()}</b></td> 
    <td class="text-end"><button class="btn  btn-danger" onclick="finalizarCompra()"  title="Finalizar compra"><img src="img/cart-check-fill.svg" alt="Eliminar Producto" width="28"/> Finalizar compra</button></td>
    </tr>
    </tbody> </table>`

    } else {
        contenido = `<div class="alert alert-danger my-5 p-5 text-center" role="alert">
        El carrito se encuentra vacío
      </div>`;
    }

    document.getElementById("productos").innerHTML = contenido;
}

renderCarrito();
renderBotonCarrito();