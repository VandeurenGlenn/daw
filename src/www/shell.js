import { Base, define, loadModule } from './base.js';

export default define(class DawShell extends Base {

  set library(value) {
    this.shadowRoot.querySelector('file-browser').lib = value[0];
    this.shadowRoot.querySelector('file-browser').userLib = value[1];
  }

  get library() {
    return [
      this.shadowRoot.querySelector('file-browser').lib,
      this.shadowRoot.querySelector('file-browser').userLib
    ];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    (async () => {
      await loadModule('file-browser.js');
      this.library = await library();
    })()
  }

  get template() {
    return html`
<style>
  :host {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>

<file-browser></file-browser>
    `;
  }

})
