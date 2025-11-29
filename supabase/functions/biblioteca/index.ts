import "jsr:@supabase/functions-js/edge-runtime.d.ts"

Deno.serve((_req) => {
  const libros = [
  {
    "titulo": "Harry Potter y la piedra filosofal",
    "autor": "J.K. Rowling",
    "genero": "Fantasía",
    "anio": 1997,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    "descripcion": "Primer libro de la saga Harry Potter, donde el joven mago descubre su destino en Hogwarts."
  },
  {
    "titulo": "El señor de los anillos: La comunidad del anillo",
    "autor": "J.R.R. Tolkien",
    "genero": "Fantasía épica",
    "anio": 1954,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    "descripcion": "La primera parte de la épica aventura para destruir el Anillo Único."
  },
  {
    "titulo": "Cien años de soledad",
    "autor": "Gabriel García Márquez",
    "genero": "Realismo mágico",
    "anio": 1967,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/9254151-L.jpg",
    "descripcion": "La historia de la familia Buendía en el mítico pueblo de Macondo."
  },
  {
    "titulo": "Orgullo y prejuicio",
    "autor": "Jane Austen",
    "genero": "Romance",
    "anio": 1813,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    "descripcion": "Una novela clásica sobre las relaciones sociales y el amor en la Inglaterra del siglo XIX."
  },
  {
    "titulo": "El diario de Ana Frank",
    "autor": "Ana Frank",
    "genero": "Testimonio histórico",
    "anio": 1947,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    "descripcion": "El conmovedor testimonio de una niña judía escondida durante la ocupación nazi."
  },
  {
    "titulo": "1984",
    "autor": "George Orwell",
    "genero": "Distopía",
    "anio": 1949,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    "descripcion": "Una visión inquietante de un futuro totalitario bajo la vigilancia del Gran Hermano."
  },
  {
    "titulo": "Don Quijote de la Mancha",
    "autor": "Miguel de Cervantes",
    "genero": "Clásico",
    "anio": 1605,
    "favorito": false,
    "imagen": "https://covers.openlibrary.org/b/id/8235110-L.jpg",
    "descripcion": "Las aventuras del caballero Don Quijote y su fiel escudero Sancho Panza."
  },
  {
    "titulo": "El Hobbit",
    "autor": "J.R.R. Tolkien",
    "genero": "Fantasía",
    "anio": 1937,
    "favorito": true,
    "imagen": "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    "descripcion": "La historia de Bilbo Bolsón y su inesperado viaje con un grupo de enanos."
  }
];

  return new Response(JSON.stringify(libros), {
    headers: { "Content-Type": "application/json" },
  });
});
