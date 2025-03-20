document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    

    emailjs.init("uKqumcbU0XYxly7Pu"); // Reemplaza con tu USER ID de EmailJS

    // Obtener los valores del formulario
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let subject = document.getElementById("subject").value;

    // Validar que no estén vacíos
    if (!name || !email || !message) {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Por favor, llena todos los campos.',
        });
        return;
    }

    // Parámetros para EmailJS (deben coincidir con los de tu plantilla)
    const templateParams = {
        from_name: name,
        from_email: email,
        from_subject: subject,
        message: message
    };

    // Enviar el correo utilizando el servidor SMTP de Gmail
    emailjs.send("service_6uhf9le", "template_k1b9lvi", templateParams)
    .then(function(response) {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado',
            text: 'Gracias por tu mensaje, te responderemos pronto.',
        });
        document.getElementById("contact-form").reset(); // Limpiar formulario
    }, function(error) {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Hubo un error al enviar el mensaje. Intenta nuevamente.',
        });
    });
});