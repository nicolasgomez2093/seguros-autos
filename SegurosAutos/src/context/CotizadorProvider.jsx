import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  // En ves de crear un state para cada dato, vamos a crear un objeto que lo contenga a todos
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState('')
  const [resultado, setResultado] = useState(0)
  const [cargando, setCargando] = useState(false)

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    // Una base
    let resultado = 2000
    // Obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year)
    // Hay que restar el 3% por cada año, esa asignacion significa que resultado menos lo que esta despues del =
    resultado -= ((diferencia * 3) * resultado) / 100

    // Americano 15% Europeo 30% Asiatico 5%
    resultado *= calcularMarca(datos.marca)

    // Basico 20% Completo 50%
    resultado *= calcularPlan(datos.plan)

    // Formatear dinero
    resultado = formatearDinero(resultado)

    setCargando(true)
    setTimeout(() => {
        setResultado(resultado)
        setCargando(false)
    }, 1500)

  }

  return (
    <CotizadorContext.Provider value={{ handleChangeDatos, datos, setError, error, cotizarSeguro, resultado, cargando}}>
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
