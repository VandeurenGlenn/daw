import RenderMixin from './../../node_modules/custom-renderer-mixin/src/render-mixin.js';
import CSSMixin from './../../node_modules/backed/src/mixins/css-mixin.js';
import define from './../../node_modules/backed/src/utils/define.js';

class Base extends RenderMixin(CSSMixin(HTMLElement)) {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    if (super.connectedCallback) super.connectedCallback();
  }

  disconnectedCallback() {
    if (super.disconnectedCallback) super.disconnectedCallback();
  }

  get template() {
    return html``;
  }
}
export {define, Base};
