

// Defining some const variables for the number and operand buttons
const numberButtons = document.querySelectorAll('[data-num]')
const operationButtons = document.querySelectorAll('[data-operand]')
const equalsButton = document.querySelectorAll('[data-equals]')
const previousOperandTextElement = document.querySelectorAll('[data-previousop]')
const currentOperandTextElement = document.querySelectorAll('[data-currentop]')
const acButton = document.querySelectorAll('[data-AC]')
const deleteButton = document.querySelectorAll('[data-delete]')


// Calculator constructor

class Calculator {
   constructor(previousOperandTextElement, currentOperandTextElement) {
     this.previousOperandTextElement = previousOperandTextElement
     this.currentOperandTextElement = currentOperandTextElement
     this.clear()
   } 

   clear () {
    this.currentOperandTextElement = ''
    this.previousOperandTextElement = ''
    this.operand = undefined
  }
  
  delete () {
    
  }
  
  appendNumber (number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  
  chooseOperation(operation) {
  
  }
  
  compute() {
  
  }
  
  
  updateDisplay () {
    this.data-currentop.innerText
  }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)



numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNum(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
