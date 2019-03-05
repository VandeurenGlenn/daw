import {Base, define} from './base.js';

export default define(class DawShell extends Base {
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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
    `;
  }
})
