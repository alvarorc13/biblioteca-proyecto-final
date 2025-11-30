import { Home } from "./views/Home";
import { NotFound } from "./views/NotFound";
import { MyBooks } from "./views/MyBooks";
import { AddBook } from "./views/AddBook";
import { validarFormulario } from "./js/validarFormulario";
import { MyFavoritesBooks } from "./views/MyFavoritesBooks";
import { deleteBook } from "./js/api";

export async function router() {
  const view = document.getElementById("view");
  const route = location.hash.slice(1).toLowerCase() || "/";
  const routes = {
    "/": Home,
    "/mybooks": MyBooks,
    "/myfavoritesbooks": MyFavoritesBooks,
    "/addbook": AddBook,
  };
  const screen = routes[route] || NotFound;

  const html = await screen();
  view.innerHTML = html;

  if (route === "/addbook") {
    validarFormulario();
  }

  if (route === "/mybooks") {
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", async () => {
        const id = btn.dataset.id;
        if (confirm("¿Seguro que quieres eliminar este libro?")) {
          await deleteBook(id);
          await router();
        }
      });
    });
  }
}
