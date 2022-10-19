export function notANumber(value) {
  return isNaN(value) || value == ""
}

// função para fazer o calculo 
export function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}