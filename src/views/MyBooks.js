import { Book } from "../components/Book";
import { getBooks } from "../js/api";

export async function MyBooks() {
  const books = await getBooks();
  return `
    <section class="container my-4">
      <h2 class="mb-4 text-center">Mis Libros</h2>
      <div class="row">
        ${books.map(book => `
          <div class="col-md-6 col-lg-4 mb-4">
            ${Book(book)}
          </div>
        `).join("")}
      </div>  
    </section>
  `;
}
