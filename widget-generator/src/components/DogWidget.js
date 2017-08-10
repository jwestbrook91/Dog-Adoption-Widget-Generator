const { div, h1, h5, img, i, button, nav, form, lavel, span, input, p } = require('elementx');
// const DoggieWebScraper = require('./scrapers/DoggieWebScraper')

module.exports = function DogWidget(puppers) {
  return div(puppers.name, img({ src: puppers.img }));
};
// function widgetConstructor(widgetDoc) {
//
//   const $widgets = document.querySelector
// }
