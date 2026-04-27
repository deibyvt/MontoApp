export const PATHS = {
    login: {
        path: '/login', 
        template: '<h1>login</h1>', 
        private: false
    },
    register: {
        path: '/register',
        template: '<h1>register</h1>',
        private: false
    },
    welcome: {
        path: '/welcome',
        template: '<h1>welcome</h1>',
        private: false
    },
    home: { 
        path: '/home', 
        template: '<h1>home</h1>', 
        private: true },
    products: { 
        path: '/products', 
        template: '<h1>productos</h1>', 
        private: true }, 
    error: { 
        path: '/404', 
        template: '<h1>error</h1>', 
        private: true }
};