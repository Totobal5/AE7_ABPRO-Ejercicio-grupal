$(document).ready(function() {

    // Variable para guardar la instancia del modal de Bootstrap
    const bookingModal = new bootstrap.Modal(document.getElementById('booking-modal'));
    
    // 1. Cuando se hace clic en cualquier botón "Reservar"
    $('.reservar-btn').on('click', function() {
        // Obtenemos el nombre de la película del atributo 'data-pelicula' del botón
        const pelicula = $(this).data('pelicula');
        
        // Ponemos el nombre de la película en el campo 'disabled' del formulario
        $('#pelicula-input').val(pelicula);
        
        // Mostramos el modal
        bookingModal.show();
    });

    // 2. Cuando se hace clic en el botón "Confirmar Reserva"
    $('#confirmar-btn').on('click', function() {
        // Usamos el método checkValidity() del formulario para ver si todo está completo
        const form = $('#booking-form')[0]; // Seleccionamos el elemento del formulario nativo
        if (!form.checkValidity()) {
            // Si el formulario no es válido, mostramos los mensajes de error nativos del navegador
            form.reportValidity();
            return; // Detenemos la ejecución
        }

        // Si el formulario es válido, obtenemos los datos
        const peliculaSeleccionada = $('#pelicula-input').val();
        const horarioSeleccionado = $('#horario-select').val();
        const cantidadAsientos = $('#asientos-input').val();

        // Mostramos un mensaje de confirmación
        alert(
            `¡Reserva confirmada!\n\n` +
            `Película: ${peliculaSeleccionada}\n` +
            `Horario: ${horarioSeleccionado}\n` +
            `Asientos: ${cantidadAsientos}`
        );

        // Ocultamos el modal
        bookingModal.hide();
    });
    
    // 3. (Opcional pero recomendado) Limpiar el formulario cuando el modal se cierra
    $('#booking-modal').on('hidden.bs.modal', function () {
        $('#booking-form')[0].reset(); // Resetea el formulario a sus valores iniciales
    });

});