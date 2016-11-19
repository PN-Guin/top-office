import svgLoader from '../services/svgloader.service.js';

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
    .btn {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: var(--header-btn-padding);
    }

    .btn:hover {
      cursor: pointer;
    }

    .btn-inner {
      display: flex;
      height: 100%;
      align-items: center;
    }

    .btn-icon {
      width: 35px;
      display: flex;
      height: 100%;
      align-items: center;
    }

    .btn-icon svg {
      fill: var(--header-inactive-icon-bg);
      width: 70%;
    }

    .btn-underline {
      height: var(--header-active-underline-height);
    }

    .btn--active {
      background-color: var(--logicals-color);
    }

    @media screen and (max-width: 570px) {
      .btn {
        background-color: var(--header-bg);
        height: var(--header-mobile-button-height);
      }

      .btn-underline {
        display: none;
      }
    }

    </style>
    <div class="btn">
      <div class="btn-inner">
        <div class="btn-icon"></div>
        <div class="btn-label">{{label}}</div>
      </div>
      <div class="btn-underline"></div>
    </div>

    `;
  }

  static components() {
    return {
      svgLoader
    };
  }

  createdCallback() {
    this.svgLoader.load('app/assets/icons/' + this.svgLoader.icon).then((data) => {
      this.$('.btn-icon').append(this.$(data));
    });
  }
}
