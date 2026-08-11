export function renderRound(round) {
    return `
    ${round === 1 ? `<div class="carousel-item active">` : `<div class="carousel-item">`}
          <div class="container py-4">
            <h3 class="text-center">ROUND ${round}</h3>
            <h5 class="text-center">
            ${round < 5 ? `EAST` : round < 9 ? `SOUTH` : round < 13 ? `WEST` : `NORTH`}
            </h5>
          </div>
        </div>
    `;
}