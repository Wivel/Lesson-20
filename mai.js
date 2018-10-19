function go() {
    let elem = document.getElementById('par');
    elem.innerHTML = 'Абзац превратился в h3!';
    elem.outerHTML = '<h3>' + elem.innerHTML + '</h3>';
}

function sumer() {
    let input1 = +document.getElementById('input1').value;
    let input2 = +document.getElementById('input2').value;
    let abz = document.getElementById('sum');
    let sume = input1 + input2;
    abz.innerHTML = sume;
}

function paragrefer() {
    let elems = document.getElementsByTagName('p');
    for (let i = 0; i < elems.length; i++) {
        elems[i].innerHTML = 'Ку-ку';
    }
}

function Classer() {
    let elems = document.getElementsByClassName('www');
    for (let i = 1; i <= elems.length; i++) {
        elems[i - 1].innerHTML = i;
    }
}

function ClasserFOR() {
    let elems = document.querySelectorAll('p.www');
    for (let i = 1; i <= elems.length; i++) {
        elems[i - 1].innerHTML = i;
    }
}

function alertClass() {
    let elem = document.getElementById('par');
    alert(elem.getAttribute('class'));
}

function DeleteClass() {
    let elems = document.getElementsByTagName('p');
    elems[0].removeAttribute('class');
}

function setClass() {
    let elems = document.getElementById('par');
    elems.setAttribute('class', 'newer');
}

function repeater() {
    let elemIN = document.getElementById('input'), elemSP = document.getElementById('spa');
    elemSP.innerHTML = elemIN.value;
}

function refer() {
    let elems = document.getElementsByTagName('a');

    for (let i=0;i<elems.length;i++){
        elems[i].innerHTML = elems[i].innerHTML+' ' + elems[i].getAttribute('href');
    }

}