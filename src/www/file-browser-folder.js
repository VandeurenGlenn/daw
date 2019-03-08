import { Base, define } from './base.js';

export default define(class FileBrowserFolder extends Base {
  static get observedAttributes() {
    return ['name', 'path']
  }

  set name(value) {
    if (value) this.setAttribute('name', value);
    else this.removeAttribute('name')
    this.render({ name: this.name })
  }

  get name() {
    return this.getAttribute('name');
  }

  set path(value) {
    if (value) this.setAttribute('path', value);
    else this.removeAttribute('path')
  }

  get path() {
    return this.getAttribute('path');
  }

  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.name = this.getAttribute('name');
    this.path = this.getAttribute('path');
    this.addEventListener('click', this._onClick);
  }

  attributeChangeCallback(name, oldValue, newValue) {
    console.log(name);
    if (oldValue !== newValue) this[name] = newValue;
  }

  async _onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    // this
    if (this.path) {
      const result = await readdir(this.path);
      console.log(result);
    }

    if (this.hasAttribute('toggled')) this.removeAttribute('toggled');
    else this.setAttribute('toggled', '');
  }

  get template() {
    return html`
<style>
  :host {
    display: flex;
    flex-direction: column;
    height: 48px;
    width: 100%;
    pointer-events: auto;
  }
  .dropdown {
    opacity: 0;
    height: 0px;
    pointer-events: none;
  }
  :host([toggled]) .dropdown {
    pointer-events: none;
    opacity: 1;
    height: auto;
  }

  :host([toggled]) {
    height: auto;
  }

  .name {
    height: 48px;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
</style>
<span class="name">${'name'}</span>
<span class="dropdown">
  <slot></slot>
</span>
    `;
  }
})
