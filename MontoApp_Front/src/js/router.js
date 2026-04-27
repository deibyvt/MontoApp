import { actualizarLayout } from "./layout/estadoLayout.js";

export class Router {
    
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    init() {

        document.addEventListener('click', (e) => {
            if (e.target.matches('.nav-link')) {
                e.preventDefault();
                const routeName = e.target.getAttribute('data-route');
                this.load(routeName);
            }
        });

        window.addEventListener('popstate', () => this.load(window.location.pathname === '/' || window.location.pathname === ''  ? 'welcome' : window.location.pathname));
    
        this.load((window.location.pathname === '/' || window.location.pathname === '') 
        ? 'welcome' 
        : window.location.pathname);

    }

    load(page) {

        page = page.replace('/', '');
        let route = this.routes[page] || this.routes['error'];
        const logged = window.localStorage.getItem('token_user') !== null;

        actualizarLayout(logged);

        if (!logged && route.private === true) {
            route = this.routes['welcome'];
        }

        const container = document.getElementById('contenido');
        
        if (container) {
            container.innerHTML = route.template;
        }
        
        if (window.location.pathname !== route.path) {
            window.history.pushState({}, "", route.path);
        }
    }
}