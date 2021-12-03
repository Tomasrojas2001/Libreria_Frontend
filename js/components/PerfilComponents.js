
export const FavoritoParticular = (Titulo,Imagen) => 
`

    <div class="Libro_Imagen_Perfil">
        <img class="imagen_Libro_Particular" src="${Imagen}" alt="${Titulo}">
    </div>
    <p class="titulo_Libro_Particular titulo_Perfil">${Titulo}</p>
    <button class="btn_Agregar_Carrito">Agregar al carrito</button>
    <button class="btn_Delete_Libro btn_Delete_favorito"><i class="fas fa-trash"></i></button>
  
`

export const SinFavoritos = () => 
    `<div class="container_Sin_Favoritos">
    <svg class="icon_Sin_Favoritos" arial-hidden="true" width="197" height="120" viewBox="0 0 197 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="ilus-ml-404">
            <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M10.1665 117.639H0V119.203H10.1665V117.639ZM196.292 117.639H14.0767V119.203H196.292V117.639Z" fill="#CCCCCC">

            </path>
            <path id="Shape_2" d="M118.87 103.562V109.947H79.7679V103.562H21.897V109.947C21.897 114.264 24.5599 119.197 32.5695 119.203L164.66 118.975C178.445 118.986 177.035 103.562 176.741 103.562H118.87Z" fill="#DFDFDF">

            </path>
            <path id="Shape_3" d="M119.889 103.89L100.902 103.898L119.889 103.912V103.89Z" fill="#F7D032">

            </path>
            <path id="Shape_4" d="M45.7593 103.335H154.935V26.5847L45.7593 26.8952L45.7593 103.335Z" fill="white">

            </path>
            <path id="Shape_5" d="M23.4611 114.51C24.0359 116.524 27.8038 119.419 33.8489 119.419L165.01 119.203C170.279 119.203 174.66 116.566 175.177 114.51H23.4611Z" fill="#BBBBBB">

            </path>
            <path id="Shape_6" d="M154.844 102.779H46.1402" stroke="#CCCCCC" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">

            </path>
            <path id="Shape_7" d="M175.959 104.344V110.041C175.959 113.424 172.637 118.421 165.485 118.421H36.3561" stroke="#999999" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">

            </path>
            <path id="Shape_8" d="M35.1918 75.4068V21.4443C35.1918 18.8528 37.2926 16.752 39.884 16.752H161.1C163.691 16.752 165.792 18.8528 165.792 21.4443V98.8687" stroke="#CCCCCC" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">

            </path>
            <path id="Shape_9" d="M154.843 103.164V28.7702C154.843 27.5197 153.751 26.919 152.497 26.919L64.6354 26.833L53.9082 26.9065L47.6393 26.919C46.8252 26.919 46.3881 27.3288 46.3857 28.1445" stroke="#CCCCCC" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">

            </path>
            <path id="Shape_10" d="M89.5677 40.2303L89.0405 39.1523V39.1523L89.5677 40.2303ZM90.1184 38.6251L89.0405 39.1523V39.1523L90.1184 38.6251ZM76.7935 53.2986L75.7059 52.7915L76.7935 53.2986ZM75.1989 53.8791L74.6918 54.9667L74.6918 54.9667L75.1989 53.8791ZM74.6183 52.2845L73.5307 51.7774L74.6183 52.2845ZM88.5132 38.0744L89.0405 39.1523V39.1523L88.5132 38.0744ZM101.766 35.1152L101.743 36.315L101.745 36.315L101.766 35.1152ZM88.513 38.0745L87.9855 36.9967L88.513 38.0745ZM101.766 35.1152L101.789 33.9154L101.786 33.9154L101.766 35.1152ZM113.146 37.7582L112.637 38.8453L112.64 38.8463L113.146 37.7582ZM124.463 47.3253L123.475 48.0056L123.476 48.0066L124.463 47.3253ZM129.581 62.7233L130.78 62.6748L130.78 62.6736L129.581 62.7233ZM129.581 62.7236L128.382 62.772L128.382 62.773L129.581 62.7236ZM126.783 76.6104L125.695 76.1033L125.695 76.1033L126.783 76.6104ZM112.683 90.9207L112.165 89.8387L112.164 89.8387L112.683 90.9207ZM88.256 91.1387L88.7629 90.051L88.7621 90.0506L88.256 91.1387ZM79.107 84.3348L80.0034 83.537L80.0032 83.5368L79.107 84.3348ZM71.7971 64.5292L70.5972 64.5125L71.7971 64.5292ZM73.0137 63.3461L73.0304 62.1462H73.0304L73.0137 63.3461ZM74.1968 64.5627L72.997 64.546L74.1968 64.5627ZM80.8994 82.7388L81.797 81.9424L81.7956 81.9408L80.8994 82.7388ZM80.8996 82.739L80.002 83.5355L80.0032 83.5368L80.8996 82.739ZM89.2682 88.9626L89.7762 87.8754L89.7743 87.8745L89.2682 88.9626ZM89.2691 88.963L88.7611 90.0502L88.7621 90.0506L89.2691 88.963ZM111.646 88.7567L111.13 87.6733L111.127 87.6748L111.646 88.7567ZM111.646 88.7567L112.162 89.8401L112.165 89.8387L111.646 88.7567ZM124.608 75.5962L125.115 74.5086L124.027 74.0015L123.52 75.0891L124.608 75.5962ZM125.695 76.1033L125.188 77.1909L126.202 75.0157L125.695 76.1033ZM124.608 75.5962L123.52 75.0891L123.013 76.1767L124.101 76.6838L124.608 75.5962ZM127.183 62.8227L128.382 62.7733L128.382 62.773L127.183 62.8227ZM122.487 48.6874L121.499 49.3683L121.499 49.3686L122.487 48.6874ZM122.487 48.6863L121.498 49.3665L121.498 49.3672L122.487 48.6863ZM112.132 39.9338L111.625 41.0213L111.626 41.0219L112.132 39.9338ZM112.13 39.9328L111.622 41.0198L111.623 41.0202L112.13 39.9328ZM101.72 37.5148L101.743 36.315L101.743 36.315L101.72 37.5148ZM89.568 40.2302L90.0955 41.308L90.0955 41.308L89.568 40.2302ZM90.095 41.3082C91.2857 40.7258 91.7788 39.2885 91.1964 38.0978L89.0405 39.1523V39.1523L90.095 41.3082ZM77.8811 53.8057C80.5327 48.1184 84.9311 43.8341 90.095 41.3082L89.0405 39.1523C83.3965 41.913 78.5956 46.5937 75.7059 52.7915L77.8811 53.8057ZM74.6918 54.9667C75.8931 55.5268 77.321 55.007 77.8811 53.8057L75.7059 52.7915H75.7059L74.6918 54.9667ZM73.5307 51.7774C72.9706 52.9787 73.4905 54.4066 74.6918 54.9667L75.7059 52.7915L75.7059 52.7915L73.5307 51.7774ZM87.9859 36.9964C81.8619 39.9919 76.6584 45.0689 73.5307 51.7774L75.7059 52.7915C78.5956 46.5937 83.3965 41.913 89.0405 39.1523L87.9859 36.9964ZM91.1964 38.0978C90.614 36.9071 89.1766 36.414 87.9859 36.9964L89.0405 39.1523L89.0405 39.1523L91.1964 38.0978ZM101.789 33.9154C96.996 33.8243 92.2636 34.9029 87.9855 36.9967L89.0405 39.1523C92.9843 37.2222 97.3402 36.2313 101.743 36.315L101.789 33.9154ZM101.786 33.9154L101.786 33.9154L101.745 36.315L101.745 36.315L101.786 33.9154ZM113.654 36.6712C109.935 34.9324 105.893 33.9935 101.789 33.9154L101.743 36.315C105.512 36.3867 109.223 37.2487 112.637 38.8453L113.654 36.6712ZM125.452 46.6451C122.48 42.326 118.405 38.8817 113.652 36.6702L112.64 38.8463C117.004 40.8769 120.746 44.0396 123.475 48.0056L125.452 46.6451ZM130.78 62.6736C130.541 56.9094 128.688 51.3381 125.451 46.6441L123.476 48.0066C126.453 52.3235 128.162 57.456 128.382 62.773L130.78 62.6736ZM130.78 62.6751L130.78 62.6748L128.382 62.7717L128.382 62.772L130.78 62.6751ZM127.871 77.1175C130.054 72.4357 130.979 67.4875 130.78 62.6741L128.382 62.773C128.565 67.2105 127.713 71.7761 125.695 76.1033L127.871 77.1175ZM113.202 92.0027C119.418 89.0215 124.707 83.9037 127.871 77.1175L125.695 76.1033C122.772 82.3731 117.893 87.0913 112.165 89.8387L113.202 92.0027ZM87.749 92.2263C96.1213 96.1289 105.403 95.7437 113.202 92.0027L112.164 89.8387C104.975 93.2875 96.4462 93.6324 88.7629 90.051L87.749 92.2263ZM78.2107 85.1327C80.8728 88.1237 84.1192 90.538 87.7499 92.2267L88.7621 90.0506C85.4285 88.5001 82.4478 86.2833 80.0034 83.537L78.2107 85.1327ZM70.5972 64.5125C70.4912 72.1157 73.2003 79.5059 78.2108 85.1329L80.0032 83.5368C75.4002 78.3674 72.8992 71.5619 72.997 64.546L70.5972 64.5125ZM73.0304 62.1462C71.705 62.1277 70.6156 63.1872 70.5972 64.5125L72.997 64.546L72.997 64.546L73.0304 62.1462ZM75.3967 64.5794C75.4152 63.254 74.3557 62.1647 73.0304 62.1462L72.9969 64.546H72.997L75.3967 64.5794ZM81.7956 81.9408C77.6 77.2289 75.3071 71.008 75.3967 64.5794L72.997 64.546C72.8992 71.5619 75.4002 78.3674 80.0032 83.5368L81.7956 81.9408ZM81.7972 81.9426L81.797 81.9424L80.0018 83.5353L80.002 83.5355L81.7972 81.9426ZM89.7743 87.8745C86.7377 86.4621 84.0226 84.4429 81.796 81.9412L80.0032 83.5368C82.4476 86.2832 85.4284 88.5 88.7621 90.0506L89.7743 87.8745ZM89.7771 87.8759L89.7762 87.8754L88.7601 90.0497L88.7611 90.0502L89.7771 87.8759ZM111.127 87.6748C104.546 90.8314 96.7707 91.1361 89.7761 87.8754L88.7621 90.0506C96.4455 93.6325 104.974 93.2876 112.165 89.8387L111.127 87.6748ZM111.13 87.6733L111.13 87.6733L112.161 89.8402L112.162 89.8401L111.13 87.6733ZM123.52 75.0891C120.838 80.8425 116.368 85.1611 111.127 87.6747L112.165 89.8387C117.893 87.0913 122.772 82.3731 125.695 76.1033L123.52 75.0891ZM126.202 75.0157L125.115 74.5086L124.101 76.6838L125.188 77.1909L126.202 75.0157ZM124.101 76.6838L125.188 77.1909L126.202 75.0157L125.115 74.5086L124.101 76.6838ZM125.985 62.8722C126.152 66.9336 125.372 71.1167 123.52 75.0891L125.695 76.1033C127.713 71.7762 128.565 67.2107 128.382 62.7733L125.985 62.8722ZM121.499 49.3686C124.217 53.3085 125.783 58.0024 125.985 62.8725L128.382 62.773C128.162 57.4558 126.452 52.3231 123.475 48.0061L121.499 49.3686ZM121.498 49.3672L121.499 49.3683L123.475 48.0065L123.475 48.0054L121.498 49.3672ZM111.626 41.0219C115.603 42.8717 119.012 45.7531 121.498 49.3665L123.475 48.0061C120.746 44.0395 117.004 40.8765 112.638 38.8458L111.626 41.0219ZM111.623 41.0202L111.625 41.0213L112.64 38.8464L112.638 38.8453L111.623 41.0202ZM101.697 38.7146C105.13 38.7799 108.511 39.5652 111.622 41.0198L112.638 38.8458C109.224 37.2489 105.512 36.3867 101.743 36.315L101.697 38.7146ZM90.0955 41.308C93.705 39.5415 97.6844 38.6383 101.697 38.7146L101.743 36.315C97.3402 36.2313 92.9843 37.2222 89.0405 39.1523L90.0955 41.308ZM86.8848 40.2073C87.4674 41.3979 88.9049 41.8907 90.0955 41.308L89.0405 39.1523H89.0405L86.8848 40.2073ZM87.9855 36.9967C86.7949 37.5793 86.3021 39.0168 86.8848 40.2073L89.0405 39.1523L89.0405 39.1523L87.9855 36.9967ZM100.543 36.315V36.315H102.943V36.315H100.543ZM102.943 36.315V36.315H100.543V36.315H102.943Z" fill="#CCCCCC">

            </path>
            <g id="Group">
                <path id="Shape_11" d="M126.979 33.9836L119.717 42.3384" stroke="#CCCCCC" stroke-width="1.6" stroke-linecap="square">

                </path>
                <path id="Shape_12" d="M138.507 30.1991L135.174 34.0327C133.516 35.941 130.216 35.7853 127.805 33.6902C125.394 31.5943 124.781 28.3479 126.439 26.4405L137.769 13.4058L148.263 1.33386C149.919 -0.571253 153.22 -0.417186 155.631 1.67796C158.041 3.7739 158.654 7.02181 156.997 8.92692" fill="#E6E6E6">

                </path>
                <path id="Shape_13" d="M126.499 26.9502C124.841 28.8568 125.203 31.8865 127.306 33.7142C129.409 35.5419 132.458 35.4793 134.117 33.5719L145.447 20.538L155.94 8.46606" stroke="#CCCCCC" stroke-width="1.6" stroke-linecap="round">

                </path>
            </g>
            <path id="Shape_14" fill-rule="evenodd" clip-rule="evenodd" d="M101.105 50.3811C98.3633 50.3811 96.2072 51.2273 94.6361 52.9205C93.0657 54.6136 92.2806 56.8503 92.2806 59.6306H95.7176C95.7818 57.957 96.0461 56.6759 96.5091 55.7883C97.3333 54.1913 98.82 53.3936 100.97 53.3936C102.707 53.3936 103.953 53.8566 104.706 54.7841C105.459 55.7109 105.836 56.805 105.836 58.0664C105.836 58.9682 105.578 59.8363 105.064 60.6731C104.756 61.1801 104.379 61.6417 103.944 62.0448L102.399 63.5706C100.918 65.0253 99.9594 66.3157 99.5223 67.4418C99.0843 68.5688 98.8653 70.0516 98.8653 71.8926H102.302C102.302 70.2713 102.485 69.0443 102.853 68.2145C103.22 67.384 104.021 66.3696 105.257 65.1723C106.956 63.5253 108.086 62.2763 108.646 61.4262C109.205 60.5769 109.485 59.4695 109.485 58.1056C109.485 55.8524 108.722 54.0021 107.197 52.5537C105.672 51.1053 103.641 50.3811 101.105 50.3811ZM102.631 75.0982H98.7879V79.1149H102.631V75.0982Z" fill="#CCCCCC">

            </path>
        </g>
    </svg>
    <p class="mensaje_Sin_Favoritos">Aún no tenés productos en Favoritos</p>
</div>`


export const MiLibroParticular = (Titulo,Imagen,IdLibro) => 
    	`
        <button id="${IdLibro}" class="button_MiLibro" value="${IdLibro}">
            <div class="Libro_Imagen_MiLibro">
                <img class="imagen_MiLibro_Particular" src="${Imagen}" alt="${Titulo}">
            </div>
            <p class="titulo_MiLibro_Particular">${Titulo}</p>
            <h2 class="h2_descargar">Descargar</h2>
        </button>
        `;



export const InfoUsuario = (nombre,apellido,email) =>
    `
    
    
    <div class="perfil">
        <h1 class="info_Personal">Cuenta</h1>
        <div class="container_Icon_Info_Usuario">
            <div class="userIconPerfil_Container">
                <i class="fas fa-user"></i>
            </div>
            <ul class="ul_Info_Usuario">
                <li class="li_nombre_Usuario">
                    <p>Nombre de Usuario</p>
                    <span>${nombre}</span>
                </li>
                <li class="li_Apellido_Usuario">
                    <p>Apellido</p>
                    <span>${apellido}</span>       
                </li>
                <li class="li_Email_Usuario">
                    <p>Email</p>
                    <span>${email}</span>       
                </li>
            </ul>
        </div>
    </div>`


export const UsuarioSinLibros = () => 
    `<div class="div_Sin_Libros">
    <svg width="200px" height="120px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="335.08px" height="335.079px" viewBox="0 0 335.08 335.079" style="enable-background:new 0 0 335.08 335.079;" xml:space="preserve">
        <g>
            <path d="M311.175,115.775c-1.355-10.186-1.546-27.73,7.915-33.621c0.169-0.108,0.295-0.264,0.443-0.398    c7.735-2.474,13.088-5.946,8.886-10.618l-114.102-34.38L29.56,62.445c0,0-21.157,3.024-19.267,35.894    c1.026,17.89,6.637,26.676,11.544,31l-15.161,4.569c-4.208,4.672,1.144,8.145,8.88,10.615c0.147,0.138,0.271,0.293,0.443,0.401    c9.455,5.896,9.273,23.438,7.913,33.626c-33.967,9.645-21.774,12.788-21.774,12.788l7.451,1.803    c-5.241,4.736-10.446,13.717-9.471,30.75c1.891,32.864,19.269,35.132,19.269,35.132l120.904,39.298l182.49-44.202    c0,0,12.197-3.148-21.779-12.794c-1.366-10.172-1.556-27.712,7.921-33.623c0.174-0.105,0.301-0.264,0.442-0.396    c7.736-2.474,13.084-5.943,8.881-10.615l-7.932-2.395c5.29-3.19,13.236-11.527,14.481-33.183    c0.859-14.896-3.027-23.62-7.525-28.756l15.678-3.794C332.949,128.569,345.146,125.421,311.175,115.775z M158.533,115.354    l30.688-6.307l103.708-21.312l15.451-3.178c-4.937,9.036-4.73,21.402-3.913,29.35c0.179,1.798,0.385,3.44,0.585,4.688    L288.14,122.8l-130.897,32.563L158.533,115.354z M26.71,147.337l15.449,3.178l99.597,20.474l8.701,1.782l0,0l0,0l26.093,5.363    l1.287,40.01L43.303,184.673l-13.263-3.296c0.195-1.25,0.401-2.89,0.588-4.693C31.44,168.742,31.651,156.373,26.71,147.337z     M20.708,96.757c-0.187-8.743,1.371-15.066,4.52-18.28c2.004-2.052,4.369-2.479,5.991-2.479c0.857,0,1.474,0.119,1.516,0.119    l79.607,25.953l39.717,12.949l-1.303,40.289L39.334,124.07l-5.88-1.647c-0.216-0.061-0.509-0.103-0.735-0.113    C32.26,122.277,21.244,121.263,20.708,96.757z M140.579,280.866L23.28,247.98c-0.217-0.063-0.507-0.105-0.733-0.116    c-0.467-0.031-11.488-1.044-12.021-25.544c-0.19-8.754,1.376-15.071,4.519-18.288c2.009-2.052,4.375-2.479,5.994-2.479    c0.859,0,1.474,0.115,1.519,0.115c0,0,0.005,0,0,0l119.316,38.908L140.579,280.866z M294.284,239.459    c0.185,1.804,0.391,3.443,0.591,4.693l-147.812,36.771l1.292-40.01l31.601-6.497l4.667,1.129l17.492-5.685l80.631-16.569    l15.457-3.18C293.261,219.146,293.466,231.517,294.284,239.459z M302.426,185.084c-0.269,0.006-0.538,0.042-0.791,0.122    l-11.148,3.121l-106.148,29.764l-1.298-40.289l34.826-11.359l84.327-27.501c0.011-0.005,4.436-0.988,7.684,2.315    c3.144,3.214,4.704,9.537,4.52,18.28C313.848,184.035,302.827,185.053,302.426,185.084z"/>
        </g>
    </svg>
        <h1 class ="h1_Sin_Libros">Aun no tienen libros para leer</h1>
        <h1 class ="h1_Sin_Libros2">Comienza tu compra!</h1>
    </div>`


export const InfoVentaGeneral = () => 
    `
    <p class="fecha_Info_Venta Venta_Info_General">Fecha</p>
    <p class="comprobante_Info_Venta Venta_Info_General">Comprobante</p>
    <p class="estado_Info_Venta Venta_Info_General">Estado</p>
    <p class="libros_Comprados Venta_Info_General">Libros Comprados</p>
    `

export const InfoVentaParticular = (Fecha,Comprobante,Estado,ColorEstado) =>
    `
        <p class="fecha_Venta ">${Fecha}</p>
        <p class="comprobante_Venta">${Comprobante}</p>
        <p class="estado_Venta ${ColorEstado}">${Estado}</p>
        
    `

export const libroCompradoInfoGeneral = () =>
    `
        <p class="portada_Libro_General_Perfil Libro_Particular_Perfil">Portada</p>
        <p class="titulo_Libro_General_Perfil Libro_Particular_Perfil">Titulo</p>
        <p class="precio_Libro_General_Perfil Libro_Particular_Perfil">Precio</p>
    
    `
export const libroCompradoInfo = (portada,titulo,precio) =>
    `
        <img class="portada_Libro_Particular_Perfil" src="${portada}" alt="${titulo}">
        <p class="titulo_Libro_Particular_Perfil">${titulo}</p>
        <p class="precio_Libro_Particular_Perfil">$${precio}</p>
    
    `

export const SinCompras = () => 
    `<div class="div_Sin_Compras">
    <svg width="200px" height="120px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 483.1 483.1" style="enable-background:new 0 0 483.1 483.1;" xml:space="preserve">
        <g>
            <path d="M434.55,418.7l-27.8-313.3c-0.5-6.2-5.7-10.9-12-10.9h-58.6c-0.1-52.1-42.5-94.5-94.6-94.5s-94.5,42.4-94.6,94.5h-58.6   c-6.2,0-11.4,4.7-12,10.9l-27.8,313.3c0,0.4,0,0.7,0,1.1c0,34.9,32.1,63.3,71.5,63.3h243c39.4,0,71.5-28.4,71.5-63.3   C434.55,419.4,434.55,419.1,434.55,418.7z M241.55,24c38.9,0,70.5,31.6,70.6,70.5h-141.2C171.05,55.6,202.65,24,241.55,24z    M363.05,459h-243c-26,0-47.2-17.3-47.5-38.8l26.8-301.7h47.6v42.1c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h141.2v42.1   c0,6.6,5.4,12,12,12s12-5.4,12-12v-42.1h47.6l26.8,301.8C410.25,441.7,389.05,459,363.05,459z"/>
        </g>
    </svg>
        <h1 class ="h1_Sin_Compra">No ha realizado ninguna compra</h1>
    </div>`

export const CompraNoEncontrada = () => 
    ` <div class="div_Compra_Fail">
        <h1 class ="h1_Compra_Fail">No se han encontrado resultados para la búsqueda.</h1>
      </div>
     `


export const H2Descargar = () => 
    `<h2 class="h2_descargar">Descargar</h2>`