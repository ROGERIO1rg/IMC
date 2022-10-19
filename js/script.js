import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { IMC, notANumber } from "./utils.js"

// variávies 
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Fechar a janela de erro ao digitar no campo
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

// Arrow function
form.onsubmit = event => {
  // cancela o comportamento padrão do formulario
  event.preventDefault();
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(height)

  if (showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = IMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  // adciona o 'open' no botão e abre o modal
  Modal.open()
}


