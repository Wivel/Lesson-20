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