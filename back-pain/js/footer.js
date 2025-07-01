class Footer extends HTMLElement {
    constructor() {
    super();
    }

    connectedCallback() {
        this.innerHTML = '<input type="checkbox" id="menu-toggle"><div id="slide-menu" class=""><div class="menu-header"><label for="menu-toggle" class="close-button"><i class="fas fa-times"></i></label></div><div class="menu-content"><nav class=""><a id="home" href="/mal-di-schiena/index.html"><img id="menu-logo" src="/mal-di-schiena/assets/title-it_250px.png"></a><p id="menu-author"><a href="/mal-di-schiena/capitoli/biografia.html">Michele Romano</a></p><ol class="toc"><li class="f1"><a href="/mal-di-schiena/capitoli/prefazione.html">Prefazione</a></li><li class="f2"><a href="/mal-di-schiena/capitoli/note-autore.html">Note dell\'autore</a></li><li class="f3"><a href="/mal-di-schiena/capitoli/1-scelta-partner.html">La scelta del partner</a></li><li class="f1"><a href="/mal-di-schiena/capitoli/2-scelta-del-luogo.html">La scelta del luogo</a></li><li class="f2"><a href="/mal-di-schiena/capitoli/3-contraccezione.html">La contraccezione</a></li><li class="f3"><a href="/mal-di-schiena/capitoli/4-tecnica.html">Un po\' di tecnica</a></li><li class="f1"><a href="/mal-di-schiena/capitoli/5-qualche-classico.html">Qualche classico</a></li><li class="f2"><a href="/mal-di-schiena/capitoli/6-giochi-di-ruolo.html">Giochi di ruolo</a></li><li class="f3"><a href="/mal-di-schiena/capitoli/7-qualche-consiglio.html">...e per finire qualche consiglio</a></li><li class="f1"><a href="/mal-di-schiena/capitoli/glossario.html">Glossario essenziale</a></li></ol></nav></div></div><label for="menu-toggle" class="menu-overlay"></label><footer class="fixed-bottom-nav"><a href="#" class="nav-item" id="prev"><img class="nav-icon" src="/mal-di-schiena/assets/arrow-left-white.webp"/></a><label for="menu-toggle" class="menu-button-container nav-item"><i class="fas fa-bars nav-icon"></i></label><a href="#" class="nav-item" id="next"><img class="nav-icon" src="/mal-di-schiena/assets/arrow-right-white.webp"/></a></footer>'; 
        
        
    }
}

customElements.define('footer-block', Footer);
export default Footer;