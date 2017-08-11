module.exports = function DogWidget(puppers) {
  const { div, img, a, i, h3, h5, span, p } = require('elementx');
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
