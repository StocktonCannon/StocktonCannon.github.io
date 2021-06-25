// import {jsData} from './nobelData.js';

const loadJsData = () => {
    console.log(jsData);
}




const loadJsonData = async () => {
    const data = await fetch('nobel.json').then((response) => response.json());
    console.log(data.prizes[2].laureates[0].firstname);
    var p;
    for (p of data.prizes) {

        if(parseInt(p.year) > 2000) {
            let surname = p.laureates[0].surname
            if(surname && surname.startsWith('C')) {
            console.log(p)
            }
        }
     }
};
loadJsonData();
// loadJsData();