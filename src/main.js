import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/style.scss';
import { renderPlay } from './views/play.js'
import { renderTablePoints } from './views/points.js'
import { renderRounds } from './views/rounds.js'
import { renderRules } from './views/rules.js'


const app = document.querySelector('#app')


function navigate(page) {

    if (page === 'play') {
        app.innerHTML = renderPlay();
    }

    if (page === 'points') {
        app.innerHTML = renderTablePoints();
    }

    if (page === 'rounds') {
        app.innerHTML = renderRounds();
    }

    if (page === 'rules') {
        app.innerHTML = renderRules();
    }

}

const links = document.querySelectorAll('[data-page]');

links.forEach(link => {
    link.addEventListener('click', () => {
        const view = link.dataset.page;
        navigate(view);
    });
});

navigate('play');

