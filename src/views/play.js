import { renderPlayerCard } from '../components/playerCard.js';
import { renderCarrouselSelector } from '../components/carouselSelector.js';
import { renderRound } from '../components/renderRound.js';

export function renderPlay() {
    return `
    <div class="row g-2 justify-content-center">

    ${renderPlayerCard('East', 'east.png')}
    ${renderPlayerCard('South', 'south.png')}
    ${renderPlayerCard('West', 'west.png')}
    ${renderPlayerCard('North', 'north.png')}
    
    </div>

    <div class="d-flex justify-content-center p-1 flex-nowrap">
    <button type="button" class="btn btn-primary m-2">Start game</button>
    <button type="button" class="btn btn-secondary m-2" disabled>Finish game</button>
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