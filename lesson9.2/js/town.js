const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

        if (towns[i].name == "Preston"|| towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs")  {
            let card = document.createElement('div');
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            h2.textContent = towns[i].motto;
            p.textContent = "Year Founded: " + towns[i].yearFounded;
            p2.textContent = "Population: " + towns[i].currentPopulation;
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;


            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(p2);
            card.appendChild(p3);

            let name = towns[i].name;
            let data = 'div.townInfo' + name;
            let selector = data.split(" ").join("")

            
            
            document.querySelector(selector).appendChild(card);


            //document.querySelector('#townInfoFish').appendChild(card);
        }
        

        // let card = document.createElement('section');
        // let h2 = document.createElement('h2');
        // let image = document.createElement('img');
        // let p = document.createElement('p');
        // let p2 = document.createElement('p');

        // h2.textContent = towns[i].name + ' ' + towns[i].lastname;
        // p.textContent = "Date of Birth: " + towns[i].birthdate
        // p2.textContent = "Place of Birth: " + towns[i].birthplace;
        

        // image.setAttribute('src', towns[i].imageurl);

        // image.setAttribute('alt', towns[i].name + ' ' + towns[i].lastname + ' - ' + towns[i].order);



        // card.appendChild(h2);

        // card.appendChild(p);
        // card.appendChild(p2)

        // card.appendChild(image);

        

        // document.querySelector('div.cards').appendChild(card);
    }

  });

