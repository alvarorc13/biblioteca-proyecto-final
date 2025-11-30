import { addBook, getBooks, getFavoriteBooks } from "./api";

export function validarFormulario() {
  const ImagenDefault = "https://ts2.mm.bing.net/th?id=OIP.EJi96yZeBpqgt4ZbWQRQVwAAAA&pid=15.1";
  
  const tituloInput = document.getElementById("titulo");
  const autorInput = document.getElementById("autor");
  const generoSelect = document.getElementById("genero");
  const anioInput = document.getElementById("anio");
  const favoritoCheckbox = document.getElementById("favorito");
  const imagenInput = document.getElementById("imagen");
  const descripTextarea = document.getElementById("descripcion");
  const errorDiv = document.getElementById("error");
  
  document.getElementById("form-new-book").addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = tituloInput.value.trim();
    const autor = autorInput.value.trim();
    const genero = generoSelect.value.trim();
    const anio = anioInput.value.trim();
    const favorito = favoritoCheckbox.checked;
    const imagen = imagenInput.value.trim() || ImagenDefault;
    const descripcion = descripTextarea.value.trim() || "Sin descripcion";
  
    if (titulo && autor && genero && anio) {
      addBook(titulo, autor, genero, anio, favorito, imagen, descripcion);
      errorDiv.innerHTML =
        '<p class="alert alert-success">Libro añadido correctamente</p>';
    } else {
      errorDiv.innerHTML = '<p class="alert alert-danger">Faltan campos</p>';
    }
  });
}