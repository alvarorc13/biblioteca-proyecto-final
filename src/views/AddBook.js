export function AddBook() {
  return `
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
      </br>
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="mb-4 text-center">Añadir un Libro</h2>
            <form class="row g-3 needs-validation" id="form-new-book">
              
              <!-- Título -->
              <div class="col-12">
                <label for="titulo" class="form-label">Título</label>
                <input type="text" class="form-control" id="titulo" name="titulo">
                <div class="invalid-feedback">Por favor, introduce el título.</div>
              </div>

              <!-- Autor -->
              <div class="col-12">
                <label for="autor" class="form-label">Autor</label>
                <input type="text" class="form-control" id="autor" name="autor">
                <div class="invalid-feedback">Por favor, introduce el autor.</div>
              </div>

              <!-- Género -->
              <div class="col-md-6">
                <label for="genero" class="form-label">Género</label>
                <select class="form-select" id="genero" name="genero">
                  <option value="" selected disabled>Selecciona...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <div class="invalid-feedback">Por favor, selecciona un género.</div>
              </div>

              <!-- Año -->
              <div class="col-md-6">
                <label for="anio" class="form-label">Año</label>
                <input type="number" class="form-control" id="anio" name="anio">
                <div class="invalid-feedback">Por favor, introduce el año.</div>
              </div>

              <!-- Favorito -->
              <div class="col-12">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="favorito" name="favorito">
                  <label class="form-check-label" for="favorito">Marcar como favorito</label>
                </div>
              </div>

              <!-- Imagen -->
              <div class="col-12">
                <label for="imagen" class="form-label">URL de la Imagen</label>
                <input type="text" class="form-control" id="imagen" name="imagen">
                <div class="invalid-feedback">Introduce una URL válida para la imagen.</div>
              </div>

              <!-- Descripción -->
              <div class="col-12">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea class="form-control" id="descripcion" name="descripcion" rows="3"></textarea>
                <div class="invalid-feedback">Por favor, introduce una descripción.</div>
              </div>

              <!-- Botón -->
              <div class="col-12 text-center">
                <button class="btn btn-primary" type="submit">Guardar Libro</button>
              </div>
              <div id="error"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script type="module" src="/src/js/validarFormulario.js"></script>
`;
}
