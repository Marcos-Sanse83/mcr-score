export function renderRules() {
    return `
        <div class="container my-4">
  <div class="bg-white p-4 p-md-5 rounded-3 shadow-sm">
    
    <h1 class="text-center text-primary mb-3">Guía de Manos y Puntuación en Mahjong (MCR)</h1>
    
    <div class="alert alert-info border-start border-4 border-info mb-4" role="alert">
      <strong>Regla de Oro (MCR):</strong> Para poder declarar victoria (<em>Hu</em>), una mano debe sumar un mínimo de <strong>8 puntos</strong> combinando sus diferentes elementos (<em>fans</em>).
    </div>

    <!-- TIER S: 88 Y 64 PUNTOS -->
    <section class="mb-5">
      <div class="d-flex align-items-center gap-2 border-bottom pb-2 mb-3">
        <span class="badge bg-warning text-dark fs-6">MÁXIMA CATEGORÍA</span>
        <h2 class="h4 m-0 text-secondary">Manos de Leyenda (88 y 64 Puntos)</h2>
      </div>
      
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle">
          <thead class="table-dark">
            <tr>
              <th scope="col" style="width: 10%;">Puntos</th>
              <th scope="col" style="width: 30%;">Nombre de la Mano</th>
              <th scope="col" style="width: 60%;">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="fw-bold text-danger">88</span></td>
              <td class="fw-semibold">Grandes Cuatro Vientos</td>
              <td>Un Pung o Kang de cada uno de los 4 Vientos (Este, Sur, Oeste, Norte) + 1 par.</td>
            </tr>
            <tr>
              <td><span class="fw-bold text-danger">88</span></td>
              <td class="fw-semibold">Grandes Tres Dragones</td>
              <td>Un Pung o Kang de cada uno de los 3 Dragones (Rojo, Verde, Blanco).</td>
            </tr>
            <tr>
              <td><span class="fw-bold text-danger">88</span></td>
              <td class="fw-semibold">Trece Huérfanos (13 Arcanos)</td>
              <td>Un azulejo de cada Terminal (1 y 9 de cada palo) y Vientos/Dragones, más 1 duplicado.</td>
            </tr>
            <tr>
              <td><span class="fw-bold text-danger">88</span></td>
              <td class="fw-semibold">Nueve Puertas</td>
              <td>Mismo palo oculto: 1-1-1-2-3-4-5-6-7-8-9-9-9 más cualquier azulejo del mismo palo.</td>
            </tr>
            <tr>
              <td><span class="fw-bold text-danger">88</span></td>
              <td class="fw-semibold">Cuatro Kangs</td>
              <td>Mano formada por 4 Kangs (cuatros) y 1 par.</td>
            </tr>
            <tr>
              <td><span class="fw-bold text-warning">64</span></td>
              <td class="fw-semibold">Pequeños Cuatro Vientos</td>
              <td>3 Pungs/Kangs de Vientos + 1 par de Viento restante.</td>
            </tr>
            <tr>
              <td><span class="fw-bold text-warning">64</span></td>
              <td class="fw-semibold">Pequeños Tres Dragones</td>
              <td>2 Pungs/Kangs de Dragones + 1 par del Dragón restante.</td>
            </tr>
            <tr>
              <td><span class="fw-bold text-warning">64</span></td>
              <td class="fw-semibold">Todo Honores</td>
              <td>Mano compuesta exclusivamente por fichas de Vientos y Dragones.</td>
            </tr>
            <tr>
              <td><span class="fw-bold text-warning">64</span></td>
              <td class="fw-semibold">Cuatro Pungs Ocultos</td>
              <td>4 Pungs robados directamente del muro (sin reclamar descartes) + 1 par.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- TIER A: 48 Y 32 PUNTOS -->
    <section class="mb-5">
      <div class="d-flex align-items-center gap-2 border-bottom pb-2 mb-3">
        <span class="badge bg-purple text-white fs-6" style="background-color: #6f42c1;">ALTA PUNTUACIÓN</span>
        <h2 class="h4 m-0 text-secondary">Manos Complejas (48 y 32 Puntos)</h2>
      </div>
      
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle">
          <thead class="table-secondary">
            <tr>
              <th scope="col" style="width: 10%;">Puntos</th>
              <th scope="col" style="width: 30%;">Nombre de la Mano</th>
              <th scope="col" style="width: 60%;">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="fw-bold">48</span></td>
              <td class="fw-semibold">Cuadrilla Pura</td>
              <td>4 Chows idénticos en el mismo palo (ej. cuatro secuencias 2-3-4 de Bambú).</td>
            </tr>
            <tr>
              <td><span class="fw-bold">48</span></td>
              <td class="fw-semibold">Cuatro Pasos Progresivos</td>
              <td>4 Chows en el mismo palo que avanzan de 1 en 1 o de 2 en 2 (ej. 123, 234, 345, 456).</td>
            </tr>
            <tr>
              <td><span class="fw-bold">32</span></td>
              <td class="fw-semibold">Tres Kangs</td>
              <td>Mano que contiene 3 Kangs.</td>
            </tr>
            <tr>
              <td><span class="fw-bold">32</span></td>
              <td class="fw-semibold">Cuatro Chows Gemelos</td>
              <td>Dos pares de Chows idénticos dentro del mismo palo.</td>
            </tr>
            <tr>
              <td><span class="fw-bold">32</span></td>
              <td class="fw-semibold">Todos Terminales y Honores</td>
              <td>Mano formada únicamente por 1s, 9s, Vientos y Dragones.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- TIER B: 24 Y 16 PUNTOS -->
    <section class="mb-5">
      <div class="d-flex align-items-center gap-2 border-bottom pb-2 mb-3">
        <span class="badge bg-primary fs-6">PUNTUACIÓN MEDIA-ALTA</span>
        <h2 class="h4 m-0 text-secondary">Manos Estratégicas (24 y 16 Puntos)</h2>
      </div>
      
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle">
          <thead class="table-secondary">
            <tr>
              <th scope="col" style="width: 10%;">Puntos</th>
              <th scope="col" style="width: 30%;">Nombre de la Mano</th>
              <th scope="col" style="width: 60%;">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="fw-bold">24</span></td>
              <td class="fw-semibold">Siete Parejas</td>
              <td>Mano formada por 7 pares de azulejos (no requiere tríos ni secuencias).</td>
            </tr>
            <tr>
              <td><span class="fw-bold">24</span></td>
              <td class="fw-semibold">Color Puro (Full Flush)</td>
              <td>Mano compuesta exclusivamente por azulejos de un solo palo (Caracteres, Bambúes o Círculos).</td>
            </tr>
            <tr>
              <td><span class="fw-bold">24</span></td>
              <td class="fw-semibold">Gran Escalera Pura</td>
              <td>3 Chows que cubren del 1 al 9 en el mismo palo (123, 456, 789).</td>
            </tr>
            <tr>
              <td><span class="fw-bold">16</span></td>
              <td class="fw-semibold">Todo Pungs</td>
              <td>Mano formada por 4 Pungs/Kangs y 1 par (sin Chows).</td>
            </tr>
            <tr>
              <td><span class="fw-bold">16</span></td>
              <td class="fw-semibold">Tres Chows Similares</td>
              <td>Mismo Chow repetido en los tres palos diferentes.</td>
            </tr>
            <tr>
              <td><span class="fw-bold">16</span></td>
              <td class="fw-semibold">Escalera Cruzada</td>
              <td>Tres Chows consecutivos repartidos de forma equilibrada entre los tres palos.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- TIER C: 12 A 1 PUNTO -->
    <section class="mb-3">
      <div class="d-flex align-items-center gap-2 border-bottom pb-2 mb-3">
        <span class="badge bg-success fs-6">BASE Y COMPLEMENTOS</span>
        <h2 class="h4 m-0 text-secondary">Combinaciones Menores (12 a 1 Punto)</h2>
      </div>
      
      <div class="table-responsive">
        <table class="table table-striped table-hover align-middle">
          <thead class="table-secondary">
            <tr>
              <th scope="col" style="width: 10%;">Puntos</th>
              <th scope="col" style="width: 30%;">Nombre de la Mano / Elemento</th>
              <th scope="col" style="width: 60%;">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span class="fw-bold">12</span></td>
              <td class="fw-semibold">Menor Escalera Pura</td>
              <td>Tres Chows del mismo palo que avanzan de 1 en 1 o de 2 en 2.</td>
            </tr>
            <tr>
              <td><span class="fw-bold">8</span></td>
              <td class="fw-semibold">Color Mezclado (Half Flush)</td>
              <td>Mano formada por un solo palo combinado con Vientos y/o Dragones.</td>
            </tr>
            <tr>
              <td><span class="fw-bold">8</span></td>
              <td class="fw-semibold">Sin Honores (All Simples)</td>
              <td>Mano compuesta sin 1s, 9s, Vientos ni Dragones (solo fichas del 2 al 8).</td>
            </tr>
            <tr>
              <td><span class="fw-bold">6</span></td>
              <td class="fw-semibold">Todos Chows</td>
              <td>Mano compuesta por 4 Chows y un par que no sean honores.</td>
            </tr>
            <tr>
              <td><span class="fw-bold">4 / 2 / 1</span></td>
              <td class="fw-semibold">Esperas, Pungs y Flores</td>
              <td>Puntos acumulativos por tipo de espera (ej. espera única), Pung de Dragón (2 pts), Flores/Estaciones (1 pt c/u), etc.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>
</div>

    `;
}