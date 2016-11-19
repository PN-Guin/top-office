export default class {
  static parameters() {
    return {
      base: { type: 'text' }
    };
  }

  static template() {
    return `
      <style>
      .label {
        padding: 0 0 5px 0;
        border-bottom: var(--label-border-bottom);
      }
      </style>
      <div class="label">{{label}}</div>
    `;
  }

  createdCallback() {
  }
}
