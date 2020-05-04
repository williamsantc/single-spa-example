import singleSpaHtml from 'single-spa-html';
import {NavBar} from "./navbar.component";

customElements.define('ceiba-navbar', NavBar);

const htmlLifecycles = singleSpaHtml({
    template: '<ceiba-navbar></ceiba-navbar>',
})
export const { bootstrap, mount, unmount } = htmlLifecycles;
