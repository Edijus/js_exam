/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Sukurti kortelę, kuri atvaizduotų informaciją apie vartotoją. Kortelė turi turėti bent minimalų stilių.
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';


function GetUsers() {
    fetch(ENDPOINT).then(_Response => {
        if (_Response.ok) {
            console.log("Duomenys gauti");
            return _Response.json();
        } else {
            console.log("Kažkas negerai");
        }
    }).then(_APIData => {
        document.getElementById("output").innerHTML = "";
        console.log(_APIData);
        CreateUsers(_APIData);
    }).catch(err => console.log("nepavyko", err))
}

function CreateUsers(AData) {
    AData.forEach((AItem, AIndex) => {
        CreateUser(AItem);
    });
}

function CreateUser(AItem) {
    let _ProfileDiv = document.createElement('div');
    _ProfileDiv.setAttribute('class', 'profile');

    let _AvatarPic = document.createElement('img');
    _AvatarPic.setAttribute('class', 'profile_picture');
    console.log(AItem.avatar_url);
    _AvatarPic.setAttribute('src', AItem.avatar_url);
    _AvatarPic.setAttribute('alt', AItem.login);
    _ProfileDiv.appendChild(_AvatarPic);

    let _LoginLabel = document.createElement('h2');
    _LoginLabel.innerText = AItem.login;
    _ProfileDiv.appendChild(_LoginLabel);

    document.getElementById('output').appendChild(_ProfileDiv);
}

document.getElementById("btn").addEventListener("click", GetUsers);