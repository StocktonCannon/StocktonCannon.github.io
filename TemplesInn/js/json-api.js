
var JSON = [
    {
        "name":"Idaho Falls Temple",
        "phone":"208-522-7559",
        "address1":"1000 Memorial Dr.",
        "city":"Idaho Falls",
        "state":"ID",
        "zip":83402,
        "imageurl":"https://assets.ldscdn.org/90/a0/90a0c0d599f94a2d955930e90fa95b9aa85a5004/idaho_falls_idaho_temple.png",
        "presidents":[
            "David Smith","William Killpack","Parley Arave","Cecil Hart","Delbert Groberg","Devere Harris","Rheim Jones","Milton Romrell","C. Gayle Williams","Preston Brimhall","Glen Nelson","Mark Ricks","Newell Richardson","John Groberg","Larry Stoddard","Gerald Mead","Donald Archibald","Doyle Batt"
        ]
    },

    {
        "name":"Rexburg Idaho Temple",
        "phone":"208-656-0880",
        "address1":"750 S 2nd E",
        "city":"Rexburg",
        "state":"ID",
        "zip":83440,
        "imageurl":"https://assets.ldscdn.org/29/8a/298a8b01fbc736923e83e7c748e60abcad8511c9/rexburg_idaho_temple.jpeg",
        "presidents":[
            "Val Christensen","Clair Thueson","Philip Wightman","Fenton Broadhead","Max Checketts"
        ]
    } ,   
    {
        "name":"Kansas City Missouri Temple",
        "phone":"816-413-1430",
        "address1":"7001 Searcy Creek Pkwy",
        "city":"Kansas City",
        "state":"MO",
        "zip":64119,
        "imageurl":"https://assets.ldscdn.org/62/5e/625e0629b625e2596ad1c160a45f567f207560cc/kansas_city_temple_lds.jpg",
        "presidents":[
            "John Hardy","Dennis Karpowitz","Wayne Miller","R. Scott Holman"
        ]
    },

    {
        "name":"Oklahoma City Oklahoma Temple",
        "phone":"405-373-2309",
        "address1":"12030 N Mustang Rd",
        "city":"Yukon",
        "state":"OK",
        "zip":73099,
        "imageurl":"https://assets.ldscdn.org/75/2c/752cf0dcfabe1870442460d13a2eeb8bda6267a2/oklahoma_city_temple_exterior.jpeg",
        "presidents":[
            "Henry Chesney","H. Aldridge Gillespie","Michael Southward","Don Hansen","Travis Campbell","Kent Bowman"
        ]
    } 
]




console.log(JSON.length);

    for (let i = 0; i <JSON.length; i++) {
        console.log(JSON[i]);
            let card = document.createElement('section');
            let text = document.createElement('div')
            let h2 = document.createElement('h2');
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let p5 = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = JSON[i].name;
            p.textContent = "Phone Number: " + JSON[i].phone;
            p2.textContent = "City: " + JSON[i].city;
            p3.textContent = "State: " + JSON[i].state;
            p4.textContent = "Address: " + JSON[i].address1;

            p5.setAttribute('id', 'weather' + i)
            img.setAttribute('src', JSON[i].imageurl);
            img.setAttribute('alt', JSON[i].name)
            
            text.appendChild(h2);
            text.appendChild(p);
            text.appendChild(p2);
            text.appendChild(p3);
            text.appendChild(p4);
            text.appendChild(p5);

        if (i % 2 == 0){
            card.appendChild(text);
            card.appendChild(img);
        }
        else {
            card.appendChild(img);
            card.appendChild(text);
        }
            

            
            
            document.getElementById('bodyOutput').appendChild(card);


    }

    const IdahoFallsAPI = "https://api.openweathermap.org/data/2.5/weather?id=5596475&units=imperial&appid=ccfcf63c0abf60de78a307ad1174d6c4"
    const RexburgAPI = "https://api.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&appid=ccfcf63c0abf60de78a307ad1174d6c4"
    const KansasCityAPI = "https://api.openweathermap.org/data/2.5/weather?id=4393217&units=imperial&appid=ccfcf63c0abf60de78a307ad1174d6c4"
    const OklahomaCityAPI = "https://api.openweathermap.org/data/2.5/weather?id=4544349&units=imperial&appid=ccfcf63c0abf60de78a307ad1174d6c4"
    var cityList = [IdahoFallsAPI, RexburgAPI, KansasCityAPI, OklahomaCityAPI]

    var count = 0;
    for (i in cityList) {

        fetch(cityList[i])
        .then((response) => response.json())
        .then((jsObject) => {

        document.getElementById('weather' + count).textContent = "Current Temperature: " + jsObject.main.temp;
        count += 1;
      });
    }
    
