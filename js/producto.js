function renderProducto() {
    const producto = buscarProducto();
    let contenido = `
        <div class="row"> 
            <div class="col-md-6 offset-md-3 text-center">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
                <h2 class="colorFuente geostar-regular my-3">${producto.nombre}</h2>
                <p class="colorFuente">${producto.descripcion}</p>
                <p class="colorFuente geostar-regular">$${producto.precio}</p>
                <button class="btn btn-danger btn-lg my-3" onclick="agregarProductoCarrito()">Agregar al carrito</button>
            </div>
        </div>`;

    document.getElementById("producto").innerHTML = contenido;
}

function renderPosts() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(respuesta => respuesta.json())
      .then(data => {
        let contenido = "";
        for (const product of data) {
          contenido += `<div class="col-md-12 mb-3">
            <div class="card">
              <div class="card-header">
              <img src="./img/person-bounding-box.svg" class="img-fluid " alt="comentario" width="24"/> ${product.email}
              </div>  
              <div class="card-body">
               <blockquote class="blockquote mb-0">  
                <p><img src="./img/caja-de-texto.png" class="img-fluid" alt="comentario" width="24"/></p>comentario:</p>
                <footer class="blockquote-footer">${product.body}<cite title="Source Title">Source Title</cite></footer>
              </div>
            </div>
          </div>`;
        }
        document.getElementById("resultado").innerHTML = contenido;
      })
      .catch(error => console.error('Error al obtener los productos:', error));
}
  
renderPosts();

renderProducto();