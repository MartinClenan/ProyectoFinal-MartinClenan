
function renderProductos() {
  fetch("./js/productos.json")
  .then((res) => res.json())
  .then((data) => {
    let contenido = "";

    for (const producto of data) {
      contenido += `<div class="col-md-4 text-center">
      <a href="producto.html" onclick="verProducto(${producto.id});" class="text-decoration-none">
      <img src="${producto.imagen}" alt="${producto.nombre}" height="244" />
      <p class="colorFuente roboto-bold">${producto.nombre}</p>
      </a>
      </div>`;
  }
  document.getElementById("productos").innerHTML = contenido;
  })
  .catch(error  => {
    document.getElementById("productos").innerHTML = `<div class="alert alert-danger p-5 text-center" role="alert">· Error al cargar los productos</div>`;
  });
  

  
}

renderProductos();
renderBotonCart();