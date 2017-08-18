/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    /*! no static exports found */
    /*! all exports used */
    /***/ function(module, exports, __webpack_require__) {
      const DogWidget = __webpack_require__(/*! ./components/DogWidget */ 7);

      const DoggieWebScraper = __webpack_require__(/*! ./scrapers/DoggieWebScraper */ 1);

      addEventListener('DOMContentLoaded', main);

      const submission = document.getElementById('submit-btn');
      const input = document.getElementById('textarea1');
      const scraper = new DoggieWebScraper();

      function main() {
        submission.addEventListener('click', () => {
          event.preventDefault();
          console.log('this is input --->', input.value);

          scraper.scrape(input.value).then(data => {
            DogWidget(data);
          });
        });
      }

      /*
tag(attributes, children)
tag(children)
1. children := some text (.innerText)
2. children := a single HTMLElement
3. children := an Array of HTMLElements


*/

      // function widgetGenerator(arg) {
      //   const node = div(
      //     { class: 'container' },
      //     div({ class: 'card horizontal' }, [div({ class: 'card-image-center' }, img({ src: arg.url })), div({ class: 'card-content' }, 'THIS IS THE CONTENT')])
      //   );
      //   document.bodyappendChild(node);
      // }
      // const node = div(
      //   {class: 'container'},
      //   div(
      //     {class: 'card horizontal'},
      //     div(
      //       {class: 'card-image-center'}
      //     )
      //     img(
      //       {src: `${url}`}
      //     )
      //   )
      // )
      /*
  <div class="container">
    <div class="card horizontal">
      <div class="card-image-center">
        <img src={arg.url}>
      </div>
      <div class="card-content">
      </div>
    </div>
  </div>

  */
      // const node = div(
      //   { class: 'container' },
      //   div({ class: 'card horizontal' }, [div({ class: 'card-image-center' }, img({ src: arg.url })), div({ class: 'card-content' }, 'THIS IS THE CONTENT')])
      // );
      // document.body.appendChild(node);
      // const $root = document.querySelector('#root');
      // const $app = null; // <== Your dynamically generated DOM element goes here
      // $root.appendChild($app);
      //
      // // somewhere in your code (most likely when you hand the form submit), do this

      /***/
    },
    /* 1 */
    /*!******************************************!*\
  !*** ./src/scrapers/DoggieWebScraper.js ***!
  \******************************************/
    /*! no static exports found */
    /*! all exports used */
    /***/ function(module, exports) {
      class DoggieWebScraper {
        constructor(url) {
          this.url = url;
        }

        scrape(url) {
          return fetch(url).then(response => response.text()).then(text => {
            let parser = new DOMParser();
            let doc = parser.parseFromString(text, 'text/html');
            let img = doc.getElementsByClassName('slides')[0].children[0].children[0].src.trim();
            let name = doc.querySelector('h1').innerText;
            // console.log(doc.querySelector('.field-name-field-possible-primary-breed .field-item'));
            let breed = doc.querySelector('.field-name-field-possible-primary-breed .field-item').innerText.trim();
            let age = doc.querySelector('.field-name-field-animal-age .field-item').innerText.trim();
            let gender = doc.querySelector('.field-name-field-gender .field-item').innerText.trim();
            console.log('this is my gender ---->', gender);
            let weight = doc.querySelector('.field-name-field-animal-weight .field-item').innerText.trim();
            console.log('this is my weight ----->', weight);
            let id = doc.querySelector('.field-name-field-animal-id .field-item').innerText.trim();
            let location = doc.querySelector('.field-name-field-animal-site').innerText.trim();

            const puppers = {
              img,
              name,
              id,
              age,
              gender,
              breed,
              weight,
              location
            };
            console.log(puppers);
            return puppers;
          });
        }
      }

      module.exports = DoggieWebScraper;

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    /* 2 */ /* 3 */ /* 4 */ /* 5 */ /* 6 */ /* 7 */
    /*!*************************************!*\
  !*** ./src/components/DogWidget.js ***!
  \*************************************/
    /*! no static exports found */
    /*! all exports used */
    /***/ function(module, exports) {
      // const { div, h1, h5, img, i, button, nav, form, lavel, span, input } = require('elementx');
      // const DoggieWebScraper = require('./scrapers/DoggieWebScraper')
      //
      // module.exports = function DogWidget(puppers) {
      //
      //
      // function widgetConstructor(widgetDoc) {
      //
      //   const $widgets = document.querySelector
      // }
      /***/
    }
    /******/
  ]
);
