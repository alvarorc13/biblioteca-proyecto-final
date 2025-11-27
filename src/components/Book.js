export function Book(book) {
  return `
    <div class="card mb-3 shadow-sm">
      <div class="row g-0">
        <!-- Imagen -->
        <div class="col-md-4">
          <img src="${book.imagen}" class="img-fluid rounded-start" alt="${book.titulo}">
        </div>

        <!-- Contenido -->
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${book.titulo}</h5>
            <p class="card-text"><strong>Autor:</strong> ${book.autor}</p>
            <p class="card-text"><strong>Género:</strong> ${book.genero}</p>
            <p class="card-text"><strong>Año:</strong> ${book.año}</p>
            <p class="card-text">${book.descripcion}</p>
            
            <!-- Favorito -->
            <p class="card-text">
              ${book.favorito 
                ? '<span class="badge bg-success">Favorito</span>' 
                : '<span class="badge bg-secondary">No favorito</span>'}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}
