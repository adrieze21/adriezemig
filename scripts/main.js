var miImage = document.querySelector('img');

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector( 'h1');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/FELIZDIA.png') {
      miImage.setAttribute('src','images/paradrop.png');
    } else {
      miImage.setAttribute('src', 'images/FELIZDIA.png');
    }
}

function estableceNombreUsuario() {
    var miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = miNombre + ' sos el amor de mi vida';
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    var nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent =   nombreAlmacenado + ' sos el amor de mi vida';
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}
