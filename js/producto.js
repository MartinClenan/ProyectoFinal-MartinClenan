function renderProducto() {
    const producto = buscarProducto();
    let contenido = `<div class="row"> 
    <div class="col-md-6 offset-md-3 text-center">
    <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
    </div>
    </div>
    <div class="row">
    <div class="col-md-8 offset-md-2 text-center">
    <h2 class="colorFuente geostar-regular my-3">${producto.nombre}</h2>
    <p class="colorFuente">${producto.descripcion}</p>
    <p class="colorFuente geostar-regular">$${producto.precio}</p>
    <p><button class="btn bg-danger" onclick="agregarProductoCarrito()"> Agregar </p>
    </div>
    </div>`;

    document.getElementById("producto").innerHTML = contenido;
}

renderProducto();
renderBotonCarrito ();