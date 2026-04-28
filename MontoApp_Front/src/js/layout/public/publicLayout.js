
export function publicLayout() {

    return  `
        <header class="w-full h-fit">
            <nav class="w-full h-15 flex flex-row justify-between items-center relative">
                
                <div class="w-1/5 flex justify-center items-center ml-2 lg:ml-8">
                    <div class="rounded-full w-10 h-10 bg-blue-500"></div>
                </div>

                <div class="itemsMenuHamburguesa w-full h-fit absolute hidden flex flex-col justify-center items-center -bottom-43 bg-gray-400/20 py-2 gap-2 
                            lg:flex lg:static lg:flex-row lg:w-auto lg:bg-transparent lg:bottom-auto lg:gap-8 lg:py-0">
                    
                    <ul class="w-fit h-fit">
                        <button path="home" class="botonMenuDesplegable enlace active:border active:border-2 active:border-white-900 rounded-lg w-40 h-11 text-lg 
                        text-white font-semibold active:underline active:scale-90 transition-all duration-300 ease-in-out
                        lg:w-auto lg:hover:text-blue-700 lg:text-black lg:hover:scale-110 lg:active:scale-95 lg:active:border-0 lg:active:no-underline">home</button>
                    </ul>
                    <ul class="w-fit h-fit">
                        <button path="welcome" class="botonMenuDesplegable enlace active:border active:border-2 active:border-white-900 rounded-lg w-40 h-11 text-lg 
                        text-white font-semibold active:underline active:scale-90 transition-all duration-300 ease-in-out
                        lg:w-auto lg:hover:text-blue-700 lg:text-black lg:hover:scale-110 lg:active:scale-95 lg:active:border-0 lg:active:no-underline">welcome</button>
                    </ul>
                    <ul class="w-fit h-fit">
                        <button path="login" class="botonMenuDesplegable enlace active:border active:border-2 active:border-white-900 rounded-lg w-40 h-11 text-lg 
                        text-white font-semibold active:underline active:scale-90 transition-all duration-300 ease-in-out
                        lg:w-auto lg:hover:text-blue-700 lg:text-black lg:hover:scale-110 lg:active:scale-95 lg:active:border-0 lg:active:no-underline">login</button>
                    </ul>
                </div>

                <div class="w-3/5 flex justify-end items-center lg:w-1/5 lg:mr-8">
                    <ul class="w-fit h-fit">
                        <button path="login" class="enlace w-40 mx-1 border border-2 border-blue-700 h-fit p-1 rounded-md text-center font-medium text-lg 
                        text-white bg-blue-600 shadow-lg hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-500 
                        active:border-blue-600">Iniciar Sesión</button>
                    </ul>
                </div>

                <div class="w-1/5 flex justify-center items-center lg:hidden">
                    <div class="menuHamburguesa w-10 p-1 mr-1 active:scale-110">
                        <svg viewBox="0 0 448 512"><path fill="rgb(0, 1, 4)" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 
                            128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 
                            416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                    </div>
                </div>
                
            </nav>
        </header>

        <main id="contenido" class="w-full h-screen bg-gradient-to-b from-sky-800 via-sky-900 to-sky-950">
        </main>
    `;

}