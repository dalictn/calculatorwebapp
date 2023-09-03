

// Calculator constructor

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
    console.log(number)
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }


  //Something is very wrong here, the calculator functions work but the display doesnt update or reflect for some reason.

  //TODO: Rewrite display function, figure out the issue in this block
  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
      console.log(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}


// Defining some const variables for the number and operand buttons
const numberButtons = document.querySelectorAll('[data-num]')
const operationButtons = document.querySelectorAll('[data-operand]')
const equalsButton = document.querySelectorAll('[data-equals]')
const previousOperandTextElement = document.querySelectorAll('div[data-previousoperand]')
const currentOperandTextElement = document.querySelectorAll('div[data-currentoperand]')
const acButton = document.querySelectorAll('[data-AC]')
const deleteButton = document.querySelectorAll('[data-delete]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log('Num button pressed')
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
      console.log('operation button pressed, event listened')
    })
})

equalsButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.compute()
    calculator.updateDisplay()
    console.log('Eq button pressed')
  })
})
acButton.forEach(button => {
button.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
    console.log('AC button pressed')
  })
  })


deleteButton.forEach(button => {
  button.addEventListener('click', () => {
      calculator.delete()
      calculator.updateDisplay()
      console.log('del button pressed')
    })
})