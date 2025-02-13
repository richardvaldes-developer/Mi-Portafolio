export function initializeContactForm() {
    emailjs.init("uKqumcbU0XYxly7Pu"); // Reemplaza con tu USER ID de EmailJS

    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que la página se recargue

        // Obtener los valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Parámetros para EmailJS (deben coincidir con los de tu plantilla)
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message
        };

        // Enviar el correo usando EmailJS
        emailjs.send("service_6uhf9le", "template_k1b9lvi", templateParams)
            .then(function(response) {
                alert("✅ Correo enviado correctamente");
                document.getElementById("contact-form").reset(); // Limpiar formulario
            }, function(error) {
                alert("❌ Error al enviar el correo: " + JSON.stringify(error));
            });
    });
};