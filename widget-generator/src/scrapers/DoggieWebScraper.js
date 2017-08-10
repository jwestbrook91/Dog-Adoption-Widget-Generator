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
