document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
    // Obtener los valores del formulario
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Validar que no estén vacíos
    if (!name || !email || !message) {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Por favor, llena todos los campos.',
        });
        return;
    }

    // Enviar el correo utilizando el servidor SMTP de Gmail
    Email.send({
        Host: "smtp.gmail.com",
        Username: "zxczxczxc466@gmail.com", // Aquí va tu correo de Gmail
        Password: "nvgc wfch jhjf opiy", // Utiliza una contraseña de aplicación en lugar de la contraseña normal
        To: "richard.valdesrosales@outlook.cl", // El correo de destino
        From: email,
        Subject:"nombre: " + name,
        Body: `Nombre: ${name} <br>Correo: ${email} <br>Mensaje: ${message}`,
    })
    .then(function(response) {
        if (response === "OK") {
            Swal.fire({
                icon: 'success',
                title: 'Mensaje enviado',
                text: 'Gracias por tu mensaje, te responderemos pronto.',
            });
            document.getElementById("contact-form").reset(); // Limpiar el formulario
        } else {
            Swal.fire({
                icon: 'error',
                title: '¡Oops!',
                text: 'Hubo un error al enviar el mensaje. Intenta nuevamente.',
            });
        }
    })
    .catch(function(error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo enviar el correo. Verifica los detalles.',
        });
    });
});