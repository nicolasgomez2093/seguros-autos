import useCotizador from "../hooks/useCotizador";

function Error() {
    const { error } = useCotizador()
  return (
    <div className="bg-red-100 border border-red-400 text-red-600 text-center p-3 w-full font-bold text-md uppercase">{error}</div>
  )
}
export default Error