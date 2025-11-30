import { Book } from "../components/Book";
import { getBooks } from "../js/api";

export async function MyBooks() {
  let books = (await getBooks()).sort((l1, l2) => l1.titulo.localeCompare(l2.titulo));

  if (!books.length) {
    return `
      <section class="container my-4">
        <h2 class="mb-4 text-center">Mis Libros</h2>
        <p class="text-center text-muted">Todavía no has añadido ningún libro.</p>
      </section>
    `;
  }

  return `
    <section class="container my-4">
      <h2 class="mb-4 text-center">Mis Libros</h2>
      <div class="row row-cols-1 row-cols-md-5 g-4">
        ${books.map((book) => `<div class="col">${Book(book)}</div>`).join("")}
      </div>
    </section>
  `;
}
