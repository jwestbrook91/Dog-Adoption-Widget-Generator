

const DogWidget = require('./components/DogWidget');

const DoggieWebScraper = require('./scrapers/DoggieWebScraper')




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
