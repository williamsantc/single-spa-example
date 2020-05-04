export function appendStyles(shadowElem: ShadowRoot, styles: string) {
    const styleElem = document.createElement('style');
    styleElem.innerHTML = styles;
    shadowElem.appendChild(styleElem);
}
