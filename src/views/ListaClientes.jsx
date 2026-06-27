import { useEffect, useState } from "react";

// Datos de prueba (pueden eliminarse cuando funcione la API)
const CLIENTES = [
    {
        id: 1,
        name: {
            firstname: "John",
            lastname: "Snow"
        },
        email: "johnsnow@invernalia.com",
        phone: "123456789",
        address: {
            country: "Seven Kingdoms",
            city: "Invernalia"
        }
    }
];

const ListaClientes = () => {

    // Estado donde se guardarán los clientes obtenidos desde la API
    const [clientes, setClientes] = useState([]);

    // Estado del buscador
    const [busqueda, setBusqueda] = useState("");

    // Consumo principal de la API 
    const obtenerClientes = async () => {

        const respuesta = await fetch("https://fakestoreapi.com/users");

        const datos = await respuesta.json();

        setClientes(datos);

    };

    // Se ejecuta una sola vez al cargar la pantalla
    useEffect(() => {

        obtenerClientes();

    }, []);

    // Filtrado de clientes según el término de búsqueda
    const clientesFiltrados = clientes.filter((cliente) => {

        const term = busqueda.toLowerCase().trim();

        if (!term) return true;

        const apellido = cliente.name.lastname.toLowerCase();

        const ciudad = cliente.address.city.toLowerCase();

        return apellido.includes(term) || ciudad.includes(term);

    });

    console.log(clientesFiltrados);

    return (

        <div>

            <input
                type="text"
                placeholder="Buscar por apellido o ciudad..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

            {/* Juan tabla xd*/}

        </div>

    );

};

export default ListaClientes;