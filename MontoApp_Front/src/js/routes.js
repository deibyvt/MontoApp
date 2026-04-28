import { login } from "./views/login/login.js";
import { perfil } from "./views/perfil/perfil.js";
import { welcome } from "./views/welcome/welcome.js";

export const PATHS = {
    login: {
        path: '/login', 
        template: login, 
        private: false
    },
    register: {
        path: '/register',
        template: '<h1>register</h1>',
        private: false
    },
    welcome: {
        path: '/welcome',
        template: welcome,
        private: false
    },
    home: { 
        path: '/home', 
        template: '<h1>home</h1>', 
        private: true 
    },
    products: { 
        path: '/products', 
        template: '<h1>productos</h1>', 
        private: true 
    }, 
    error: { 
        path: '/404', 
        template: '<h1>not found</h1>', 
        private: false
    },
    perfil: {
        path: '/perfil', 
        template: perfil, 
        private: false
    }
};