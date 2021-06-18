let url = "https://api.osrsbox.com/";

const getData = (urlRequest) => {
    let encodedURI = encodeURI(url + urlRequest);
    fetchData(encodedURI)
    .then((data) => {
        displayData(data);
    })
    .catch((error) => {
        console.log(error);
    });
}

async function fetchData(url) {
    const response = await fetch(url).then((response) => {
        return response.json();
    })
    .catch((error) => console.log(error));
    return response;
}

function displayData(data) {
    const datatable = document.getElementById("data_table");
    data._items.forEach((element) => {
        // datatable.innerHTML += `<tr>
        // <td>${element.name}</td>
        // <td>${element.cost}</td>
        // <td>${element.id}</td>
        // <td>${element.release_date}</td>
        // <td>${element.weight}</td>



        // </tr>`
        
        let tr = document.createElement("tr");
        let td = document.createElement('td');
        td.innerHTML = element.name;
        tr.appendChild(td);
        datatable.appendChild(tr);
    })
}

getData("equipment");