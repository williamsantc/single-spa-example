import styles from "./navbar.component.scss";
import { appendStyles } from "./utils/append-styles.util";

export class NavBar extends HTMLElement {

    public connectedCallback() {
        let shadow = null;
        if(this.attachShadow) {
            shadow = this.attachShadow({mode: 'closed'});
        } else {
            shadow = this;
        }
        appendStyles(shadow, styles);
        const ul = document.createElement('ul');
        const liTech = document.createElement('li');
        const liProduction = document.createElement('li');
        const liDesign = document.createElement('li');
        liTech.innerText = 'Tecnica';
        liTech.className = 'link';
        liProduction.innerText = 'Producción';
        liProduction.className = 'link';
        liDesign.innerText = 'Diseño';
        liDesign.className = 'link';
        liTech.addEventListener('click', () => {
            NavBar.navegar('/tecnica');
        });
        liProduction.addEventListener('click', () => {
            NavBar.navegar('/produccion');
        });
        liDesign.addEventListener('click', () => {
            NavBar.navegar('/design');
        });
        ul.appendChild(liTech);
        ul.appendChild(liProduction);
        ul.appendChild(liDesign);
        ul.className = 'ul-container';
        const divContainer = document.createElement('div');
        divContainer.className = "navbar-container";
        divContainer.appendChild(ul);
        shadow.appendChild(divContainer);
    }

    private static navegar(ruta) {
        history.pushState(null, null, ruta);
    }
}
