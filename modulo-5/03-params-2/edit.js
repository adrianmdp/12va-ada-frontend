var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var formAdd = document.getElementById('form-edit-item');
var params = new URLSearchParams(window.location.search);
var dni = params.get('dni');
var storage = JSON.parse(localStorage.getItem('ahorradas-data'));
console.log(storage);
var item = storage.items.find(function (item) { return item.dni === dni; });
formAdd.dni.value = item.dni;
formAdd.name.value = item.name;
formAdd.email.value = item.email;
formAdd.addEventListener('submit', function (e) {
    e.preventDefault();
    var payload = {
        dni: e.target.dni.value,
        name: e.target.name.value,
        email: e.target.email.value
    };
    var storage = JSON.parse(localStorage.getItem('ahorradas-data'));
    var newItems = storage.items.map(function (item) {
        if (item.dni === dni) {
            return payload;
        }
        return item;
    });
    localStorage.setItem('ahorradas-data', JSON.stringify(__assign(__assign({}, storage), { items: newItems })));
});
