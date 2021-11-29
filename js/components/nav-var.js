
var div = document.querySelector("#index-nav");
var divlogg;

export const genericNavVar = () => {
    div.innerHTML = 
    `
        
            <a href="/view/index.html" style="text-decoration: none;" class="logo2">
                <img src="../img/Logo.png" alt="Borboteca">
                <p class="logo flex_item">Borboteca</p>
            </a>  
            <section class="nav_Search flex_Item">
                <input class="search_Input" type="text" placeholder="Buscar">
                <button class="search_Button">
                    <svg class="search_Img">
                        <path d="M17.86 16.488l-4.255-4.254c-.105-.07-.21-.14-.316-.14h-.457a7.362 7.362 0 001.793-4.781C14.625 3.304 11.32 0 7.312 0 3.27 0 0 3.305 0 7.313a7.307 7.307 0 007.313 7.312c1.828 0 3.48-.668 4.78-1.758v.457c0 .106.036.211.106.317l4.254 4.254c.176.175.457.175.598 0l.808-.81c.176-.14.176-.42 0-.597zm-10.547-3.55a5.597 5.597 0 01-5.625-5.626 5.619 5.619 0 015.625-5.625c3.093 0 5.625 2.532 5.625 5.625a5.619 5.619 0 01-5.626 5.625z" fill="#fff">                       
                        </path>
                    </svg>
                </button>
            </section>
            <section id ="seccion-loggeo" class="Logged_Menu_Container ">
            </section>
            <section class="Carrito_Icon">
                <a href="/view/Carro.html"><i class="fas fa-cart-arrow-down"></i></a>
            </section>
        
    `;

    divlogg = document.querySelector("#seccion-loggeo");
    if(undefined != localStorage.getItem("token")){
        var decoded = parseJwt(localStorage.getItem("token"));
        if(decoded.roll == 2){
            $("#boton1").append(
                `
                    <a href="/view/CargaLibros.html" class="btn-flotante">Cargar Libros</a>
                `);
            console.log(decoded);
        }
        renderLoggeo(decoded);
    }
    else{
        divlogg.innerHTML = 
        `
        <div class="Logged_Menu_Item">
            <div class="Logged_User_Container">
                <a href="#" class="Logged_Menu_User">
                    <p class="nombre_Usuario">Log-in</p>
                </a>
            </div>
        </div>
        `
    }
}

export function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};


const renderLoggeo = (tokensito) => {
    
    divlogg.innerHTML = 
        `
            <div class="Logged_Menu_Item">
                <div class="Logged_User_Container">
                    <a href="#" class="Logged_Menu_User">
                        <svg width="20" height="21"   class="userIcon">
                            <path class="userIconPath" d="M9.688 4.563a3.751 3.751 0 000 7.5 3.751 3.751 0 000-7.5zm0 5.625a1.851 1.851 0 01-1.876-1.876c0-1.015.82-1.874 1.875-1.874 1.016 0 1.876.859 1.876 1.875 0 1.054-.86 1.874-1.876 1.874zm0-9.376A9.686 9.686 0 000 10.5a9.686 9.686 0 009.688 9.688 9.686 9.686 0 009.687-9.688A9.686 9.686 0 009.687.812zm0 17.5a7.846 7.846 0 01-5.118-1.875c.586-.898 1.602-1.523 2.735-1.523.82.234 1.601.352 2.383.352.742 0 1.523-.118 2.343-.352a3.402 3.402 0 012.735 1.524 7.819 7.819 0 01-5.079 1.875zm6.328-3.28C15.078 13.82 13.594 13 11.914 13c-.39 0-1.016.39-2.226.39-1.25 0-1.876-.39-2.266-.39-1.68 0-3.164.82-4.102 2.031-.937-1.25-1.445-2.812-1.445-4.531 0-4.297 3.477-7.813 7.813-7.813 4.296 0 7.812 3.516 7.812 7.813 0 1.719-.547 3.281-1.484 4.531z" >
                            </path>
                        </svg>
                        <p class="nombre_Usuario">${tokensito.nombre}</p>
                        <svg width="24px" height="24px"  class="userMenuDownIcon">
                            <path class="userMenuDownIconPath" d="M18.881 8.75l-.6-.632c-.159-.157-.412-.157-.539 0l-5.726 5.712-5.758-5.712c-.127-.157-.38-.157-.538 0l-.601.632c-.159.126-.159.378 0 .536l6.612 6.596c.158.157.38.157.538 0l6.612-6.596c.159-.158.159-.41 0-.536z">
                            </path>
                        </svg>
                    </a>
                </div>
                <ul class="Logged_Menu_Links"> 
                    <li class="Logged_Menu_Item">
                        <a href="/view/Perfil.html?section=perfil" class="Logged_Menu_Perfil particular_Links">        
                            <svg width="18" height="20"  class="MyProfileIcon">                       
                                <path d="M9 10.977c3.012 0 5.498-2.443 5.498-5.488A5.5 5.5 0 009 0C5.987 0 3.502 2.444 3.502 5.489A5.5 5.5 0 009 10.977zm0-9.624a4.127 4.127 0 014.142 4.136A4.127 4.127 0 019 9.624 4.127 4.127 0 014.858 5.49 4.127 4.127 0 019 1.353zM13.18 12.67H4.82A4.801 4.801 0 000 17.48v2.557h1.356V17.48a3.452 3.452 0 013.464-3.458h8.36a3.452 3.452 0 013.464 3.458v2.557H18V17.48c0-2.669-2.184-4.812-4.82-4.812z" fill="#4F6276">
                                </path>
                            </svg>
                            <p class="Use_Logged_Menu">
                                        Mi perfil
                            </p>
                        </a>    
                    </li>
                    <li class="Logged_Menu_Item"> 
                        <a href="/view/Perfil.html?section=libros" class="Logged_Menu_Books particular_Links">
                            <svg width="15" height="21"  class="MyBooksIcon">
                                <path d="M13.125.5c.508 0 .938.195 1.328.547.352.39.547.82.547 1.328V20.5l-7.5-4.375L0 20.5V2.375c0-.508.156-.938.547-1.328A1.795 1.795 0 011.875.5h11.25zm.625 17.813V2.374a.627.627 0 00-.195-.43.627.627 0 00-.43-.195H1.875a.647.647 0 00-.469.195.587.587 0 00-.156.43v15.938L7.5 14.68l6.25 3.633z" fill="#4F6276">
                                </path>
                            </svg>
                            <p class="Use_Logged_Menu">
                                        Mis libros
                            </p> 
                        </a>   
                    </li>
                    <li class="Logged_Menu_Item">
                        <a href="/view/Perfil.html?section=favoritos" class="Logged_Menu_Favoritos particular_Links">
                            <svg width="20" height="17" class="FavoritesIcon">
                                <path d="M17.102 1.5a5.744 5.744 0 011.722 2.602 5.449 5.449 0 010 2.812c-.281.95-.703 1.758-1.336 2.39l-6.152 6.258a1.836 1.836 0 01-1.336.563c-.527 0-.984-.176-1.336-.563L2.512 9.306c-.633-.633-1.09-1.442-1.336-2.39-.281-.95-.246-1.9.035-2.813.281-.985.844-1.864 1.687-2.602C3.531.937 4.305.586 5.184.445A5.335 5.335 0 017.75.656 5.721 5.721 0 0110 2.027a5.594 5.594 0 012.215-1.37 5.444 5.444 0 012.601-.212c.844.14 1.618.492 2.286 1.055zm-.809 6.61c.422-.422.703-.985.879-1.618a3.61 3.61 0 000-1.933 3.862 3.862 0 00-1.16-1.758c-.703-.563-1.512-.809-2.426-.739a3.562 3.562 0 00-2.356 1.126L10 4.418l-1.23-1.23c-.668-.668-1.477-1.055-2.391-1.126-.914-.07-1.723.176-2.39.739-.598.492-.985 1.09-1.16 1.758-.212.632-.212 1.3-.036 1.933s.492 1.196.914 1.617l6.188 6.258c.07.106.14.106.21 0l6.188-6.258z" fill="#4F6276">
                                </path>
                            </svg>
                            <p class="Use_Logged_Menu">
                                Favoritos
                            </p>
                        </a>
                    </li>
                    <li class="Logged_Menu_Item">
                        <a href="/view/Perfil.html?section=compras" class="Logged_Menu_Compras particular_Links">
                            <svg width="21" height="18" class="MyPurchasesIcon">
                                <path d="M20.532 4.184L18.316.527C18.11.211 17.77 0 17.396 0H3.62c-.375 0-.75.21-.955.527L.483 4.184C-.54 5.836.142 8.086 1.779 8.789v7.98c0 .704.477 1.231 1.09 1.231h15.276c.58 0 1.091-.527 1.091-1.23V8.79c1.637-.704 2.285-2.954 1.296-4.606zM18.145 16.77c0 .07-.034.105-.034.105l-15.207.035c-.034 0-.034-.07-.034-.14v-4.395h15.275v4.395zM2.87 11.25V9h.068c1.023 0 1.91-.457 2.523-1.16.614.703 1.5 1.16 2.523 1.16.99 0 1.876-.457 2.49-1.16A3.38 3.38 0 0012.996 9c1.023 0 1.91-.457 2.523-1.16.614.703 1.5 1.16 2.523 1.16h.068v2.25H2.87zm16.844-4.43c-.273.598-.75.95-1.364 1.055h-.307a2.293 2.293 0 01-1.705-.773l-.818-.95-.818.95c-.444.527-1.023.808-1.705.808a2.209 2.209 0 01-1.705-.808l-.784-.95-.819.95a2.209 2.209 0 01-1.705.808c-.682 0-1.261-.281-1.705-.808l-.818-.95-.818.95a2.209 2.209 0 01-1.705.808c-.102 0-.205-.035-.307-.035-.614-.07-1.091-.457-1.364-1.055-.273-.633-.239-1.441.137-2.039L3.62 1.125h13.775l2.183 3.656c.375.598.409 1.371.136 2.04z" fill="#4F6276">
                                </path>
                            </svg>
                            <p class="Use_Logged_Menu">
                                Mis compras
                            </p>
                        </a>
                    </li>
                    <li class="Logged_Menu_Item">
                        <a  id="cerrar-secion" href="/view/Loggin.html" class="Logged_Menu_CerrarSesion particular_Links">
                            <svg width="20" height="15"  class="LogoutIcon">
                                <path d="M6.25 5.977v3.046c0 .157.04.313.156.43.117.156.274.195.469.195H12.5v3.672c0 .157.04.235.195.274.117.078.235.039.352-.078l5.508-5.586c.117-.078.195-.235.195-.43a.627.627 0 00-.195-.43l-5.508-5.586c-.117-.078-.235-.117-.352-.078-.156.078-.195.157-.195.274v3.672H6.875a.647.647 0 00-.469.195.65.65 0 00-.156.43zm-1.25 0c0-.508.156-.938.547-1.329a1.795 1.795 0 011.328-.546h4.375V1.68c0-.43.156-.782.469-1.094.312-.273.664-.43 1.094-.43.39 0 .78.117 1.093.43l5.547 5.586c.352.39.547.82.547 1.328 0 .547-.195.977-.547 1.328l-5.547 5.586a1.542 1.542 0 01-1.094.469c-.43 0-.78-.156-1.093-.469-.313-.273-.469-.625-.469-1.094v-2.422H6.875c-.547 0-.977-.156-1.328-.546C5.157 10 5 9.57 5 9.023V5.977zM0 1.875C0 1.367.156.937.547.547A1.795 1.795 0 011.875 0h5.156c.117 0 .235.078.313.156.078.078.156.196.156.313V.78a.495.495 0 01-.156.352.444.444 0 01-.313.117H1.875a.647.647 0 00-.469.195.587.587 0 00-.156.43v11.25c0 .195.04.352.156.469.117.117.274.156.469.156h5.156c.117 0 .235.078.313.156.078.078.156.196.156.313v.312a.495.495 0 01-.156.352.444.444 0 01-.313.117H1.875c-.547 0-.977-.156-1.328-.547-.39-.351-.547-.781-.547-1.328V1.875z" fill="#4F6276">
                                </path>
                            </svg>
                            <p class="Use_Logged_Menu">
                                Cerrar sesión
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        `;
 
        var boton = document.getElementById("cerrar-secion").onclick= CerrarSecion;
        const LoggedMenuUl = document.querySelector(".Logged_Menu_Links");
        const LoggedUserContainer = document.querySelector(".Logged_User_Container");
        const UserIconPath = document.querySelector(".userIconPath");
        const UserMenuDownIconPath = document.querySelector(".userMenuDownIconPath");
        
        LoggedMenuUl.addEventListener("mousemove",(e)=>
        {
            LoggedUserContainer.classList.add("change_background_Logged_User");
            UserIconPath.classList.add("change_icons_Logged_User");
            UserMenuDownIconPath.classList.add("change_icons_Logged_User");
        });
        LoggedMenuUl.addEventListener("mouseleave",(e)=>{
            LoggedUserContainer.classList.remove("change_background_Logged_User");
            UserIconPath.classList.remove("change_icons_Logged_User");
            UserMenuDownIconPath.classList.remove("change_icons_Logged_User");
        })
}

const CerrarSecion = () =>{
    localStorage.removeItem("token");
}

