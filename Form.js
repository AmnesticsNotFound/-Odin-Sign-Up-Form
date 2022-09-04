function checkpass () {
var a = document.querySelector("#password");
var b = document.querySelector("#passwordC");
var c = document.querySelector(".hid");

if (a.value != b.value) {
    
    c.style.display = 'inline'
}
else {
    c.style.display = 'none'
}

}
