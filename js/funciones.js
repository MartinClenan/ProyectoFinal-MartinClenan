const productos = [
    {
      id: 1,
      nombre: "Proteina 1 kg Nutrilab",
      imagen:
        "https://stiersuplementos.ar/wp-content/uploads/2023/10/proteina-nutrilab.png",
      descripcion:
        "RECOMENDADO COMO LÍNEA ECONÓMICA. Proteínas de excelente calidad de suero lácteo y vitaminas en concentraciones que proporcionan un rendimiento físico óptimo. Acelera la reconstrucción y recuperación de tus músculos desarrollándolos de manera consistente. Las proteínas de suero lácteo (Whey protein) son un grupo de proteínas globulares que pueden ser aisladas de la leche. Poseen un altísimo valor biológico y son consideradas proteínas completas, ya que contienen todos los aminoácidos esenciales (los que el organismo no es capaz de sintetizar por sí mismo), y son una rica fuente de aminoácidos de cadena ramificada (bcaa), necesarios para fortalecer el sistema inmune, potenciar la producción de la hormona del crecimiento, el anabolismo y la regeneración del tejido muscular.",
      precio: 18500,
      categoria: "proteinas",
    },
    {
      id: 2,
      nombre: "Creatina Nutrilab",
      imagen:
        "https://stiersuplementos.ar/wp-content/uploads/2023/10/creashock.png",
      descripcion:
        "Creatina recomendada en la línea económica, con agregados de sabor y aminoácidos esenciales. La creatina enriquecida con taurina, leucina, beta alanina, arginina, vitaminas y minerales. Aumenta la capacidad de realizar ejercicios de alta intensidad y recuperarse en lapsos cortos logrando mejores entrenamientos sintiendo como incrementa tu rendimiento físico. La creatina es un compuesto que se encuentra de forma natural en el organismo, la cual es utilizada en el aporte de energía para la contracción muscular, se sintetiza a partir de los aminoácidos arginina, metionina y glicina. su mayor concentración se encuentra en la musculatura esquelética.",
      precio: 18000,
      categoria: "creatinas",
    },
    {
      id: 3,
      nombre: "Combo Nutrilab",
      imagen:
        "https://stiersuplementos.ar/wp-content/uploads/2023/11/WhatsApp-Image-2024-02-28-at-15.43.47.jpeg",
      descripcion:"Proteina Nutrilab de 1kg sabor a elección + creatina monohidratada nutrilab 300 gr (30 servicios) saborizada, con agregados de aminoácidos. Combo precio/calidad económico, lo mejor que vas a conseguir en ese precio",
      precio: 32000,
      categoria: "combos",
    },
    {
      id: 4,
      nombre: "Proteina 2lbs One Fit",
      imagen:
        "https://stiersuplementos.ar/wp-content/uploads/2023/10/prote-of-choco.png",
      descripcion: "LOne Fit Whey Protein: MUY RECOMENDADA PRECIO/CALIDAD INTERMEDIO.Fue creada pensando en brindar a los deportistas resultados reales, ya que permite mejorar la recuperación de los músculos y aumentar la concentración de proteínas en el cuerpo, favoreciendo así el aumento de la masa muscular. Estos son algunos de sus beneficios: Aumenta la fuerza y favorece el rendimiento del entrenamiento. Previene la degeneración muscular. Mejora la recuperación de los músculos luego del entrenamiento",
      precio: 27000,
      categoria: "proteinas",
    },
    {
      id: 5,
      nombre: "Creatina One Fit",
      imagen:
        "https://stiersuplementos.ar/wp-content/uploads/2023/10/creatina-onefit.png",
      descripcion:
        "La creatina es un ácido orgánico nitrogenado derivado de los aminoacidos, sustancia natural que el propio organismo humano es capaz de sintetizar. Constituye un vector inmediato y directo para transportar ATP y proveer de energía a las miofibrillas musculares.",
      precio: 27000,
      categoria: "creatinas",
    },
    {
      id: 6,
      nombre: "Combo One Fit DOYPACK",
      imagen:
        "https://stiersuplementos.ar/wp-content/uploads/2023/11/WhatsApp-Image-2023-12-18-at-15.00.48.jpeg",
      descripcion:
        "Proteina One fit de 2lbs sabor a elección EN DOYPACK  + creatina monohidratada y micronizada one fit 200 gr (40 servicios) saborizada, con agregados de aminoácidos. Combo precio/calidad intermedio, lo mejor que vas a conseguir en ese precio",
      precio: 36500,
      categoria: "combos",
    },
    {
      id: 7,
      nombre: "Proteina 2lbs Star Nutrition",
      imagen:
        "https://stiersuplementos.ar/wp-content/uploads/2023/10/star-tarro-banana.png",
      descripcion:
        "Whey protein star nutrition versión 2lbs (30 servicios) Compuesta por ultra concentrado, aislado e hidrolizado de suero de máxima pureza, obtenidos por métodos no agresivos que garantizan la calidad y estabilidad del producto. Su agradable sabor y alta disolución lo convierten en la opción inteligente a la hora de agregar proteínas de alto valor biológico a nuestra dieta, o como parte de un programa nutricional deportivo. 100% NATURAL GRASS FED PROTEIN Fuente natural de aminoácidos esenciales, aminoácidos de cadena ramificada y Glutamina.Modo de uso: Mezclar 1 medida de Platinum Whey Protein en 200cm3 de agua o leche descremada.      Consumir 1 hora antes del entrenamiento, luego del mismo o simplemente en cualquier momento del día para alcanzar tus necesidades proteicas.",
      precio: 32000,
      categoria: "proteinas",
    },
    {
      id: 8,
      nombre: "Creatina 300gr Star",
      imagen:
        "https://stiersuplementos.ar/wp-content/uploads/2023/10/CREA-STAR-300.png",
      descripcion: "La creatina micronizada es la unión de tres aminoácidos que ofrece mayores ventajas que la creatina normal, mejorando su asimilación. La creatina monohidrato es recomendada durante un plan de entrenamiento para aumentar la fuerza, resistencia y recuperación.",
      precio: 6000,
      categoria: "creatinas",
    },
    {
      id: 9,
      nombre: "Combo Star",
      imagen:
        "https://stiersuplementos.ar/wp-content/uploads/2023/11/WhatsApp-Image-2024-02-28-at-15.43.49.jpeg",
      descripcion:
        "Proteina Star nutrition de 2lbs sabor a elección versión DOYPACK + creatina monohidratada y micronizada Star nutrition 300 gr (60 servicios) 100% pura. Combo precio/calidad premium, compite con gold nutrition en calidad",
      precio: 57000,
      categoria: "combos",
    },
  ];
  
  const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
  };
  
  const obtenerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
  };
  
  const guardarCarritoLS = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
  };
  
  const obtenerCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  };
  
  const obtenerIdProductoLS = () => {
    return JSON.parse(localStorage.getItem("producto")) || 0;
  };
  
  const obtenerIdCategoriaLS = () => {
      return JSON.parse(localStorage.getItem("categoria")) || "todos";
  };
  
  
  const cantTotalProductos = () => {
    const carrito = obtenerCarritoLS();
  
    return carrito.length;
  };
  
  const sumaTotalProductos = () => {
      const carrito = obtenerCarritoLS();
    
      return carrito.reduce((acumulador, item) => acumulador += item.precio, 0);
    };
  const renderTotalCarrito = () => {
    document.getElementById("totalCarrito").innerHTML = cantTotalProductos();
  };

  const eliminarCarrito = () => {
    localStorage.removeItem("carrito");
    renderCarrito();
    renderBotonCarrito();
    notificacion("Carrito Eliminado Correctamente");
  }


  const verProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
  };
  
  const verProductoPorCategoria = (id) => {
      localStorage.setItem("categoria", JSON.stringify(id));
  };
  
  
  const buscarProducto = () => {
      const productos = obtenerProductosLS();
      const id = obtenerIdProductoLS();
      const producto = productos.find((item) => item.id === id);
  
      return producto
  }
  
  
  const agregarProductoCarrito = () => {
      const producto = buscarProducto();
      const carrito = obtenerCarritoLS();
      carrito.push(producto);
      guardarCarritoLS(carrito);
      renderBotonCarrito();
  }

  function eliminarProductoCarrito(id) {
    let carrito = obtenerCarritoLS();

    // Encuentra el índice del primer producto con el ID proporcionado
    const index = carrito.findIndex(producto => producto.id === id);

    // Si se encontró un producto con el ID proporcionado, elimínalo del carrito
    if (index !== -1) {
        carrito.splice(index, 1); // Elimina el producto del carrito
    }

    // Guardar el carrito actualizado en el almacenamiento local
    guardarCarritoLS(carrito);

    // Volver a renderizar el carrito para reflejar los cambios
    renderCarrito();
    renderBotonCarrito();
    notificacion("Eliminado Correctamente");
}
  
  
  const renderBotonCarrito = () =>{
      document.getElementById("totalCarrito").innerHTML = cantTotalProductos();
  }
  
  const finalizarCompra = () => {
    Swal.fire({
        title: "Compra Finalizada!",
        text: "Total a pagar: $" + sumaTotalProductos(),
        imageUrl: "./img/proteinas2.png",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "Salud Integral",
        confirmButtonText: "Aceptar",
      }).then((result) => {
        if (result.isConfirmed) {
          eliminarCarrito();
        }
      })
    
    
  }

  const notificacion = (texto) => {
    Toastify({
        text: texto,
        duration: 2000,
        backgroundColor: "#dc3545" 
    }).showToast();
}
  
  guardarProductosLS(productos);