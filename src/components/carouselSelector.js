export function renderCarrouselSelector(round) {
    return `
        <button 
            type="button" 
            class="btn btn-outline-primary btn-sm" 
            data-bs-target="#carouselRounds" 
            data-bs-slide-to="${round-1}" 
            aria-label="Round ${round}">
            ${round}
        </button>
    `;
}