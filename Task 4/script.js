/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkapį kreipsis į cars.json failą
ir atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
let CarCount = 0;

function getCars() {
    fetch(ENDPOINT).then(_Response => {
        if (_Response.ok) {
            console.log("Duomenys gauti");
            return _Response.json();
        } else {
            console.log("Kažkas negerai");
        }
    }).then(_APIData => {
        document.getElementById("output").innerHTML = "";
        CreateCars(_APIData);
    }).catch(err => console.log("nepavyko", err))
}

function CreateCars(AData) {
    AData.forEach((AItem, AIndex) => {
        CreateCar(AItem);
    });
}

function isOdd(num) { return num % 2; }

function CreateCar(AItem) {
    CarCount = CarCount + 1;
    let _CardDiv = document.createElement('div');

    let _ManufName = document.createElement('h2');
    _ManufName.setAttribute('class', 'manuf_name');
    _ManufName.innerText = AItem.brand;
    _CardDiv.appendChild(_ManufName);

    let _ModelUL = document.createElement('ul');
    _ModelUL.setAttribute('class', 'model_ul');
    _CardDiv.appendChild(_ModelUL);
    AItem.models.forEach((AModel, AIndex) => {
        let _ModelLI = document.createElement('li');
        _ModelLI.setAttribute('class', 'model_li');
        _ModelLI.innerText = AModel;
        _ModelUL.appendChild(_ModelLI);
    });

    if (isOdd(CarCount)){
        _CardDiv.style.backgroundColor = "#ede9e8";
    }else{
        _CardDiv.style.backgroundColor = "#f7f5f5";
    };

    _CardDiv.style.paddingBottom = '10px';

    document.getElementById('output').appendChild(_CardDiv);
}

getCars();