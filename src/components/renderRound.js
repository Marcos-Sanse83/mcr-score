import { renderRoundForm } from '../components/roundForm.js';
import { gameState } from '../state/gameState.js';

export function renderRound(round) {
    return `
    ${round === 1 ? `<div class="carousel-item active">` : `<div class="carousel-item">`}
          <div class="container py-2">
            <h4 class="text-center">ROUND ${round}</h4>
            <h5 class="text-center">
            ${round < 5 ? `Prevalent wind EAST` : round < 9 ? `Prevalent wind SOUTH` : round < 13 ? `Prevalent wind WEST` : `Prevalent wind NORTH`}
            </h5>
            ${renderRoundForm(gameState.players)}
          </div>
        </div>
       
    `;
}