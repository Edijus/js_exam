/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

function CountClicks() {
    let _StateObj = document.getElementById("btn__state");
    let _Clicks = _StateObj.textContent;
    _Clicks = parseInt(_Clicks) + 1;
    _StateObj.textContent = _Clicks;
}

document.getElementById("btn__element").addEventListener("click", CountClicks);