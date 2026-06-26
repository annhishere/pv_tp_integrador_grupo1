import { useState } from "react";

//estructura propuesta
const CLIENTES = [
    {
        id: 1, name: {firsname: "Jonh", lastname:"Snow"}, email: "jonhsnow@invernalia.com", address:{country:"Seven Kingdoms", city:"Invernalia"},
    },
];

const ListaClientes = (params) => {
    
    const [busqueda, setBusqueda] = useState("");
    /* JONATAN :) Logica de filtrado por apellido  y ciudad, sin importar mayusculas
    ESTRUCTURA CONCEPTUAL, falta probar, no quiero pisar la tarea de otro por adelantarme*/
    const clientesFiltrados = clientes.filter(
        (cliente) => {
            const term = busqueda.toLowerCase().trim();
            //si no hay texto, mostrar todos
            if(!term) return true;
            const apellido = cliente.name.lastname.toLowerCase();
            const ciudad = cliente.addres.city.toLowerCase();
            return apellido.includes(term) || ciudad.includes(term);
        }
    );

    return(
        <div>
            {/*input de busqueda*/}
            <input type="text" placeholder="Buscar por apellido o ciudad ..." value={busqueda} onChange={(e)=>setBusqueda(e.target.value)}/>
        </div>
    );
};
export default ListaClientes;