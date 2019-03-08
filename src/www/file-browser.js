import { Base, define } from './base.js';
import './file-browser-folder.js';

export default define(class FileBrowser extends Base {
  get libEl() {
    return this.shadowRoot.querySelector('file-browser-folder[name="library"]');
  }

  get userLibEl() {
    return this.shadowRoot.querySelector('file-browser-folder[name="user library"]');
  }

  set lib(value) {
    console.log(value);
    for (const item of value) {
      if (item[0] !== 'version') {
        const el = document.createElement('file-browser-folder');
        el.setAttribute('name', item[0]);
        el.setAttribute('path', item[1]);
        this.libEl.appendChild(el);
      }
    }
  }

  set userLib(value) {
    for (const item of value) {
      if (item[0] !== 'version') {
        const el = document.createElement('file-browser-folder');
        el.setAttribute('name', item[0]);
        el.setAttribute('path', item[1]);
        this.userLibEl.appendChild(el);
      }
    }
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  get template() {
    return html`
<style>
  :host {
    display: flex;
    flex-direction: column;
    width: 256px;
    height: 100%;
  }
</style>

<file-browser-folder name="library"></file-browser-folder>
<file-browser-folder name="user library"></file-browser-folder>
    `;
  }
})
