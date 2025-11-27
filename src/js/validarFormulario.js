import { addBook, getBooks } from "./api";
const ImagenDefault =
  "https://www.google.com/imgres?q=imagen%20libro&imgurl=https%3A%2F%2Fimg.freepik.com%2Fpsd-gratis%2Filustracion-dia-libro_23-2151969256.jpg%3Fsemt%3Dais_hybrid%26w%3D740%26q%3D80&imgrefurl=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Flibro-cerrado-dibujo&docid=nXXILDWhZoAHeM&tbnid=_Lbfip-u23Rm5M&vet=12ahUKEwiUjrSY9pGRAxX2APsDHUA4HqEQM3oECCUQAA..i&w=740&h=740&hcb=2&ved=2ahUKEwiUjrSY9pGRAxX2APsDHUA4HqEQM3oECCUQAA";

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
  const imagen = imagenInput.value.trim() == "" ? ImagenDefault : imagenInput.value.trim();
  const descripcion = descripTextarea.value.trim() == "" ? "Sin descripcion" : descripTextarea.value.trim();

  if (titulo && autor && genero && anio) {
    addBook(titulo, autor, genero, anio, favorito, imagen, descripcion);
    errorDiv.innerHTML =
      '<p class="alert alert-success">Libro añadido correctamente</p>';
  } else {
    errorDiv.innerHTML = '<p class="alert alert-danger">Faltan campos</p>';
  }
});
