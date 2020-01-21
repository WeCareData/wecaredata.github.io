function SelectAllRows(CheckboxName) {
    var inputs = $("input");
    for (var i = 0; i < inputs.length; i++) {
        var obj = inputs[i];
        if (obj.type == 'checkbox' && obj.name.indexOf(checkbox) == 0 && obj.disabled == false) {
            obj.checked == true;
        }
    }
}