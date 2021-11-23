export const LibrosDelCarro = () =>
`
        <p class="imagen_Autor_Libro_General Libro_Info_General">Item</p>
        <p class="titulo_Libro_General Libro_Info_General">Titulo</p>
        <p class="precio_Libro_General Libro_Info_General">Precio</p>
        
  
`

export const LibrosDelCarroParticulares = (Titulo,Imagen,Autor,Precio,LibroId) => 
`

    <div class="Libro_Imagen_Autor">
        <img class="imagen_Libro_Particular" src="${Imagen}" alt="${Titulo}">
        <p class="autor_Libro_Particular">${Autor}</p>
    </div>
    <p class="titulo_Libro_Particular">${Titulo}</p>
    <p class="precio_Libro_Particular">$${Precio}</p>
    <button class="btn_Delete_Libro"><i class="fas fa-trash"></i></button>
  
`
export const TotalYBotonComprar = (total)=>
`
    <hr>
    <h2 class="TotalCompra">Total:<span>${total}</span></h2>
    <button class="BotonCompra">Comprar</button>
`

export const SinLibros = ()=> 
    `<div class="carrito_Vacio">
        <p>EL CARRITO AUN ESTA VACIO</p>
        <img src="../img/carrito.png" alt="">
    </div>`
