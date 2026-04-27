
export function publicLayout() {

    return  `
        <div class="w-full h-fit px-1 grid lg:grid-cols-6 gap-0.5">
            <div class="border border-2 w-full h-screen flex lg:flex-col justify-start items-center gap-2 py-5">
                <button data-route="home" class="nav-link data-routeborder border-2 border-blue-600 w-44 h-fit p-1 rounded-lg text-center font-bold text-lg text-white bg-blue-600 shadow-lg hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-500">home</button>
                <button data-route="welcome" class="nav-link data-routeborder border-2 border-blue-600 w-44 h-fit p-1 rounded-lg text-center font-bold text-lg text-white bg-blue-600 shadow-lg hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-500">welcome</button>
                <button data-route="login" class="nav-link data-routeborder border-2 border-blue-600 w-44 h-fit p-1 rounded-lg text-center font-bold text-lg text-white bg-blue-600 shadow-lg hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-500">login</button>
                <button data-route="register" class="nav-link data-routeborder border-2 border-blue-600 w-44 h-fit p-1 rounded-lg text-center font-bold text-lg text-white bg-blue-600 shadow-lg hover:scale-105 hover:bg-blue-700 active:scale-95 active:bg-blue-500">register</button>
            </div>
            <div id="contenido" class="border border-2 w-full h-96 col-span-5">2</div>
        </div>
    `;

}