// Por ejemplo, aquí podrías agregar una función para cuando el formulario se envía:
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('reparacion-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        
        // Aquí iría la lógica para validar los campos
        // y enviar los datos a un servidor.
        
        alert('Solicitud enviada (simulación).');
        
        form.reset(); // Limpia el formulario después de enviarlo
    });
});