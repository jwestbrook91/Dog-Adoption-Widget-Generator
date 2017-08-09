const { div, h1, h3, img } = require('elementx');

module.exports = function DogWidget(puppers) {
  return div(
    { class: 'card widget' },
    img({ src: puppers. }),
    h1({ class: 'bold' }, recipe.name),
    h3({ id: 'timeCal' }, `Time: ${recipe.timeTaken} - Calories: ${recipe.calories}`),
    ul(recipe.ingredients.map(key => li(key))),
    ul(recipe.steps.map(key => li(key)))
  );
};
