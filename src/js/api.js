const URLBiblioteca =
  "https://slihpnhhoqwbmfmidgyu.supabase.co/functions/v1/biblioteca";

const getBooks = async () => {
  try {
    const response = await fetch(URLBiblioteca);
    const books = await response.json();
    return books;
  } catch (err) {
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
  } catch (err) {
    console.error("Error en la petición HTTP:", err.message);
  }
};

const deleteBook = async (id) => {
  try {
    const response = await fetch(`${URLBiblioteca}?id=${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error al eliminar: ${response.status}`);
    }

    return true;
  } catch (err) {
    console.error("Error en la petición DELETE:", err.message);
    return false;
  }
}

const toggleFavorite = async (id, nuevoEstado) => {
  try {
    const response = await fetch(`${URLBiblioteca}?id=${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorito: nuevoEstado }),
    });
    const updated = await response.json();
    return updated;
  } catch (err) {
    console.error("Error en la petición HTTP:", err.message);
  }
};

export { getBooks, getFavoriteBooks, addBook, deleteBook, toggleFavorite };
