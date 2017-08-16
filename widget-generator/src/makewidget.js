const { div, main, form, button, input, nav } = require('elementx');

function makeContainer() {
  return div({ class: 'container row' });
}

function makeNav() {
  return nav(
    div(
      { class: 'nav-wrapper blue darken-4 ' },
      div({ class: 'brand-logo venter' }, 'Dogs for Adoption!')
    )
  );
}

function findMyDog() {
  return main({ class: 'container' }, [
    div(
      { class: 'innerdiv' },
      form([
        div(
          { class: 'col s12 m6' },
          div(
            { class: 'input-field' },
            input({
              type: 'url',
              placeholder: 'Enter Local Url',
              id: 'userInput',
              dog-name: 'search'
            })
          )
        )
      ]),
      div({ id: 'dogs', class: 'row' })
    )
  ]);
}
function browse() {
  return main({ class: 'container' }, [
    div(
      { class: 'pup' },
      form([
        div(
          { class: 'col s12 m6' },
          div(
            { class: 'input-field' },
            input({
              type: 'url',
              placeholder: 'Enter Pupper URL',
              id: 'input',
              name: 'dogName'
            })
          )
        ),
        div(
          { class: 'col s3 m6' },
          button(
            {
              class: 'btn-large red',
              type: 'submit',
              name: 'action'
            },
            'Search'
          )
        )
      ]),
      div({ id: 'listings', class: 'row' })
    )
  ]);
}

module.exports = {
  makeNav,
  makeContainer,
  ,
  createContainer
};
