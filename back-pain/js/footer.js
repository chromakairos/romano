class Footer extends HTMLElement {
    constructor() {
    super();
    }

    connectedCallback() {
        this.innerHTML = '<input type="checkbox" id="menu-toggle"><div id="slide-menu" class=""><div class="menu-header"><label for="menu-toggle" class="close-button"><i class="fas fa-times"></i></label></div><div class="menu-content"><nav class=""><a id="home" href="/back-pain/index.html"><img id="menu-logo" src="/back-pain/assets/title-en_450px.png"></a><p id="menu-author"><a href="/back-pain/chapters/author-bio.html">By Michele Romano</a></p><ol class="toc"><li class="f1"><a href="/back-pain/chapters/preface.html">Preface</a></li><li class="f2"><a href="/back-pain/chapters/authors-note.html">Author\'s Note</a></li><li class="f3"><a href="/back-pain/chapters/1-choice-of-partner.html">Choosing a Partner</a></li><li class="f1"><a href="/back-pain/chapters/2-choice-of-place.html">Picking the Place</a></li><li class="f2"><a href="/back-pain/chapters/3-contraception.html">Contraception</a></li><li class="f3"><a href="/back-pain/chapters/4-technique.html">Notes on Technique</a></li><li class="f1"><a href="/back-pain/chapters/5-classics.html">A Few Classics</a></li><li class="f2"><a href="/back-pain/chapters/6-roleplaying.html">Roleplaying Games</a></li><li class="f3"><a href="/back-pain/chapters/7-some-advice.html">Some Advice to Top It All Off</a></li><li class="f1"><a href="/back-pain/chapters/glossary.html">Essential Glossary</a></li></ol></nav></div></div><label for="menu-toggle" class="menu-overlay"></label><footer class="fixed-bottom-nav"><a href="#" class="nav-item" id="prev"><img class="nav-icon" src="/back-pain/assets/arrow-left-white.webp"/></a><label for="menu-toggle" class="menu-button-container nav-item"><i class="fas fa-bars nav-icon"></i></label><a href="#" class="nav-item" id="next"><img class="nav-icon" src="/back-pain/assets/arrow-right-white.webp"/></a></footer>'; 
        
        
    }
}

customElements.define('footer-block', Footer);
export default Footer;
