var params = new URLSearchParams(location.search);
var options = document.getElementById('opciones');
options.value = params.get('option');
options.addEventListener('change', function (e) {
    params.set('option', e.target.value);
    window.location.href = "".concat(window.location.pathname, "?").concat(params.toString());
});
var tipos = document.getElementById('tipos');
tipos.value = params.get('type');
tipos.addEventListener('change', function (e) {
    params.set('type', e.target.value);
    window.location.href = "".concat(window.location.pathname, "?").concat(params.toString());
});
// console.log(params.get('id'), params.get('type'));
