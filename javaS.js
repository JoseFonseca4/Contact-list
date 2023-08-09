 let contacto=[
    {
    id:1,
    nombre:"Jose f",
    numeroTelefonico:32875691,
    direccion:"Talanga, FM",
 }
 ]
agregarContacto (2, "Marco", 32532781, "San Pedro Sula, Cortes");
agregarContacto (3, "sulema", 33483787, "Tegucigalpa, FM");
agregarContacto(4, "Maria", 348752314, "Barcelona, España");

//funcion agregar contacto
 function agregarContacto(id, nombre,numeroTelefonico,direccion){
   let nuevoContacto= {
    id:id,
    nombre:nombre,
    numeroTelefonico:numeroTelefonico,
    direccion:direccion
   }
   
   contacto.push(nuevoContacto)};

   imprimirContacto(contacto);

   eliminarContacto (contacto);


//funcion eliminar
function eliminarContacto (contacto){
    console.log ("eliminar");
    (contacto.pop ( ));
    imprimirContacto(contacto);
   console.log(contacto);
}
//funcion imprimir
function imprimirContacto(contacto) {
    for (let i=0;i<=contacto.length-1;i++)
    {console.log(contacto[i].id + "." + contacto[i].nombre);
    console.log("telefono:" + contacto[i].numeroTelefonico);
    console.log("Lista de contactos")
    console.log(contacto)
}
}