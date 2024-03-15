const productos = [
  {
    id: 1,
    nombre: "Sachet Classic Whey Protein 907g - ONE FIT",
    imagen:
      "https://acdn.mitiendanube.com/stores/002/792/557/products/sachet-classic-whey-protein-one-fit-chocolate-ba2f7a30c3089bf3f417044759147383-1024-1024.webp",
    descripcion:
      "Nuestra Classic Whey Protein fue creada pensando en brindar a los deportistas resultados reales, ya que permite mejorar la recuperación de los músculos y aumentar la concentración de proteínas en el cuerpo, favoreciendo así el aumento de la masa muscular.",
    precio: 25000,
    categoria: "proteinas",
  },
  {
    id: 2,
    nombre: "Creatina Micronizada (200 gr.) (40 sv.) - ONE FIT",
    imagen:
      "https://acdn.mitiendanube.com/stores/002/792/557/products/one-fit-creatina-micronizada_1-c4f904526682d5643616752254196193-1024-1024.webp",
    descripcion:
      "La creatina es uno de los complementos deportivos más conocidos y su principal objetivo es fortalecer el tejido muscular. Es producida de forma natural por el cuerpo y está presente en alimentos como el pescado, la carne, los lácteos y el huevo. Su consumo a través de suplementos puede contribuir a un mayor rendimiento en actividades físicas que requieran intervalos de fuerza cortos e intensos, como el levantamiento de pesas y otros deportes de alto desgaste que requieren una recuperación más rápida.",
    precio: 22000,
    categoria: "creatinas",
  },
  {
    id: 3,
    nombre: "Combo One Fit DOYPACK",
    imagen:
      "https://stiersuplementos.ar/wp-content/uploads/2023/11/WhatsApp-Image-2023-12-18-at-15.00.48.jpeg",
    descripcion: "Proteina One fit de 2lbs sabor a elección EN DOYPACK  + creatina monohidratada y micronizada one fit 200 gr (40 servicios) saborizada, con agregados de aminoácidos. Combo precio/calidad intermedio, lo mejor que vas a conseguir en ese precio",
    precio: 42300,
    categoria: "combos",
  },
  {
    id: 4,
    nombre: "Proteína Whey Pro 2.0 X 1kg - Nutrilab",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_869657-MLA72779066942_112023-O.webp",
    descripcion: "Gracias a su contenido de proteína contribuye a mantener la masa muscular y huesos sanos, así como el crecimiento de la misma.La materia prima utilizada es de altísima calidad, debido al proceso de secado a baja temperatura y la tecnología de la ultra dilatación cruzada, las proteínas conservan su forma natural, de fácil absorción, sin someterla a ningún cambio químico.",
    precio: 18000,
    categoria: "proteinas",
  },
  {
    id: 5,
    nombre: "Creatina Crea Shock X 300gr - Nutrilab",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_874220-MLA72855995369_112023-O.webp",
    descripcion:
      "CREA SHOCK x300gr - NUTRIAB-Aumenta la capacidad de realizar ejercicios de alta intensidad y recuperarse en lapsos cortos, logrando mejores entrenamientos. Sintiendo como incrementa tu rendimiento físico.",
    precio: 16000,
    categoria: "creatinas",
  },
  {
    id: 6,
    nombre: "Combo Nutrilab",
    imagen:
      "https://stiersuplementos.ar/wp-content/uploads/2023/11/NutrilabCombo.jpeg",
    descripcion: "Proteina Nutrilab de 1kg sabor a elección + creatina monohidratada nutrilab 300 gr (30 servicios) saborizada, con agregados de aminoácidos. Combo precio/calidad económico, lo mejor que vas a conseguir en ese precio",
    precio: 30600,
    categoria: "combos",
  },
  {
    id: 7,
    nombre: "Proteina DOYPACK 907kg - Star Nutrition",
    imagen:
      "https://stiersuplementos.ar/wp-content/uploads/2023/10/DOYPACK-CH.png",
    descripcion: "Compuesta por ultra concentrado, aislado e hidrolizado de suero de máxima pureza, obtenidos por métodos no agresivos que garantizan la calidad y estabilidad del producto. Su agradable sabor y alta disolución lo convierten en la opción inteligente a la hora de agregar proteínas de alto valor biológico a nuestra dieta, o como parte de un programa nutricional deportivo. 100% NATURAL GRASS FED PROTEIN Fuente natural de aminoácidos esenciales, aminoácidos de cadena ramificada y Glutamina.",
    precio: 30000,
    categoria: "proteinas",
  },
  {
    id: 8,
    nombre: "Creatina 300gr - Star Nutrition",
    imagen:
      "https://stiersuplementos.ar/wp-content/uploads/2023/10/CREA-STAR-300.png",
    descripcion:
      "La creatina micronizada es la unión de tres aminoácidos que ofrece mayores ventajas que la creatina normal, mejorando su asimilación. La creatina monohidrato es recomendada durante un plan de entrenamiento para aumentar la fuerza, resistencia y recuperación.",
    precio: 32000,
    categoria: "creatinas",
  },
  {
    id: 9,
    nombre: "Combo Star",
    imagen:
      "https://stiersuplementos.ar/wp-content/uploads/2023/11/WhatsApp-Image-2024-02-28-at-15.43.49.jpeg",
    descripcion: "Proteina Star nutrition de 2lbs sabor a elección versión DOYPACK + creatina monohidratada y micronizada Star nutrition 300 gr (60 servicios) 100% pura. Combo precio/calidad premium, compite con gold nutrition en calidad",
    precio: 55800,
    categoria: "combos",
  },
  {
    id: 10,
    nombre: "WHEY PROTEIN 7900 - Gentech",
    imagen:
      "https://www.gentech.com.ar/web/image/product.product/4040/image_1024/%5BGTWPCHM00%5D%20WHEY%20PROTEIN%207900%20%20%28Chocolate%2C%201%20kg.%29?unique=1e8cf7c",
    descripcion:
      "La proteína de suero de leche, también conocida como whey protein, es uno de los suplementos más utilizados cuando el objetivo es aumentar masa muscular o hipertrofiar. ¿La razón? Son una excelente fuente de aminoácidos esenciales (contiene 9) y elevan los aminoácidos plasmáticos. Son una herramienta muy beneficiosa para el deportista que realiza un esfuerzo extenuante y que, para compensar este entrenamiento, debe realizar de 5 a 6 comidas saludables diarias. Por lo general, la forma de tomar esta suplementación depende del deporte que se realice.",
    precio: 22000,
    categoria: "proteinas",
  },
  {
    id: 11,
    nombre: "CREATINA MONOHIDRATO x 250 GRAMOS - Gentech",
    imagen:
      "https://www.gentech.com.ar/web/image/product.product/835/image_1024/%5BGTCPSN250%5D%20CREATINA%20MONOHIDRATO%20x%20250%20GRAMOS%20%20?unique=1e8cf7c",
    descripcion:
      "La Creatina Monohidrato de Gentech destaca como un suplemento deportivo de primera categoría, reconocido por sus notables efectos positivos en el rendimiento deportivo, el crecimiento muscular y la fuerza. Este compuesto, que constituye la mayor parte de las reservas de creatina en el músculo esquelético, desempeña un papel esencial en la síntesis de ATP, la principal fuente de energía celular.Como suplemento deportivo clave de Gentech, la Creatina Monohidrato no solo mejora el rendimiento atlético, sino que también favorece el crecimiento muscular, aumenta la fuerza y facilita la recuperación muscular post-entrenamiento. La incorporación estratégica de este suplemento a la rutina no solo optimiza la disponibilidad de energía a nivel celular, sino que también favorece la síntesis de aminoácidos esenciales, fundamentales para el desarrollo muscular.",
    precio: 30000,
    categoria: "creatinas",
  },
  {
    id: 12,
    nombre: "Proteina 2lbs - Gold Nutrition",
    imagen:
      "https://goldnutrition.com.ar/images/2022/12/07/100_whey_protein_gold_nutrition_proteina_doypack_suplemento_deportivo.png",
    descripcion:
      "100% WHEY PROTEIN es un Blend Premium de proteína concentrada, hidrolizada y aislada con 28gs por servicio y un alto aporte de aminoácidos BCAAs y L-Glutamines. Es un excelente suplemento proteico multifuncional y nutritivo que aporta las bases para la construcción y reparación muscular. BAJA EN CARBOHIDRATOS Y BAJA EN CALORÍAS. La calidad de los ingredientes, la eficacia y el delicioso sabor conseguido en este suplemento, es lo que lo hace el MÁS VENDIDO.",
    precio: 28500,
    categoria: "proteinas",
  },
  {
    id: 13,
    nombre: "100% Monohidrato de Creatina - Gold Nutrition",
    imagen:
      "https://goldnutrition.com.ar/images/2022/03/28/creatina_monohidrato_gold_nutrition_doypack.png",
    descripcion:
      "CREATINE MONOHYDRATE de GOLD NUTRITION contiene la fórmula de creatina más avanzada. Un potente aporte de energía extra para los músculos en deportes anaeróbicos y aeróbicos que precisan periodos de fuerza cortos e intensos. Aproximadamente el 95% de la creatina del cuerpo se encuentra en el músculo esquelético",
    precio: 32000,
    categoria: "creatinas",
  },
  {
    id: 14,
    nombre: "Combo GOLD",
    imagen:
      "https://stiersuplementos.ar/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-27-at-14.26.37.jpeg",
    descripcion:
      "Proteina gold nutrition de 2lbs sabor a elección + creatina Gold 300 gr (60 servicios) sin sabor monohidratada y micronizada. Combo excelente calidad premium muy recomendado por su precio, se recomienda por encima de star al haber quedado en mejor precio",
    precio: 54500,
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

const obtenerIdCatLS = () => {
  return JSON.parse(localStorage.getItem("categoria")) || "todos";
};

const cantTotalProductos = () => {
  const carrito = obtenerCarritoLS();

  return carrito.length;
};

const sumaTotalProductos = () => {
  const carrito = obtenerCarritoLS();

  return carrito.reduce((acumulador, item) => (acumulador += item.precio), 0);
};

const eliminarCarrito = () => {
  localStorage.removeItem("carrito");
  renderCarrito();
  renderBotonCart();
  notificacion("Carrito Eliminado");
};

const verProducto = (id) => {
  localStorage.setItem("producto", JSON.stringify(id));
};

const verProductosPorCat = (id) => {
  console.log(id);
  localStorage.setItem("categoria", JSON.stringify(id));
};

const buscarProducto = () => {
  const productos = obtenerProductosLS();
  const id = obtenerIdProductoLS();
  const producto = productos.find((item) => item.id === id);

  return producto;
};

const agregarProductoAlCart = () => {
  const producto = buscarProducto(); // Producto seleccionado
  const carrito = obtenerCarritoLS(); // []
  carrito.push(producto);
  guardarCarritoLS(carrito);
  renderBotonCart();
  notificacion("Producto agregado");
};

const eliminarProductoDelCart = (id) => {
  const carrito = obtenerCarritoLS();
  const index = carrito.findIndex((item) => item.id === id);

  if (index !== -1) {
    carrito.splice(index, 1);  // Elimina solo la primera instancia del producto
    guardarCarritoLS(carrito);
    renderCarrito();
    renderBotonCart();
    notificacion("Producto Eliminado");
  }
};

const renderBotonCart = () => {
  document.getElementById("totalCarrito").innerHTML = cantTotalProductos();
};

const finalizarCompra = () => {
  Swal.fire({
    title: "Gracias por tu compra",
    html: `<p>El total a pagar es: <b>$${sumaTotalProductos()}</b></p>`,
    imageUrl:
      "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/2021/03/Burger-King-Logo-CMS.png",
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "Burger King",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Aceptar",
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarCarrito();
    };
  });

  
};

const notificacion = (texto) => {
  Swal.fire({
    position: "top-end",
    icon: "info",
    title: texto,
    showConfirmButton: false,
    timer: 2500,
  });
};

guardarProductosLS(productos);