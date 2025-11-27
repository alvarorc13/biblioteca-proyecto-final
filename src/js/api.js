const URLBiblioteca = "http://localhost:3000/libros";

const getBooks = async () => {
  try {
    const response = await fetch(URLBiblioteca);
    const books = await response.json();
    return books;
  } catch (error) {
    console.error("Error en la petición HTTP:", err.message);
  }
};

const addBook = async (
  titulo,
  autor,
  genero,
  anio,
  favorito,
  imagen,
  descripcion
) => {
  try {
    const response = await fetch(URLBiblioteca, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titulo: titulo,
        autor: autor,
        genero: genero,
        anio: anio,
        favorito: favorito,
        imagen: imagen,
        descripcion: descripcion,
      }),
    });
    const books = await response.json();
    return books;
  } catch (error) {
    console.error("Error en la petición HTTP:", err.message);
  }
};

const getFavoriteBooks = async () => {
  try {
    const response = await fetch(URLBiblioteca + "?favorito=true");
    const favoriteBooks = await response.json();
    return favoriteBooks;
  } catch (error) {
    console.error("Error en la petición HTTP:", err.message);
  }
};

export { addBook, getBooks };
