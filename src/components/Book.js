export function Book(book) {
  // Clases condicionales según favorito
  const cardClass = book.favorito
    ? "card h-100 shadow-sm border border-danger rounded-3 overflow-hidden"
    : "card h-100 shadow-sm border rounded-3 overflow-hidden";

  // Texto del botón según favorito
  const favButtonText = book.favorito
    ? "Eliminar de favoritos"
    : "Añadir a favoritos";

  return `
    <div class="${cardClass}">
      <!-- Imagen -->
      <img src="${book.imagen}" 
           class="card-img-top img-fluid" 
           alt="${book.titulo}"
           style="height:250px;object-fit:cover;">

      <!-- Contenido -->
      <div class="card-body d-flex flex-column">
        <h5 class="card-title fw-bold text-truncate mb-2">${book.titulo}</h5>
        
        <ul class="list-unstyled small mb-3 text-muted">
          <li><i class="bi bi-person-fill me-2"></i>${book.autor}</li>
          <li><i class="bi bi-tags-fill me-2"></i>${book.genero}</li>
          <li><i class="bi bi-calendar-event me-2"></i>${book.anio}</li>
        </ul>

        <p class="card-text flex-grow-1 overflow-hidden text-truncate">
          ${book.descripcion}
        </p>
      </div>

      <!-- Acciones -->
      <div class="card-footer bg-light border-0 d-flex justify-content-between align-items-center">
        <!-- Botón favorito -->
        <button class="btn btn-sm btn-outline-primary favorite-btn" data-id="${book.id}">
          ${
            book.favorito
              ? '<i class="bi bi-heart-fill me-1 text-danger"></i>'
              : '<i class="bi bi-heart me-1 text-danger"></i>'
          }
          ${favButtonText}
        </button>

        <!-- Botón eliminar -->
        <button class="btn btn-sm btn-outline-danger delete-btn" data-id="${book.id}">
          <i class="bi bi-trash me-1"></i>Eliminar
        </button>
      </div>
    </div>
  `;
}