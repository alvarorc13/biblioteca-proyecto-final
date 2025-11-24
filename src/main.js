import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { router } from "./router";
import { Navbar } from "./components/Navbar";
import "./styles/style.css";
document.querySelector("#app").innerHTML = `
${Navbar()}
<main id="view"></main>
`;
router();
window.addEventListener("hashchange", router);