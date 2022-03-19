export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;
    if(marca === "Europeo") {
        incremento = 1.30
    } else if(marca ==="Americano"){
        incremento = 1.15
    } else {
        incremento = 1.05
    }
  return incremento;
}

export function calcularPlan(plan) {
  return plan === "1" ? 1.2 : 1.5;
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
