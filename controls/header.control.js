import formatDate from '../services/formatdate.service.js';
import svgLoader from '../services/svgloader.service.js';

export default class {
  static parameters() {
    return {
      logoURL: {
        type: 'string'
      }
    }
  }

  static styleUrls() {
     return [
       'top-office/style.css'
     ];
   }

  static template() {
    return `
    <style>
    header {
      width: 100%;
      height: var(--header-height);
      display: flex;
      flex-direction: column;
      background-color: var(--header-bg);
      color: var(--header-top-bar-color);
      position: fixed;
      z-index: 1;
    }

    .top-bar {
      background-color: var(--header-top-bar-bg);
      text-align: center;
      font-size: 0.7em;
      padding: var(--header-top-bar-padding);
    }

    .main-bar {
      align-self: center;
      display: flex;
      height: 100%;
      max-width: var(--header-max-width-desktop);
      overflow: hidden; /* if too many elements are dropped in they will be hidden --> adjust variable: */
    }

    .logo {
      width: 150px;
      background-size: 85%;
      background-repeat: no-repeat;
      background-position: center;
    }

    nav {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }

    .mobile-menu-trigger {
      display: none;
    }

    /* would be cool if this would work var(--header-mobile-max-width) */
    @media screen and (max-width: 570px) {
      .main-bar {
        width: 100%;
        justify-content: space-between;
      }

      nav {
        background-color: var(--header-bg);
        position: absolute;
        top: var(--header-height);
        flex-direction: column;
        width: 100%;
        flex: none;
      }

      #headerButtons::slotted(*) {
        flex-direction: column;
      }

      .mobile-menu-trigger {
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .mobile-menu-trigger svg {
        width: 80%;
        height: 80%;
        fill: var(--header-mobile-menu-trigger-bg);
      }

      .desktop-helper {
        display: none;
      }
    }
    </style>
    <div class="desktop-helper"></div>
    <header>
      <div class="top-bar"></div>
      <div class="main-bar">
        <div class="logo"></div>
        <nav>
          <slot id="headerButtons" name="default">empty</slot>
        </nav>
        <div class="mobile-menu-trigger" on-click="toggleMobileMenu"></div>
      </div>
      <svg id="svg" viewBox="0 0 600 50" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g
         transform="translate(-102.80528,-75.933632)"
         id="layer1">
        <rect
           ry="0.15413167"
           y="75.933632"
           x="102.80528"
           height="50"
           width="594.23505"
           id="rect4411-5"
           style="fill:#393c43;fill-opacity:1;stroke:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <rect
           y="75.933632"
           x="552.99097"
           height="49.972691"
           width="50.350487"
           id="rect4368-8-5-1-5-7-8"
           style="fill:#393c43;fill-opacity:1;stroke:none;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <rect
           y="75.960945"
           x="602.20801"
           height="49.972691"
           width="100.70097"
           id="rect4368-8-5-1-7-4-9-2"
           style="fill:#393c43;fill-opacity:1;stroke:none;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <text
           transform="scale(1.0037729,0.99624128)"
           id="text3847-8-4-8-8-3-2-4-9-8-6"
           y="105.93357"
           x="618.79327"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.30240059px;line-height:0%;font-family:Lato;-inkscape-font-specification:Lato;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none"
           xml:space="preserve"><tspan
             y="105.93357"
             x="618.79327"
             id="tspan3849-7-0-0-6-5-8-1-8-9-6">trend</tspan></text>
        <rect
           y="75.933693"
           x="452.53876"
           height="49.972691"
           width="99.935898"
           id="rect4368-8-5-1-7-4-2"
           style="fill:#393c43;fill-opacity:1;stroke:none;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <text
           transform="scale(0.99995251,1.0000475)"
           id="text3847-8-4-8-8-3-2-4-9-5"
           y="105.53049"
           x="455.92245"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:16.24035645px;line-height:0%;font-family:Lato;-inkscape-font-specification:Lato;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none"
           xml:space="preserve"><tspan
             y="105.53049"
             x="455.92245"
             id="tspan3849-7-0-0-6-5-8-1-8-4">solar heating</tspan></text>
        <rect
           y="75.933693"
           x="252.80528"
           height="49.972691"
           width="50.350479"
           id="rect4368-8-5-1-1"
           style="fill:#4b4c51;fill-opacity:1;stroke:none;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <g
           transform="matrix(1.0070095,0,0,0.9994538,172.75691,24.834652)"
           id="g4338-60">
          <rect
             style="fill:none;fill-rule:evenodd;stroke:#ffffff;stroke-width:1.50223684;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
             id="rect4149-1"
             width="28.509138"
             height="21.677475"
             x="90.236618"
             y="62.608196" />
          <path
             style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.36484012px;stroke-linecap:butt;stroke-linejoin:round;stroke-opacity:1"
             d="m 102.77275,84.895124 -1.27231,4.495128 5.98163,0 -1.32831,-4.528582 z"
             id="path4153-9" />
          <path
             style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.33473203px;stroke-linecap:butt;stroke-linejoin:round;stroke-opacity:0.94117647"
             d="m 100.29213,90.278663 -3.108806,1.54857 14.615876,0 -3.24571,-1.560094 z"
             id="path4153-1-1" />
        </g>
        <rect
           y="75.933693"
           x="302.02246"
           height="49.972691"
           width="100.70096"
           id="rect4368-8-5-1-7-2"
           style="fill:#4b4c51;fill-opacity:1;stroke:none;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <text
           transform="scale(1.0037728,0.99624138)"
           id="text3847-8-4-8-8-3-2-4-5"
           y="105.25548"
           x="300.5824"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:14.66015625px;line-height:0%;font-family:Lato;-inkscape-font-specification:Lato;letter-spacing:0px;word-spacing:0px;fill:#ffffff;fill-opacity:1;stroke:none"
           xml:space="preserve"><tspan
             y="105.25548"
             x="300.5824"
             id="tspan3849-7-0-0-6-5-8-1-2">master control</tspan></text>
        <path
           id="path4538-2"
           d="m 252.55352,123.90742 149.60478,0"
           style="fill:#fcfcfc;fill-opacity:1;fill-rule:evenodd;stroke:#71b0c7;stroke-width:3.99781489;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
        <g
           style="stroke:#ffffff;stroke-opacity:1"
           transform="matrix(0.76947771,0,0,0.76947771,827.36529,-465.09115)"
           id="g6680">
          <g
             style="stroke:#ffffff;stroke-opacity:1"
             transform="matrix(1.1204637,0,0,1.2363788,-1964.59,-239.89114)"
             id="g4868">
            <ellipse
               ry="1.3850055"
               rx="1.5941906"
               cy="786.48944"
               cx="1449.3416"
               id="path4418-9"
               style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:1.27405703;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <ellipse
               ry="1.3850055"
               rx="1.5941906"
               cy="779.50342"
               cx="1459.4612"
               id="path4418-9-1"
               style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:1.27405703;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <ellipse
               ry="1.3850055"
               rx="1.5941906"
               cy="784.00262"
               cx="1469.3529"
               id="path4418-9-4"
               style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:1.27405703;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <ellipse
               ry="1.3850055"
               rx="1.5941906"
               cy="775.26593"
               cx="1479.4371"
               id="path4418-9-0"
               style="fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:1.27405703;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <rect
               y="795.50208"
               x="1448.1644"
               height="7.9734468"
               width="2.0093524"
               id="rect4500"
               style="fill:#000000;fill-opacity:1;stroke:#ffffff;stroke-width:2.45308566;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <rect
               y="788.99109"
               x="1458.4961"
               height="14.218625"
               width="1.5683495"
               id="rect4500-6"
               style="fill:#000000;fill-opacity:1;stroke:#ffffff;stroke-width:2.89408875;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <rect
               y="792.58569"
               x="1468.5012"
               height="10.756574"
               width="1.7804267"
               id="rect4500-7"
               style="fill:#000000;fill-opacity:1;stroke:#ffffff;stroke-width:2.68201137;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <rect
               y="783.55994"
               x="1478.8348"
               height="19.490198"
               width="1.3355916"
               id="rect4500-9"
               style="fill:#000000;fill-opacity:1;stroke:#ffffff;stroke-width:3.12660599;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
            <path
               id="path4534"
               d="m 1449.2129,786.35059 10.282,-6.94621 10.2821,4.57433 9.7212,-8.97925"
               style="fill:none;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.84962118px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
          </g>
        </g>
        <circle
           r="3.5049219"
           cy="96.188789"
           cx="271.00427"
           id="path6722"
           style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <rect
           y="99.189217"
           x="269.56152"
           height="0.74368352"
           width="2.9240899"
           id="rect6724"
           style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <rect
           y="100.77168"
           x="269.87506"
           height="1"
           width="2.2970624"
           id="rect6724-2"
           style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <rect
           y="102.56882"
           x="270.16669"
           height="1"
           width="1.7137811"
           id="rect6724-2-8"
           style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <path
           d="m 282.24575,104.46939 a 0.52646082,0.52646082 0 0 1 -0.52646,0.52646 0.52646082,0.52646082 0 0 1 -0.52646,-0.52646 0.52646082,0.52646082 0 0 1 0.52646,-0.52646 0.52646082,0.52646082 0 0 1 0.52646,0.52646 z m -2.01001,-8.6e-4 6.85751,0 m -2.10518,-2.99649 a 0.52646082,0.52646082 0 0 1 -0.52646,0.52646 0.52646082,0.52646082 0 0 1 -0.52646,-0.52646 0.52646082,0.52646082 0 0 1 0.52646,-0.52646 0.52646082,0.52646082 0 0 1 0.52646,0.52646 z m -4.51804,-8.6e-4 6.85751,0 m -5.29789,-5.466478 3.7227,0 m -3.7227,-1.45155 3.7227,0 m 1.92587,3.34231 a 0.58153075,0.5815308 0 0 1 -0.58153,0.58153 0.58153075,0.5815308 0 0 1 -0.58153,-0.58153 0.58153075,0.5815308 0 0 1 0.58153,-0.58153 0.58153075,0.5815308 0 0 1 0.58153,0.58153 z m -6.61512,0.68124 c -1.16107,-1.13254 -1.52331,-2.85556 -0.91554,-4.35986 0.6069,-1.50429 2.06278,-2.49333 3.68465,-2.5037 1.62274,-0.01 3.09073,0.96137 3.71579,2.45874 0.62592,1.49652 0.28529,3.22387 -0.86195,4.37111"
           style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:1.02534151;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
           id="circle6681-0-4-3" />
        <rect
           y="75.947304"
           x="403.00793"
           height="49.972691"
           width="50.350487"
           id="rect4368-8-5-1-5-7-8-5"
           style="fill:#393c43;fill-opacity:1;stroke:none;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
        <g
           transform="translate(-8.0063141,-334.28032)"
           id="g7139">
          <path
             style="fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#ffffff;stroke-width:0.71093613px;stroke-linecap:butt;stroke-linejoin:round;stroke-opacity:1"
             d="m 421.83226,434.25872 22.99112,0 -3.10478,-11.34293 -16.45671,0 z"
             id="path6811" />
          <rect
             style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect6813"
             width="3.2390792"
             height="1.4068078"
             x="431.64703"
             y="424.70731" />
          <rect
             style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect6813-4"
             width="3.2390792"
             height="1.4068078"
             x="431.74228"
             y="427.58673" />
          <rect
             style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect6813-8"
             width="3.2390792"
             height="1.4068078"
             x="431.86932"
             y="430.63321" />
          <path
             style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m 429.35837,426.11409 0,-1.39889 -2.28641,0 -0.39015,1.42536 z"
             id="path6836" />
          <path
             style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m 429.35231,428.97635 0.017,-1.39889 -3.13573,0 -0.43223,1.42536 z"
             id="path6836-2" />
          <path
             style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m 429.34953,431.96064 10e-6,-1.39889 -4.02347,0 -0.44636,1.42535 z"
             id="path6836-3" />
          <path
             style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m 437.2473,426.12349 0,-1.39889 2.28643,0 0.39013,1.42536 z"
             id="path6836-6" />
          <path
             style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m 437.25336,428.98575 -0.017,-1.3989 3.08811,0 0.47985,1.42536 z"
             id="path6836-2-1" />
          <path
             style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
             d="m 437.25615,431.97002 0,-1.3989 3.88055,0 0.58926,1.42536 z"
             id="path6836-3-1" />
          <rect
             style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect6886"
             width="1.437098"
             height="5.3634539"
             x="432.25"
             y="434.33945" />
          <rect
             style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
             id="rect6888"
             width="10.659143"
             height="2.0275049"
             x="427.55368"
             y="438.98807" />
          <g
             id="g6961"
             transform="matrix(0.7429454,0,0,0.81843448,124.41866,41.591869)">
            <g
               transform="translate(3.1819805,-0.17677669)"
               id="g6941">
              <ellipse
                 style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
                 id="path6907-9"
                 cx="429.48999"
                 cy="495.23935"
                 rx="6.7551274"
                 ry="1.3433689" />
              <g
                 id="g6954">
                <g
                   id="g6948">
                  <rect
                     y="470.2417"
                     x="422.5925"
                     height="15.512156"
                     width="13.435029"
                     id="rect6890"
                     style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
                  <ellipse
                     ry="2.625"
                     rx="6.7551274"
                     cy="470.11215"
                     cx="429.25513"
                     id="path6907"
                     style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
                  <rect
                     y="488.0885"
                     x="422.58469"
                     height="2.4772966"
                     width="13.567611"
                     id="rect6924"
                     style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" />
                  <rect
                     style="opacity:1;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
                     id="rect6924-5"
                     width="13.567611"
                     height="2.4748738"
                     x="422.69516"
                     y="492.86392" />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g
           transform="matrix(0.64262077,0,0,0.64262077,110.63443,-409.08204)"
           id="g4878">
          <g
             transform="translate(-44.781456,-156.98555)"
             id="g4516">
            <path
               id="path4518"
               d="m 135.1327,955.98442 c 0,6.71107 -5.40159,12.11265 -12.11266,12.11265 -6.71106,0 -12.11265,-5.40158 -12.11265,-12.11265 0,-6.71106 5.40159,-12.11265 12.11265,-12.11265 6.71107,0 12.11266,5.48343 12.11266,12.11265 z m -12.11266,7.9387 c 4.50133,0 8.18423,-3.6829 8.18423,-8.18422 0,-4.50133 -3.6829,-8.18423 -8.18423,-8.18423 -4.50132,0 -8.18422,3.6829 -8.18422,8.18423 0,4.50132 3.6829,8.18422 8.18422,8.18422 z"
               class="st14"
               style="fill:#38b1d7" />
            <g
               id="g4520"
               transform="matrix(0.81842248,0,0,0.81842248,-23.354816,651.53126)">
              <path
                 id="path4522"
                 d="m 164,362.3 c 0,0 0,-0.1 0.1,-0.4 0.1,-0.3 0.1,-0.7 0.3,-1.2 0.2,-0.5 0.5,-1.1 0.8,-1.8 0.2,-0.3 0.4,-0.7 0.7,-1 0.3,-0.3 0.5,-0.7 0.9,-1 0.6,-0.7 1.4,-1.4 2.3,-2 0.9,-0.6 1.9,-1.2 3,-1.6 1.1,-0.5 2.3,-0.8 3.5,-1 1.2,-0.2 2.5,-0.3 3.8,-0.3 l 0.5,0 c 0.3,0 0.3,0 0.5,0 l 0.9,0.1 c 0.6,0.1 1.3,0.2 1.9,0.4 1.2,0.3 2.4,0.7 3.4,1.3 1.1,0.5 2,1.2 2.9,1.9 0.8,0.7 1.6,1.4 2.1,2.2 0.6,0.7 1,1.5 1.3,2.2 0.3,0.7 0.5,1.3 0.6,1.8 0.1,0.5 0.2,0.9 0.2,1.2 0,0.3 0,0.4 0,0.4 0,0 -0.1,-0.1 -0.2,-0.4 -0.1,-0.3 -0.3,-0.6 -0.6,-1 -0.3,-0.4 -0.6,-0.9 -1.1,-1.5 -0.2,-0.3 -0.5,-0.5 -0.7,-0.8 -0.3,-0.3 -0.5,-0.6 -0.9,-0.8 -0.6,-0.5 -1.4,-1 -2.2,-1.5 -0.8,-0.5 -1.7,-0.9 -2.7,-1.3 -1,-0.3 -2,-0.7 -3,-0.9 -0.5,-0.1 -1,-0.2 -1.5,-0.3 l -0.9,-0.1 c -0.1,0 -0.4,0 -0.4,0 l -0.4,0 c -1.1,-0.1 -2.2,0 -3.2,0.1 -1.1,0.2 -2.1,0.4 -3.1,0.6 -1,0.3 -1.9,0.6 -2.8,1.1 -0.2,0.1 -0.4,0.2 -0.6,0.3 -0.2,0.1 -0.4,0.2 -0.6,0.3 -0.4,0.2 -0.7,0.5 -1.1,0.7 -0.7,0.5 -1.3,1 -1.8,1.5 -0.5,0.5 -0.9,0.9 -1.2,1.3 -0.3,0.4 -0.6,0.7 -0.7,1 0.1,0.4 0,0.5 0,0.5 z"
                 class="st15"
                 style="fill:#ffffff;fill-opacity:1" />
            </g>
          </g>
          <g
             transform="translate(-44.959358,-156.98555)"
             id="g4524">
            <path
               id="path4526"
               d="m 162.41341,951.72862 c 0,6.71107 -5.40158,12.11266 -12.11265,12.11266 -6.71106,0 -12.11265,-5.40159 -12.11265,-12.11266 0,-6.71106 5.40159,-12.11265 12.11265,-12.11265 6.71107,0 12.11265,5.40159 12.11265,12.11265 z m -12.11265,7.9387 c 4.50132,0 8.18423,-3.6829 8.18423,-8.18422 0,-4.50133 -3.68291,-8.18423 -8.18423,-8.18423 -4.50132,0 -8.18422,3.6829 -8.18422,8.18423 0,4.50132 3.6829,8.18422 8.18422,8.18422 z"
               class="st14"
               style="fill:#38b1d7" />
            <g
               id="g4528"
               transform="matrix(0.81842251,0,0,0.81842251,-23.77771,650.03632)">
              <path
                 id="path4530"
                 d="m 197.8,378.4 c 0,0 0.1,0.1 0.2,0.4 0.2,0.2 0.4,0.6 0.7,1 0.3,0.4 0.7,0.8 1.2,1.3 0.5,0.5 1.1,1 1.8,1.5 0.4,0.2 0.7,0.5 1.1,0.7 0.2,0.1 0.4,0.2 0.6,0.3 0.2,0.1 0.4,0.2 0.6,0.3 0.8,0.4 1.8,0.8 2.8,1.1 1,0.3 2,0.5 3.1,0.6 1.1,0.1 2.1,0.2 3.2,0.1 l 0.4,0 c 0,0 0.3,0 0.4,0 l 0.9,-0.1 c 0.5,-0.1 1,-0.1 1.5,-0.3 1.1,-0.2 2.1,-0.5 3,-0.9 1,-0.4 1.8,-0.8 2.7,-1.3 0.8,-0.5 1.5,-1 2.2,-1.5 0.3,-0.3 0.6,-0.5 0.9,-0.8 0.3,-0.3 0.5,-0.5 0.7,-0.8 0.4,-0.5 0.8,-1 1.1,-1.5 0.3,-0.4 0.5,-0.8 0.6,-1 0.1,-0.2 0.2,-0.4 0.2,-0.4 0,0 0,0.1 0,0.4 0,0.3 -0.1,0.7 -0.2,1.2 -0.1,0.5 -0.3,1.2 -0.6,1.8 -0.3,0.7 -0.7,1.5 -1.3,2.2 -0.6,0.8 -1.3,1.5 -2.1,2.2 -0.9,0.7 -1.8,1.3 -2.9,1.9 -1.1,0.5 -2.2,1 -3.4,1.3 -0.6,0.2 -1.3,0.3 -1.9,0.4 l -0.9,0.1 c -0.2,0 -0.2,0 -0.5,0 l -0.5,0 c -1.3,0.1 -2.5,-0.1 -3.8,-0.3 -1.2,-0.2 -2.4,-0.6 -3.5,-1 -1.1,-0.4 -2.1,-1 -3,-1.6 -0.9,-0.6 -1.7,-1.3 -2.3,-2 -0.3,-0.3 -0.6,-0.7 -0.9,-1 -0.3,-0.3 -0.5,-0.7 -0.7,-1 -0.4,-0.7 -0.7,-1.2 -0.8,-1.8 -0.2,-0.5 -0.3,-0.9 -0.3,-1.2 -0.3,-0.1 -0.3,-0.3 -0.3,-0.3 z"
                 class="st15"
                 style="fill:#ffffff;fill-opacity:1" />
            </g>
          </g>
          <path
             id="path4532"
             d="m 49.742523,786.39679 c 0,0 -1.893849,-0.0947 -3.882389,0.75754 -1.136309,0.47346 -1.988541,1.231 -2.74608,2.17793 -0.757539,0.94692 -1.231001,1.98854 -1.609771,3.31423 -0.37877,1.231 -0.473462,2.65139 -0.473462,4.16647 0,1.51507 0.189385,2.84077 0.473462,4.16646 0.37877,1.3257 0.852232,2.36731 1.609771,3.31424 0.757539,0.94692 1.704463,1.70446 2.74608,2.17792 1.136309,0.56816 2.462003,0.75754 3.977081,0.75754 1.136309,0 2.36731,-0.0947 3.598312,-0.37877 0.284077,-0.0947 0.473462,-0.0947 0.757539,-0.18938 0.946928,-0.28408 1.704466,0.75754 1.231005,1.60977 l 0,0 0,0 c -0.852232,1.60977 -2.462006,2.65139 -4.261162,2.74608 -0.568155,0 -1.041617,0.0947 -1.609771,0.0947 -2.272618,0 -4.166466,-0.37877 -5.87093,-1.13631 -1.609771,-0.75754 -3.030157,-1.79915 -4.166466,-3.03016 -1.136309,-1.32569 -1.893848,-2.84077 -2.462002,-4.54523 -0.568155,-1.70447 -0.852232,-3.59831 -0.852232,-5.58685 0,-1.98854 0.284077,-3.88239 0.852232,-5.58686 0.568154,-1.70446 1.325693,-3.21954 2.462002,-4.54523 1.136309,-1.231 2.556695,-2.27262 4.261159,-3.03016 0.946924,-0.37877 2.083233,-0.75754 3.219542,-0.94692 1.704463,-0.28408 3.314234,0.28407 4.639928,1.231 l 0,0 c 0,0 0.09469,0.0947 0.09469,0.0947 l 0,0 c 0.852232,0.85223 0.284078,2.17793 -0.852231,2.27262 l -1.136309,0.0947 z"
             class="st15"
             style="fill:#ffffff;fill-opacity:1" />
          <path
             id="path4534-9"
             d="m 61.72389,810.82263 0,0 c -2.2,-2.3 -3.4,-5.4 -3.4,-8.5 l 0,-30.6 c 0,-0.7 0.7,-1.1 1.3,-0.9 l 3.1,1.2 c 0.4,0.1 0.6,0.5 0.6,0.9 l 0,37.3 c 0.1,0.8 -1,1.2 -1.6,0.6 z"
             class="st15"
             style="fill:#ffffff;fill-opacity:1" />
          <path
             id="path4536"
             d="m 128.57905,810.41152 -7.9,-21.9 c -0.8,-2.1 0,-4.5 2,-5.7 l 0,0 c 0.5,-0.3 1.2,-0.1 1.4,0.5 l 4.1,13.3 3.3,9.3 0.1,0 3.3,-9.3 4.2,-13.3 c 0.2,-0.6 0.9,-0.9 1.4,-0.5 l 0,0 c 1.6,1 2.3,3 1.7,4.9 l -7,22.5 c -0.1,0.4 -0.5,0.7 -0.9,0.7 l -4.9,0.2 c -0.3,-0.1 -0.6,-0.3 -0.8,-0.7 z"
             class="st15"
             style="fill:#ffffff;fill-opacity:1" />
          <path
             id="path4538"
             d="m 161.75518,807.08592 c 2.21408,0 3.82432,-0.40256 4.73007,-1.20768 0.90576,-0.80512 1.40896,-1.71088 1.40896,-2.81791 0,-0.70448 -0.20128,-1.30832 -0.5032,-1.81152 -0.30192,-0.5032 -0.80512,-1.0064 -1.30832,-1.30832 -0.60383,-0.40256 -1.20767,-0.70448 -2.01279,-1.0064 -0.70448,-0.30192 -1.61024,-0.60384 -2.41536,-0.80512 -1.20768,-0.40256 -2.41536,-0.80512 -3.42176,-1.20768 -1.0064,-0.40256 -1.91216,-1.0064 -2.61664,-1.61024 -0.70448,-0.60384 -1.30832,-1.40896 -1.71088,-2.31472 -0.40256,-0.90576 -0.60384,-1.91216 -0.60384,-3.11984 0,-2.31472 0.90576,-4.12623 2.61664,-5.33391 1.71088,-1.30832 4.22688,-1.91216 7.34672,-1.91216 0.60384,0 1.10704,0 1.71088,0.10064 1.71087,0.10064 3.22047,1.10704 4.02559,2.61664 l 0,0 0,0 c 0.5032,0.80512 -0.20128,1.71087 -1.10704,1.61023 l -0.60384,-0.10063 c 0,0 -2.31471,-0.40256 -3.62303,-0.40256 -2.0128,0 -3.5224,0.30192 -4.42816,1.00639 -0.90576,0.70448 -1.30832,1.5096 -1.30832,2.516 0,1.20768 0.5032,2.11344 1.40896,2.71728 0.90576,0.60384 2.21408,1.20768 3.82432,1.71088 1.5096,0.5032 2.91855,1.0064 4.02559,1.5096 1.20768,0.5032 2.11344,1.20768 2.91856,1.91216 0.80512,0.70448 1.30832,1.5096 1.71088,2.41536 0.40256,0.90576 0.60384,1.91216 0.60384,3.11983 0,2.31472 -0.80512,4.22688 -2.516,5.63584 -1.71088,1.40896 -4.32751,2.11344 -7.95055,2.11344 -1.81152,0 -3.42176,-0.10064 -4.93136,-0.40256 -0.5032,-0.10064 -0.90576,-0.20128 -1.30832,-0.40256 -1.0064,-0.30192 -1.10704,-1.71088 -0.20128,-2.21408 l 0,0 0.30192,-0.20128 c 1.20768,-0.60384 2.516,-0.80512 3.82432,-0.70448 0.70448,-0.10064 1.40896,-0.10064 2.11344,-0.10064 z"
             class="st15"
             style="fill:#ffffff;fill-opacity:1" />
          <g
             transform="translate(-48.247815,-156.98555)"
             id="g4540">
            <path
               style="fill:#ffffff;fill-opacity:1"
               class="st15"
               d="m 197.6445,968.09707 -3.1,0 c -0.5,0 -1,-0.50395 -1,-1.25987 l 0,-18.1423 c 0,-3.1497 1.4,-5.92144 3.7,-7.18132 l 0,0 c 0.6,-0.37796 1.4,0.25197 1.4,1.1339 l 0,24.18972 c 0,0.75592 -0.5,1.25987 -1,1.25987 z"
               id="path4542" />
            <circle
               id="circle4544"
               r="2.7"
               cy="933.44562"
               cx="196.0945"
               class="st15"
               style="fill:#ffffff;fill-opacity:1" />
          </g>
        </g>
      </g>
      </svg>
      </div>
    </header>

    `;
  }

  static components() {
    return {
      formatDate,
      svgLoader
    };
  }

  createdCallback(){
    /*
    START - shoudl not be required
    expected to do: http://jsfiddle.net/n5Lot7a7/2/
    */
    this.$(window).on('resize', ()=> {
      if (this.$('.desktop-helper').is(':visible'))
        this.$('nav').css('display', 'flex');
      else
        this.$('nav').hide();
    });
    this.$(window).trigger('resize');
    /* END */


    setInterval(() => { this.$('.top-bar').text(this.formatDate.getFormattedDate(new Date())); }, 1000);

    this.svgLoader.load('app/assets/icons/' + this.svgLoader.icon).then((data) => {
      this.$('.mobile-menu-trigger').append(this.$(data));
    })
    /*
      binding in css nutzen?
    */
    this.$('.logo').css('background-image', 'url(' + this.logoURL + ')');
  }

  toggleMobileMenu() {
    this.$('nav').slideToggle();
  }
}
