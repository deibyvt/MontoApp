import { actualizarLayout } from "./layout/estadoLayout.js";
import { iniciarEventosMenu } from "./layout/public/eventoMenu.js";
import { PATHS } from "./routes.js";

export class Router {

    constructor() {
        this.routes = PATHS;
        this.init();
    }

    init() {

        document.addEventListener('click', (e) => {
            if (e.target.matches('.enlace')) {
                e.preventDefault();
                const routeName = e.target.getAttribute('path');
                if (routeName != null) {
                    this.load(routeName);
                }
            }
        });
        iniciarEventosMenu();

        window.addEventListener('popstate', () => this.load(window.location.pathname === '/' || window.location.pathname === ''  ? 'welcome' : window.location.pathname));
    
        this.load((window.location.pathname === '/' || window.location.pathname === '' || window.location.pathname === 'index.html' || window.location.pathname === 'welcome') 
        ? 'welcome' 
        : window.location.pathname);

    }

    load(path) {

        path = path.replace('/', '');

        let route = this.routes[path] || this.routes['error'];

        const logged = window.localStorage.getItem('token_user') !== null;

        actualizarLayout(logged);

        if (!logged && route.private === true) {
            route = this.routes['welcome'];
        }

        const container = document.getElementById('contenido');
        
        if (container) {
            container.innerHTML = route.template();
        }
        
        if (window.location.pathname !== route.path) {
            window.history.pushState({}, "", route.path);
        }
    }
}