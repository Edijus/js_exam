/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function ConverKilograms(event) {
    event.preventDefault();
    let _OutputObj = document.getElementById("output");
    _OutputObj.innerHTML = "";
    let _KilogramsObj = document.getElementById("kilograms");
    let _Kilograms = _KilogramsObj.value;
    if (_Kilograms == "") {
        alert("Enter kilograms");
    } else {
        _KilogramsObj.value = "";

        let p = document.createElement('p');
        p.textContent = _Kilograms + " kg is:";
        document.getElementById("output").appendChild(p);

        let ul = document.createElement('ul');
        let lb = document.createElement('li');
        lb.textContent = _Kilograms * 2.2046 + " lb";
        ul.appendChild(lb);

        let g = document.createElement('li');
        g.textContent = _Kilograms / 0.001 + " g";
        ul.appendChild(g);

        let oz = document.createElement('li');
        oz.textContent = _Kilograms * 35.274 + " oz";
        ul.appendChild(oz);

        _OutputObj.appendChild(ul);
    }
}

document.getElementById("converter_form").addEventListener("submit", ConverKilograms);