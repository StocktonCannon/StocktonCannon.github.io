let list = ["model car", "bananas", "plate", "outlet", "conditioner",
 "plastic fork", "zipper", "piano", "packing peanuts", "street lights"]

ul = document.createElement('ul');

document.querySelector(".list").appendChild(ul);

list.forEach(item => {
    let li = document.createElement('li');
    ul.appendChild(li);

    li.innerHTML += item;
} );


function addToList() {
    let item = document.getElementById("textbox").value;
    let li = document.createElement('li');
    list += item;
    ul.appendChild(li);
    li.innerHTML += item;
    document.getElementById('textbox').value = '';
};