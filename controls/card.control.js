export default class {
  static parameters() {
    return {
      label: { type: 'string' }
    };
  }

  static styleUrls() {
     return [
       'top-office/style.css'
     ];
   }

  static template() {
    return `
    <style>
    :host {
      --card-label-wrapper-height: 30px;
      --card-label-wrapper-background: rgba(32, 43, 61, 0.63);
      --card-label-wrapper-font-size: 1.1em;
    }

    .card {
      width: 240px;
      height:500px;
      /*min-height: 500px;
      max-height: 800px;*/
      margin: 10px;
      background-color: rgba(32, 43, 61, 0.63);
      border: 1px solid #FFFFFF;
      padding: 15px;
      display: flex;
      justify-content: space-around;
      flex-direction: row;
    }

    .label-wrapper {
      height: var(--card-label-wrapper-height);
      background-color: var(--card-label-wrapper-background);
      line-height: var(--card-label-wrapper-height);
      width: 100%;
      text-align: center;
      font-size: var(--card-label-wrapper-font-size);
    }
    </style>
    <div class="card layout vertical center">
      <!--<div class="label-wrapper">{{label}}</div>-->
      <slot id="control" name="default">empty</slot>
      <!--slot id="switch-image" name="switch-image"></slot-->
    </div>

    `;
  }

  createdCallback() {
  }
}
