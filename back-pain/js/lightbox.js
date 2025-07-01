class Lightbox extends HTMLElement {
    constructor() {
    super();
    }

    connectedCallback() {
        this.innerHTML = '<div id="myModal" class="modal"><span class="close cursor" onclick="closeModal()">&times;</span><div class="modal-content"><img id="lightbox-img" src="" style="width:100%"></div></div>';
    }
}

customElements.define('modal-lightbox', Lightbox);
export default Lightbox;