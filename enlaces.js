// Seleccionamos los enlaces por su ID
document.querySelectorAll('.button-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenimos el comportamiento por defecto del enlace
        window.location.href = this.href; // Redirigimos a la URL del enlace en la misma pestaña
    });
});