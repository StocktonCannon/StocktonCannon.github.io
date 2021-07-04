const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&appid=ccfcf63c0abf60de78a307ad1174d6c4"


fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
    

    for(i in jsObject.list) {
        var container = document.getElementById('fivedays')

        if (jsObject.list[i].dt_txt.includes('18:00')) {
            let div = document.createElement('div'); 
            let p = document.createElement('p');
            let icon = document.createElement('img')
            let day = document.createElement('h2');

            var src = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png'

            icon.setAttribute('src', src)
            icon.setAttribute('alt', jsObject.list[i].weather[0].description)

            p.textContent = jsObject.list[i].main.temp;
            var date = new Date(jsObject.list[i].dt_txt)
            var dayOfWeek = date.getDay();
            day.textContent = days[dayOfWeek];
            // console.log(date.getDay());


            div.appendChild(day);
            div.appendChild(icon);
            div.appendChild(p);
            container.appendChild(div);
            
        }
    }
    
    
  });