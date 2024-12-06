//javascript

// Seleccionar el formulario
const formulario = document.getElementById('contactForm');

// Escuchar el evento "submit" del formulario
formulario.addEventListener('click', function(evento){
    // Obtener valores de los campos
    const nombre = document.getElementById('name').value.trim();
    const correo = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('message').value.trim();

    // Verificar si los campos están vacíos
        if (!nombre) {
            evento.preventDefault();  // Evita que el formulario se envíe
            alert('El campo "Nombre" está vacío. Por favor, complétalo.');
            return; // Salir de la función
        }


        if (!correo) {
            evento.preventDefault();
            alert('El campo "Email" está vacío. Por favor, complétalo.');
            return;
        }

        if (!mensaje) {
            evento.preventDefault();
            alert('El campo "Mensaje" está vacío. Por favor, complétalo.');
            return;
        }

        // Validación exitosa
        alert('Formulario enviado con éxito.');
    }

);
