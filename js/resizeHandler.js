export function initializeResizeHandler() {
    window.addEventListener('resize', () => {
        const width = window.innerWidth;

        if (width <= 600) {
            console.log("Pantalla pequeña detectada.");
        } else if (width > 600 && width <= 1078) {
            console.log("Pantalla mediana detectada.");
        } else {
            console.log("Pantalla grande detectada.");
        }
    });
    console.log("Manejo de redimensionamiento inicializado.");
}
