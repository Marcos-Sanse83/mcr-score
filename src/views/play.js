import { renderPlayerCard } from '../components/playerCard.js';
import { renderCarrouselSelector } from '../components/carouselSelector.js';
import { renderRound } from '../components/renderRound.js';
import { gameState } from '../state/gameState.js';

export function renderPlay() {
    return `
    <div class="row g-2 justify-content-center">

    ${renderPlayerCard('East', 'east.png', gameState.players[0] || '')}
    ${renderPlayerCard('South', 'south.png', gameState.players[1] || '')}
    ${renderPlayerCard('West', 'west.png', gameState.players[2] || '')}
    ${renderPlayerCard('North', 'north.png', gameState.players[3] || '')}
    
    </div>

    <div class="d-flex justify-content-center p-1 flex-nowrap">
    <button type="button" class="btn btn-primary m-2" id="startGame" ${gameState.gameStarted ? 'disabled' : ''} >Start game</button>
    <button type="button" class="btn btn-secondary m-2" id="endGame" ${!gameState.gameStarted ? 'disabled' : ''}>Finish game</button>
    </div>
    
    <hr class="border-primary">

    <div id="carouselRounds" class="carousel slide">

      <div class="d-flex justify-content-center gap-2 flex-wrap">

        ${Array.from({ length: 16 }, (_, i) => renderCarrouselSelector(i + 1)).join('')}
        
      </div>

      <div class="carousel-inner">

       ${Array.from({ length: 16 }, (_, i) => renderRound(i + 1)).join('')}

      </div>
    </div>

    `;
}