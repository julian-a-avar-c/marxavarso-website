type Categoria =
  | "top"
  | "remera"
  | "buzo"
  | "polera"
  | "pocillo"
  | "taza"
  | "plato"
  | "portavasos"
  | "oferta"
  | "otro";

function talleStandar(categoria: Categoria) {
  return (
    {
      top: ["sm"],
      remera: ["sm", "md", "lg", "custom"],
      buzo: ["sm", "md", "lg", "custom"],
      polera: ["sm", "md", "lg", "custom"],
      pocillo: null,
      taza: null,
      plato: null,
      portavasos: null,
      oferta: null,
      otro: null,
    }[categoria] ?? []
  );
}

function precioStandar(categoria: Categoria) {
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
  nombre: string;
  categorias: Categoria[];
  precio?: string;
  talles?: string[];
  imagenes: string[];
};

const productos: {
  remeras: Producto[];
  ceramica: Producto[];
  otros: Producto[];
} = {
  remeras: [
    {
      nombre: "Escarabajo top",
      categorias: ["top"],
      talles: talleStandar("top"),
      precio: precioStandar("top"),
      imagenes: [
        "/imagenes/productos/top-escarabajo/insecto-rojo-0.jpg",
        "/imagenes/productos/top-escarabajo/insecto-rojo-1.jpg",
      ],
    },
    {
      nombre: "Libelula",
      categorias: ["top"],
      talles: talleStandar("top"),
      precio: precioStandar("top"),
      imagenes: [
        "/imagenes/productos/top-libelula/libelula-0.jpg",
        "/imagenes/productos/top-libelula/libelula-1.jpg",
      ],
    },
    {
      nombre: "Mariposa top",
      categorias: ["top"],
      talles: talleStandar("top"),
      precio: precioStandar("top"),
      imagenes: [
        "/imagenes/productos/top-mariposa/mariposa-0.jpg",
        "/imagenes/productos/top-mariposa/mariposa-1.jpg",
      ],
    },
    {
      nombre: "Medusa top",
      categorias: ["top"],
      talles: talleStandar("top"),
      precio: precioStandar("top"),
      imagenes: [
        "/imagenes/productos/top-medusa/medusa-top-0.jpg",
        "/imagenes/productos/top-medusa/medusa-top-1.jpg",
      ],
    },
    {
      nombre: "Pulpo",
      categorias: ["top"],
      talles: talleStandar("top"),
      precio: precioStandar("top"),
      imagenes: ["/imagenes/productos/top-pulpo/pulpo-0.jpg"],
    },
    {
      nombre: "Insectos",
      categorias: ["remera"],
      talles: talleStandar("remera"),
      precio: precioStandar("remera"),
      imagenes: [
        "/imagenes/productos/remera-insectos/insectos-0.jpg",
        "/imagenes/productos/remera-insectos/insectos-1.jpg",
        "/imagenes/productos/remera-insectos/insectos-2.jpg",
        "/imagenes/productos/remera-insectos/insectos-3.jpg",
      ],
    },
    {
      nombre: "Pez",
      categorias: ["remera"],
      talles: talleStandar("remera"),
      precio: precioStandar("remera"),
      imagenes: [
        "/imagenes/productos/remera-pez/pez-0.jpg",
        "/imagenes/productos/remera-pez/pez-1.jpg",
      ],
    },
  ],

  // --------------------------------------------------------------------------
  
  ceramica: [
    {
      nombre: "Taza fairy core",
      categorias: ["taza"],
      talles: talleStandar("taza"),
      precio: precioStandar("taza"),
      imagenes: [
        "/imagenes/productos/taza-fairy-core/taza-fairy-core-0.jpg",
        "/imagenes/productos/taza-fairy-core/taza-fairy-core-1.jpg",
        "/imagenes/productos/taza-fairy-core/taza-fairy-core-2.jpg",
      ],
    },
    {
      nombre: "Plato seimack",
      categorias: ["plato"],
      talles: talleStandar("plato"),
      precio: precioStandar("plato"),
      imagenes: [
        "/imagenes/productos/plato-seimack/plato-seimack-0.jpg",
      ],
    },
    {
      nombre: "Pocillo catlove",
      categorias: ["pocillo"],
      talles: talleStandar("pocillo"),
      precio: precioStandar("pocillo"),
      imagenes: [
        "/imagenes/productos/pocillo-catlove/pocillo-catlove-0.jpg",
        "/imagenes/productos/pocillo-catlove/pocillo-catlove-1.jpg",
        "/imagenes/productos/pocillo-catlove/pocillo-catlove-2.jpg",
      ],
    },
    {
      nombre: "Pocillo libelula",
      categorias: ["pocillo"],
      talles: talleStandar("pocillo"),
      precio: precioStandar("pocillo"),
      imagenes: [
        "/imagenes/productos/pocillo-libelula/pocillo-libelula-0.jpg",
        "/imagenes/productos/pocillo-libelula/pocillo-libelula-1.jpg",
      ],
    },
    {
      nombre: "Pocillo arque",
      categorias: ["pocillo"],
      talles: talleStandar("pocillo"),
      precio: precioStandar("pocillo"),
      imagenes: ["/imagenes/productos/pocillo-arque/pocillo-arque-0.jpg"],
    },
  ],

  // --------------------------------------------------------------------------
  
  otros: [
    {
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
      nombre: "Taza mariposa",
      categorias: ["pocillo", "otro", "oferta"],
      precio: "$7mil",
      imagenes: [
        "/imagenes/productos/taza-mariposa/taza-mariposa-0.jpg",
        "/imagenes/productos/taza-mariposa/taza-mariposa-1.jpg",
      ],
    },
    {
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
      nombre: "Plato trepez",
      categorias: ["plato", "otro", "oferta"],
      precio: "$7mil",
      imagenes: ["/imagenes/productos/plato-trepez/plato-trepez-0.jpg"],
    },
    {
      nombre: "Portavasos",
      categorias: ["portavasos"],
      precio: precioStandar("portavasos"),
      imagenes: [
        "/imagenes/productos/portavasos/portavasos-0.jpg",
        "/imagenes/productos/portavasos/portavasos-1.jpg",
      ],
    },
    {
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
      nombre: "Maceta Pants",
      categorias: ["taza", "oferta", "otro"],
      talles: talleStandar("taza"),
      precio: "$10mil",
      imagenes: [
        "/imagenes/productos/taza-maceta-pants/maceta-pants-0.jpg",
        "/imagenes/productos/taza-maceta-pants/maceta-pants-1.jpg",
        "/imagenes/productos/taza-maceta-pants/maceta-pants-2.jpg",
      ],
    },
    {
      nombre: "Taza frutilla",
      categorias: ["taza", "oferta", "otro"],
      precio: "$25mil",
      imagenes: [
        "/imagenes/productos/taza-frutilla/taza-frutilla-0.jpg",
        "/imagenes/productos/taza-frutilla/taza-frutilla-1.jpg",
        "/imagenes/productos/taza-frutilla/taza-frutilla-2.jpg",
      ],
    },
  ],
};

export { productos };
