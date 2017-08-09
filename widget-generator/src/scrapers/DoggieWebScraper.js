

class DoggieWebScraper {
  constructor(url) {
    this.url = url;
  }

    scrape(url) {
    return fetch(url).then(response => {
      return response.text().then(text => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(text, 'text/html');
        let img = doc.getElementsByClassName('slides')[0].children[0].children[0].src.trim();
        let name = doc.getElementsByTagName('h1')[0].innerText.trim();
        let breed = doc.querySelector('.field-name-field-possible-primary-breed').children[1].innerText.trim();
        let age = doc.querySelector('.field-name-field-animal-age').children[1].innerText.trim();
        let gender = doc.querySelector('.field-name-field-gender').children[1].innerText.trim();
        let weight = doc.querySelector('.field-name-field-animal-weight').children[1].innerText.trim();
        let id = doc.querySelector('.field-name-field-animal-id').children[1].innerText.trim();
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
        return puppers;
      });
    });
  }
}

module.exports = DoggieWebScraper;
