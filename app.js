const inpArriba = document.querySelector("#inputArriba");
const inpAbajo = document.querySelector("#inputAbajo");
const optionArriba = document.querySelector("#optionCambio1");
const optionAbajo = document.querySelector("#optionCambio2");
const reset = document.querySelector("#reset");

const cambioaUSD = (unidadOrigen, cantidad) => {
  // Convertir moneda a USD
  let resultado;
  switch (unidadOrigen) {
    case "COP":
      resultado = cantidad * 0.00027;
      break;
    case "MXN":
      resultado = cantidad * 0.05;
      break;
    case "USD":
      resultado = cantidad * 1;
      break;
  }
  return resultado;
};

// Conversión a moneda final
const cambioFinal = (intermedio, monedaDestino) => {
  let resultado;
  switch (monedaDestino) {
    case "COP":
      resultado = intermedio * 3747;
      break;
    case "MXN":
      resultado = intermedio * 19.95;
      break;
    case "USD":
      resultado = intermedio * 1;
      break;
  }
  return resultado;
};

inpArriba.addEventListener("input", () => {
  if (optionArriba.value === optionAbajo.value) {
    inpAbajo.value = inpArriba.value;
  } else {
    let intermedio = cambioaUSD(optionArriba.value, inpArriba.value);
    inpAbajo.value = String(cambioFinal(intermedio, optionAbajo.value));
  }
});

inpAbajo.addEventListener("input", () => {
  if (optionArriba.value === optionAbajo.value) {
    inpArriba.value = inpAbajo.value;
  } else {
    let intermedio = cambioaUSD(optionAbajo.value, inpAbajo.value);
    inpArriba.value = String(cambioFinal(intermedio, optionArriba.value));
  }
});

reset.addEventListener("click", () => {
  inpAbajo.value = "";
  inpArriba.value = "";
});
