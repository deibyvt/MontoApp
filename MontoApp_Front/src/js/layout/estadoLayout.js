import { dashboardLayout } from "./private/DashboardLayout.js";
import { publicLayout } from "./public/publicLayout.js";

let layoutActual = ''; 

export function actualizarLayout(logged) {
    const contenedor = document.getElementById('contenedorPrincipal');

    const nuevoLayout = logged ? dashboardLayout() : publicLayout();

    if (layoutActual !== nuevoLayout) {
        contenedor.innerHTML = nuevoLayout;
        layoutActual = nuevoLayout;
    }

}