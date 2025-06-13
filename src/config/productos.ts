const categorias = [
  "top",
  "remera",
  "buzo",
  "polera",
  "pocillo",
  "taza",
  "plato",
  "portavasos",
  "oferta",
  "otro",
] as const;
type Categoria = (typeof categorias)[number];
type ProductosIndumentarios = Categoria &
  ("top" | "remera" | "buzo" | "polera");
type ProductosCeramicos = Categoria &
  ("pocillo" | "taza" | "plato" | "portavasos");
function presetarCategoria(categoria: Categoria) {
  switch (categoria) {
    case "top": return "Top"
    case "remera": return "Remeras"
    case "buzo": return "Buzos"
    case "polera": return "Poleras"
    case "pocillo": return "Pocillos"
    case "taza": return "Tazas"
    case "plato": return "Platos"
    case "portavasos": return "Portavasos"
    case "oferta": return "Ofertas"
    case "otro": return "Otros"
  }
}
export { categorias, presetarCategoria };
export { type Categoria}

function talleStandard(categoria: Categoria) {
  return (
    {
      top: ["S"],
      remera: ["S", "M", "L", "A orden"],
      buzo: ["S", "M", "L", "A orden"],
      polera: ["S", "M", "L", "A orden"],
      pocillo: null,
      taza: null,
      plato: null,
      portavasos: null,
      oferta: null,
      otro: null,
    }[categoria] ?? []
  );
}

function precioStandard(categoria: Categoria) {
  return (
    {
      top: "$15mil",
      remera: "$18mil",
      buzo: null,
      polera: null,
      pocillo: null,
      taza: "$20mil",
      plato: "$20mil",
      portavasos: "$5mil",
      oferta: null,
      otro: null,
    }[categoria] ?? "0"
  );
}

type Producto = {
  id: string;
  nombre: string;
  categorias: Categoria[];
  precio?: string;
  talles?: string[];
  imagenes: string[];
};

const productos: Producto[] = [
  // indumentaria: [
  {
    id: "top-escarabajo",
    nombre: "Escarabajo top",
    categorias: ["top"],
    talles: talleStandard("top"),
    precio: precioStandard("top"),
    imagenes: [
      "/imagenes/productos/top-escarabajo/insecto-rojo-0.jpg",
      "/imagenes/productos/top-escarabajo/insecto-rojo-1.jpg",
    ],
  },
  {
    id: "top-libelula",
    nombre: "Libelula",
    categorias: ["top"],
    talles: talleStandard("top"),
    precio: precioStandard("top"),
    imagenes: [
      "/imagenes/productos/top-libelula/libelula-0.jpg",
      "/imagenes/productos/top-libelula/libelula-1.jpg",
    ],
  },
  {
    id: "top-mariposa",
    nombre: "Mariposa top",
    categorias: ["top"],
    talles: talleStandard("top"),
    precio: precioStandard("top"),
    imagenes: [
      "/imagenes/productos/top-mariposa/mariposa-0.jpg",
      "/imagenes/productos/top-mariposa/mariposa-1.jpg",
    ],
  },
  {
    id: "top-medusa",
    nombre: "Medusa top",
    categorias: ["top"],
    talles: talleStandard("top"),
    precio: precioStandard("top"),
    imagenes: [
      "/imagenes/productos/top-medusa/medusa-top-0.jpg",
      "/imagenes/productos/top-medusa/medusa-top-1.jpg",
    ],
  },
  {
    id: "top-pulpo",
    nombre: "Pulpo",
    categorias: ["top"],
    talles: talleStandard("top"),
    precio: precioStandard("top"),
    imagenes: ["/imagenes/productos/top-pulpo/pulpo-0.jpg"],
  },
  {
    id: "remera-insectos",
    nombre: "Insectos",
    categorias: ["remera"],
    talles: talleStandard("remera"),
    precio: precioStandard("remera"),
    imagenes: [
      "/imagenes/productos/remera-insectos/insectos-0.jpg",
      "/imagenes/productos/remera-insectos/insectos-1.jpg",
      "/imagenes/productos/remera-insectos/insectos-2.jpg",
      "/imagenes/productos/remera-insectos/insectos-3.jpg",
    ],
  },
  {
    id: "remera-pez",
    nombre: "Pez",
    categorias: ["remera"],
    talles: talleStandard("remera"),
    precio: precioStandard("remera"),
    imagenes: [
      "/imagenes/productos/remera-pez/pez-0.jpg",
      "/imagenes/productos/remera-pez/pez-1.jpg",
    ],
  },
  // ],

  // --------------------------------------------------------------------------

  // ceramicas: [
  {
    id: "taza-fairy",
    nombre: "Taza fairy core",
    categorias: ["taza"],
    talles: talleStandard("taza"),
    precio: precioStandard("taza"),
    imagenes: [
      "/imagenes/productos/taza-fairy-core/taza-fairy-core-0.jpg",
      "/imagenes/productos/taza-fairy-core/taza-fairy-core-1.jpg",
      "/imagenes/productos/taza-fairy-core/taza-fairy-core-2.jpg",
    ],
  },
  {
    id: "plato-seimack",
    nombre: "Plato seimack",
    categorias: ["plato"],
    talles: talleStandard("plato"),
    precio: precioStandard("plato"),
    imagenes: ["/imagenes/productos/plato-seimack/plato-seimack-0.jpg"],
  },
  {
    id: "pocillo-catlove",
    nombre: "Pocillo catlove",
    categorias: ["pocillo"],
    talles: talleStandard("pocillo"),
    precio: precioStandard("pocillo"),
    imagenes: [
      "/imagenes/productos/pocillo-catlove/pocillo-catlove-0.jpg",
      "/imagenes/productos/pocillo-catlove/pocillo-catlove-1.jpg",
      "/imagenes/productos/pocillo-catlove/pocillo-catlove-2.jpg",
    ],
  },
  {
    id: "pocillo-libelula",
    nombre: "Pocillo libelula",
    categorias: ["pocillo"],
    talles: talleStandard("pocillo"),
    precio: precioStandard("pocillo"),
    imagenes: [
      "/imagenes/productos/pocillo-libelula/pocillo-libelula-0.jpg",
      "/imagenes/productos/pocillo-libelula/pocillo-libelula-1.jpg",
    ],
  },
  {
    id: "pocillo-arque",
    nombre: "Pocillo arque",
    categorias: ["pocillo"],
    talles: talleStandard("pocillo"),
    precio: precioStandard("pocillo"),
    imagenes: ["/imagenes/productos/pocillo-arque/pocillo-arque-0.jpg"],
  },
  // ],

  // --------------------------------------------------------------------------

  // otros: [
  {
    id: "taza-minion",
    nombre: "Taza minion",
    categorias: ["pocillo", "otro", "oferta"],
    precio: "$7mil",
    imagenes: [
      "/imagenes/productos/taza-minion/taza-minion-0.jpg",
      "/imagenes/productos/taza-minion/taza-minion-1.jpg",
      "/imagenes/productos/taza-minion/taza-minion-2.jpg",
    ],
  },
  {
    id: "taza-mariposa",
    nombre: "Taza mariposa",
    categorias: ["pocillo", "otro", "oferta"],
    precio: "$7mil",
    imagenes: [
      "/imagenes/productos/taza-mariposa/taza-mariposa-0.jpg",
      "/imagenes/productos/taza-mariposa/taza-mariposa-1.jpg",
    ],
  },
  {
    id: "remera-eyes",
    nombre: "Remera eyes",
    categorias: ["remera", "otro", "oferta"],
    precio: "$10mil",
    imagenes: [
      "/imagenes/productos/remera-eyes/remera-eyes-0.jpg",
      "/imagenes/productos/remera-eyes/remera-eyes-1.jpg",
      "/imagenes/productos/remera-eyes/remera-eyes-2.jpg",
    ],
  },
  {
    id: "plato-trepez",
    nombre: "Plato trepez",
    categorias: ["plato", "otro", "oferta"],
    precio: "$7mil",
    imagenes: ["/imagenes/productos/plato-trepez/plato-trepez-0.jpg"],
  },
  {
    id: "portavasos",
    nombre: "Portavasos",
    categorias: ["portavasos"],
    precio: precioStandard("portavasos"),
    imagenes: [
      "/imagenes/productos/portavasos/portavasos-0.jpg",
      "/imagenes/productos/portavasos/portavasos-1.jpg",
    ],
  },
  {
    id: "portavasos-set",
    nombre: "Portavasos set",
    categorias: ["otro"],
    precio: "$30mil",
    imagenes: [
      "/imagenes/productos/portavasos-set/portavasos-set-0.jpg",
      "/imagenes/productos/portavasos-set/portavasos-set-1.jpg",
      "/imagenes/productos/portavasos-set/portavasos-set-2.jpg",
      "/imagenes/productos/portavasos-set/portavasos-set-3.jpg",
    ],
  },
  {
    id: "taza-maceta",
    nombre: "Maceta Pants",
    categorias: ["taza", "oferta", "otro"],
    talles: talleStandard("taza"),
    precio: "$10mil",
    imagenes: [
      "/imagenes/productos/taza-maceta-pants/maceta-pants-0.jpg",
      "/imagenes/productos/taza-maceta-pants/maceta-pants-1.jpg",
      "/imagenes/productos/taza-maceta-pants/maceta-pants-2.jpg",
    ],
  },
  {
    id: "taza-frutilla",
    nombre: "Taza frutilla",
    categorias: ["taza", "oferta", "otro"],
    precio: "$25mil",
    imagenes: [
      "/imagenes/productos/taza-frutilla/taza-frutilla-0.jpg",
      "/imagenes/productos/taza-frutilla/taza-frutilla-1.jpg",
      "/imagenes/productos/taza-frutilla/taza-frutilla-2.jpg",
    ],
  },
];

function productosDeCategoria(...categorias: Categoria[]): Producto[] {
  // return productos.filter((producto) =>
  //   producto.categorias.some(categorias.includes)
  // );
  return productos.filter(producto => 
    producto.categorias.some(categoria => categorias.includes(categoria))
    // categorias.some(categoria => categorias.includes(categoria))
  )
}

export { productos, productosDeCategoria };
export {type Producto}