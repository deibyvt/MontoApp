
export function publicLayout() {

    return  `
        <header class="w-full h-fit lg:w-full lg:h-fit">
            <nav class="border border-2 w-full h-15 flex flex-row justify-between items-center relative lg:w-full lg:h-fit lg:flex lg:lg:flex-row lg:lg:justify-center lg:lg:items-center lg:lg:gap-2 lg:lg:py-0.5 lg:lg:px-10 lg:lg:py-2">
            
                <div class="w-1/5 flex justify-center items-center lg:w-44 lg:h-11 ml-2">
                    <div class="rounded-full w-10 h-10 bg-blue-500 lg:rounded-full lg:w-10 lg:h-10 lg:bg-blue-500"></div>
                </div>

                <div class="itemsMenuHamburguesa w-full h-fit absolute hidden flex flex-col justify-center items-center -bottom-43 bg-gray-400/20 py-2 gap-2 lg:w-4/5 lg:flex lg:justify-end lg:gap-2">
                    <ul class="lg:w-fit lg:h-fit">
                        <button path="home" class="botonMenuDesplegable enlace active:border active:border-2 active:border-white-900 rounded-lg  w-40 h-11  text-lg text-white font-semibold active:underline active:scale-90 lg:w-44 lg:h-fit lg:p-1 lg:text-center lg:font-medium lg:text-md lg:hover:scale-110 lg:active:scale-95 transition-all duration-300 ease-in-out">home</button>
                    </ul>
                    <ul class="lg:w-fit lg:h-fit">
                        <button path="welcome" class="botonMenuDesplegable enlace active:border active:border-2 active:border-white-900 rounded-lg  w-40 h-11  text-lg text-white font-semibold active:underline active:scale-90 lg:w-44 lg:h-fit lg:p-1 lg:text-center lg:font-medium lg:text-md lg:lg:hover:scale-110 lg:active:scale-95 transition-all duration-300 ease-in-out">welcome</button>
                    </ul>
                    <ul class="lg:w-fit lg:h-fit">
                        <button path="login" class="botonMenuDesplegable enlace active:border active:border-2 active:border-white-900 rounded-lg  w-40 h-11  text-lg text-white font-semibold active:underline active:scale-90 lg:w-44 lg:h-fit lg:p-1 lg:text-center lg:font-meale-95 transition-all duration-300 ease-in-out">login</button>
                    </ul>
                </div>

                <div class="w-3/5 flex justify-end items-center lg:w-fit lg:h-fit">
                    <ul class="lg:w-fit lg:h-fit">
                        <button path="login" class="enlace w-40 mx-1 border border-2 border-blue-700 lg:w-44 h-fit p-1 rounded-md text-center font-medium text-lg text-white bg-blue-600 shadow-lg hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-500 active:border-blue-600">Iniciar Sesión</button>
                    </ul>
                </div>

                <div class="w-1/5 flex justify-center items-center">
                    <div class="menuHamburguesa w-10 p-1 mr-1 active:scale-110 lg:hidden">
                        <svg viewBox="0 0 448 512"><path fill="rgb(0, 1, 4)" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                    </div>
                </div>
                

            </nav>
        </header>
        <main id="contenido" class="w-full h-screen bg-gradient-to-b from-sky-800 via-sky-900 to-sky-950">

        </main>
    `;

}