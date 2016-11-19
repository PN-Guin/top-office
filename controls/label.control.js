export default class {
  static parameters() {
    return {
      label: { type: 'text' }
    };
  }

  static styleUrls() {
     return [
       'top-office/style.css'
     ];
   }

   static template() {
      return `
        <div class="label">{{label}}</div>
      `;
    }

  createdCallback() {
  }
}
