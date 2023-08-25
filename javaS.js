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
// Función para borrar un contacto de la lista por su ID
function borrarContactoPorId(id) {
   var indice = -1;
   for (var i = 0; i < Contacto.length; i++) {
     if (Contacto[i].id === id) {
       indice = i;
       
       indice = i;
      
 
       indice = i
 
      
 break;
     }
   }
 
   
     
  
 if (indice !== -1) {
     var contactoEliminado = Contacto.splice(indice, 1)[0];
     console.log("Contacto eliminado:", contactoEliminado.nombres, contactoEliminado);
   } else {
     console.log("Contacto no encontrado con ID:", id);
   }
 
 // Llamar a la función para agregar un nuevo contacto
 var nuevoContacto = {
   
  
 id: 3,

 
 };
 ag
 agregarContacto(nuevoContacto);
 
 // Llamar a la función para borrar un contacto por su ID
 
 borrar
 borrarContactoPorId(1);
 
 // Imprimir la lista de contactos actualizada
 console.log ("Lista de contactos:",contacto )
}
actualizarContact
actualizarContactoPorId(2, { nombre: "Eugenia", telefono: "555-555-5555" });

// Imprimir la lista de contactos actualizada
console.log("Lista de contactos:", contacto);