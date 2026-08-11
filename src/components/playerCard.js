export function renderPlayerCard(wind, image) {
    return `
    <div class="col-6 col-xl-3">
      <div class="row g-0 align-items-center">
        <div class="col-4 d-flex justify-content-center">
          <img src="./public/img/${image}" class="img-fluid player-wind rounded-start" alt="${wind} tile">
        </div>
      <div class="col-8">
            <input type="text" class="form-control" id="${wind}Name" placeholder="Player">
      </div>
      </div>
    </div>
    `;
}