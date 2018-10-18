
function go() {
    let elem = document.getElementById('par');
    elem.innerHTML = 'Абзац превратился в h3!';
    elem.outerHTML = '<h3>'+elem.innerHTML+'</h3>';
}