/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

const DogWidget = __webpack_require__(/*! ./components/DogWidget */ 1);

const DoggieWebScraper = __webpack_require__(/*! ./scrapers/DoggieWebScraper */ 7);

addEventListener('DOMContentLoaded', main);

const submission = document.getElementById('submit-btn');
const input = document.getElementById('textarea1');
const scraper = new DoggieWebScraper();

function main() {
  submission.addEventListener('click', () => {
    event.preventDefault();
    console.log('this is input --->', input.value);

    scraper.scrape(input.value).then(data => {
      let $root = document.getElementById('root');
      $root.appendChild(DogWidget(data));
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


/***/ }),
/* 1 */
/*!*************************************!*\
  !*** ./src/components/DogWidget.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function DogWidget(puppers) {
  const { div, img, a, i, h3, h5, span, p } = __webpack_require__(/*! elementx */ 2);
  const node = div(
    { class: 'container', alignItems: 'center' },
    div(
      { class: 'row' },
      div(
        { class: 'col s6 m6' },
        div(
          { class: 'card' },
          div(
            // 5 div
            { class: 'card-image background' },
            img(
              //  img
              { src: puppers.img }
            )
          ), // end of div 5
          div(
            { class: 'card-content' },
            span(
              { class: 'card-content' },
              h3({ class: 'center red text-darken1' }, 'Dog Name: ', puppers.name),
              p({ class: 'breed' }, 'Breed: ', puppers.breed),
              p({ class: 'weight' }, 'Weight: ', puppers.weight),
              p({ class: 'age' }, 'Age: ', puppers.age),
              p({ class: 'gender' }, 'Gender: ', puppers.gender),
              p({ class: 'id' }, 'Dog ID :', puppers.id),
              p({ class: 'location' }, 'Shelter Location: ', puppers.location),
              p({ class: 'description' }, 'Description: ', puppers.description)
            ) // end of span
          ) // end of 6 div
        ) // end of 4 div
      ) // end of 3 div
    ) // end of 2 div
  ); // end of 1 div
  return node;
};


/***/ }),
/* 2 */
/*!***************************************!*\
  !*** ./node_modules/elementx/dist.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var htmlTags = __webpack_require__(/*! html-tag-names */ 3)
var document = __webpack_require__(/*! global-undom */ 4)
var svgTags = __webpack_require__(/*! svg-tag-names */ 6)

var namespaces = {
  ev: 'http://www.w3.org/2001/xml-events',
  xlink: 'http://www.w3.org/1999/xlink',
  xml: 'http://www.w3.org/XML/1998/namespace',
  xmlns: 'http://www.w3.org/2000/xmlns/'
}

var booleanAttrs = [
  'defaultchecked',
  'formnovalidate',
  'indeterminate',
  'willvalidate',
  'autofocus',
  'checked',
  'disabled',
  'readonly',
  'required',
  'selected'
]

var isEventHandler = function (key) { return key.slice(0, 2) === 'on'; }

var normalizeEventName = function (event) { return 'on' + event.slice(2, event.length).toLowerCase(); }

var isPlainObject = function (obj) { return typeof obj === 'object' && obj.constructor === Object; }

var contains = function (val, obj) { return obj.indexOf(val) !== -1; }

var getSvgAttributeNamespace = function (attr) {
  var prefix = attr.split(':', 1)[0]
  return namespaces.hasOwnProperty(prefix)
    ? namespaces[prefix]
    : null
}

var createElementTag = function (tagName) {
  return contains(tagName, svgTags)
    ? document.createElementNS('http://www.w3.org/2000/svg', tagName)
    : document.createElement(tagName)
}

var setAttribute = function (element, key, value) {
  return contains(':', key)
    ? element.setAttributeNS(getSvgAttributeNamespace(key), key, value)
    : element.setAttribute(key, value)
}

var createElement = function (tagName) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

  var attrs
  var children = []
  args.forEach(function (arg) {
    if (!arg) {
      return
    } else if (!attrs && isPlainObject(arg)) {
      attrs = arg
    } else if (Array.isArray(arg)) {
      children.push.apply(children, arg)
    } else {
      children.push(arg)
    }
  })

  var element = createElementTag(tagName)

  for (var key in attrs) {
    var value = attrs[key]

    if (isEventHandler(key)) {
      element[normalizeEventName(key)] = value
    } else if (contains(key, booleanAttrs)) {
      value !== false && element.setAttribute(key, key)
    } else {
      setAttribute(element, key, value)
    }
  }

  if (children && children.length > 0) {
    children.forEach(function (child) {
      element.appendChild(
         typeof child === 'string'
          ? document.createTextNode(child)
          : child
      )
    })
  }

  return element
}

var createTagFactory = function (tag) {
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    return createElement.apply(void 0, [ tag ].concat( args ));
  }
}

module.exports = createElement

svgTags.concat(htmlTags).forEach(function (tag) {
  module.exports[tag] = createTagFactory(tag)
})



/***/ }),
/* 3 */
/*!************************************************!*\
  !*** ./node_modules/html-tag-names/index.json ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = ["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"]

/***/ }),
/* 4 */
/*!********************************************!*\
  !*** ./node_modules/global-undom/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


if (typeof document !== 'undefined') {
  module.exports = document
} else {
  var undom = __webpack_require__(/*! undom */ 5)
  module.exports = undom()
}


/***/ }),
/* 5 */
/*!***********************!*\
  !*** undom (ignored) ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 6 */
/*!***********************************************!*\
  !*** ./node_modules/svg-tag-names/index.json ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = ["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"]

/***/ }),
/* 7 */
/*!******************************************!*\
  !*** ./src/scrapers/DoggieWebScraper.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

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
      let description = doc.querySelector('.body p').innerText.trim();
      console.log('this is description', description);

      const puppers = {
        img,
        name,
        id,
        age,
        gender,
        breed,
        weight,
        location,
        description
      };
      console.log(puppers);
      return puppers;
    });
  }
}

module.exports = DoggieWebScraper;


/***/ })
/******/ ]);