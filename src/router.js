import { Home } from "./views/Home";
import { NotFound } from "./views/NotFound";
import { MyBooks } from "./views/MyBooks";
import { Favorites } from "./views/Favorites";
import { AddBook } from "./views/AddBook";

export function router() {
  const view = document.getElementById("view");
  const route = location.hash.slice(1).toLowerCase() || "/";
  const routes = {
    "/": Home,
    "/mybooks": MyBooks,
    "/favorites": Favorites,
    "/addbook": AddBook,
  };
  const screen = routes[route] || NotFound;
  view.innerHTML = screen();
}
