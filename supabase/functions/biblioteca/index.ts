import "jsr:@supabase/functions-js/edge-runtime.d.ts"

  let libros = [
  {
    "id": 1,
    "titulo": "Harry Potter y la piedra filosofal",
    "autor": "J.K. Rowling",
    "genero": "Fantasía",
    "anio": 1997,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    "descripcion": "Primer libro de la saga Harry Potter, donde el joven mago descubre su destino en Hogwarts."
  },
  {
    "id": 2,
    "titulo": "El señor de los anillos: La comunidad del anillo",
    "autor": "J.R.R. Tolkien",
    "genero": "Fantasía épica",
    "anio": 1954,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    "descripcion": "La primera parte de la épica aventura para destruir el Anillo Único."
  },
  {
    "id": 3,
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "genero": "Realismo mágico",
    "anio": 1967,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/9254151-L.jpg",
    "descripcion": "La historia de la familia Buendía en el mítico pueblo de Macondo."
  },
  {
    "id": 4,
    "titulo": "Orgullo y prejuicio",
    "autor": "Jane Austen",
    "genero": "Romance",
    "anio": 1813,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    "descripcion": "Una novela clásica sobre las relaciones sociales y el amor en la Inglaterra del siglo XIX."
  },
  {
    "id": 5,
    "titulo": "El diario de Ana Frank",
    "autor": "Ana Frank",
    "genero": "Testimonio histórico",
    "anio": 1947,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    "descripcion": "El conmovedor testimonio de una niña judía escondida durante la ocupación nazi."
  },
  {
    "id": 6,
    "titulo": "1984",
    "autor": "George Orwell",
    "genero": "Distopía",
    "anio": 1949,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    "descripcion": "Una visión inquietante de un futuro totalitario bajo la vigilancia del Gran Hermano."
  },
  {
    "id": 7,
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "genero": "Clásico",
    "anio": 1605,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/8235110-L.jpg",
    "descripcion": "Las aventuras del caballero Don Quijote y su fiel escudero Sancho Panza."
  },
  {
    "id": 8,
    "titulo": "El Hobbit",
    "autor": "J.R.R. Tolkien",
    "genero": "Fantasía",
    "anio": 1937,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    "descripcion": "La historia de Bilbo Bolsón y su inesperado viaje con un grupo de enanos."
  },
  {
    "id": 9,
    "titulo": "La sombra del viento",
    "autor": "Carlos Ruiz Zafón",
    "genero": "Misterio",
    "anio": 2001,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/8231857-L.jpg",
    "descripcion": "Un joven descubre un libro maldito que cambiará su vida en la Barcelona de posguerra."
  },
  {
    "id": 10,
    "titulo": "Los juegos del hambre",
    "autor": "Suzanne Collins",
    "genero": "Distopía",
    "anio": 2008,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/8231858-L.jpg",
    "descripcion": "Katniss Everdeen lucha por sobrevivir en un cruel espectáculo televisado."
  },
  {
    "id": 11,
    "titulo": "Crimen y castigo",
    "autor": "Fiódor Dostoyevski",
    "genero": "Clásico",
    "anio": 1866,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/8231859-L.jpg",
    "descripcion": "La historia de Raskólnikov, un joven que comete un asesinato y enfrenta su conciencia."
  },
  {
    "id": 12,
    "titulo": "La Odisea",
    "autor": "Homero",
    "genero": "Épica",
    "anio": -800,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/8231860-L.jpg",
    "descripcion": "El viaje de Ulises para regresar a Ítaca tras la guerra de Troya."
  },
  {
    "id": 13,
    "titulo": "Matar a un ruiseñor",
    "autor": "Harper Lee",
    "genero": "Drama",
    "anio": 1960,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/8231861-L.jpg",
    "descripcion": "Una niña narra la lucha contra el racismo en un pueblo del sur de Estados Unidos."
  },
  {
    "id": 14,
    "titulo": "La metamorfosis",
    "autor": "Franz Kafka",
    "genero": "Existencialismo",
    "anio": 1915,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/8231862-L.jpg",
    "descripcion": "Gregor Samsa despierta convertido en un insecto, enfrentando el rechazo de su familia."
  },
  {
    "id": 15,
    "titulo": "El Principito",
    "autor": "Antoine de Saint-Exupéry",
    "genero": "Fábula",
    "anio": 1943,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/8231863-L.jpg",
    "descripcion": "Un niño viajero reflexiona sobre la amistad, el amor y la vida."
  },
  {
    "id": 16,
    "titulo": "La divina comedia",
    "autor": "Dante Alighieri",
    "genero": "Épica",
    "anio": 1320,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/8231864-L.jpg",
    "descripcion": "El viaje de Dante por el Infierno, el Purgatorio y el Paraíso."
  },
  {
    "id": 17,
    "titulo": "Rayuela",
    "autor": "Julio Cortázar",
    "genero": "Experimental",
    "anio": 1963,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/8231865-L.jpg",
    "descripcion": "Una novela que rompe las reglas narrativas tradicionales y propone múltiples lecturas."
  },
  {
    "id": 18,
    "titulo": "It",
    "autor": "Stephen King",
    "genero": "Terror",
    "anio": 1986,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/8231866-L.jpg",
    "descripcion": "Un grupo de niños enfrenta a una entidad maligna que adopta la forma de un payaso."
  },
  {
    "id": 19,
    "titulo": "El nombre de la rosa",
    "autor": "Umberto Eco",
    "genero": "Misterio histórico",
    "anio": 1980,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/8231867-L.jpg",
    "descripcion": "Un monje franciscano investiga una serie de muertes en una abadía medieval."
  },
  {
    "id": 20,
    "titulo": "Las mil y una noches",
    "autor": "Anónimo",
    "genero": "Cuentos",
    "anio": 900,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/10531965-L.jpg",
    "descripcion": "Colección clásica de relatos enmarcados narrados por Sherezade, donde cada noche cuenta una historia para aplazar su destino."
  }
];

Deno.serve(async (req) => {
  const url = new URL(req.url);

  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }

  // POST → insertar libro (no persistente, solo en memoria)
  if (req.method === "POST") {
    const nuevoLibro = await req.json();
    nuevoLibro.id = libros.length + 1;
    libros.push(nuevoLibro);

    return new Response(JSON.stringify(nuevoLibro), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      status: 201
    });
  }

  const pathParts = url.pathname.split("/");
  const lastSegment = pathParts[pathParts.length - 1];

  let result = libros;

  // Filtrado por ID en la ruta (/biblioteca/1)
  if (!isNaN(Number(lastSegment))) {
    const id = Number(lastSegment);
    result = libros.filter((libro) => libro.id === id);
  }

  // Query params
  const autor = url.searchParams.get("autor");
  const genero = url.searchParams.get("genero");
  const favorito = url.searchParams.get("favorito");
  const limit = Number(url.searchParams.get("limit")) || result.length;
  const offset = Number(url.searchParams.get("offset")) || 0;
  const sortBy = url.searchParams.get("sortBy");
  const order = url.searchParams.get("order") || "asc";

  if (autor) {
    result = result.filter((libro) => libro.autor.toLowerCase().includes(autor.toLowerCase()));
  }
  if (genero) {
    result = result.filter((libro) => libro.genero.toLowerCase().includes(genero.toLowerCase()));
  }
  if (favorito) {
    result = result.filter((libro) => String(libro.favorito) === favorito);
  }

  // Ordenación
  if (sortBy && result.length > 0 && sortBy in result[0]) {
    result = result.sort((a, b) => {
      if (typeof a[sortBy] === "string") {
        return order === "asc"
          ? a[sortBy].localeCompare(b[sortBy])
          : b[sortBy].localeCompare(a[sortBy]);
      }
      return order === "asc" ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy];
    });
  }

  // Paginación
  result = result.slice(offset, offset + limit);

  return new Response(JSON.stringify(result), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
  });
});