export function renderPlayerCard(wind, image) {
    return `
    <div class="col-6 col-xl-3">
      <div class="row g-0">
        <div class="col-md-4 d-flex justify-content-center">
          <img src="./public/img/${image}" class="img-fluid player-wind rounded-start" alt="${wind} tile">
        </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="mb-3">
            <input type="text" class="form-control" id="${wind}Name" placeholder="Introduce Player">
          </div>
        </div>
      </div>
      </div>
    </div>
    `;
}