class Calculator {
  constructor() {
    this.display = document.getElementById('display');
    this.expression = '';
    this.history = []; // initialise la liste d'historique
  }
  
  addDigit(digit) {
    this.expression += digit;
    this.history.push(this.expression); // ajoute l'expression courante à l'historique
    this.display.value = this.expression;
  }

  addDecimal() {
    if (!this.expression.includes('.')) {
      this.expression += '.';
      this.history.push(this.expression); // ajoute l'expression courante à l'historique
      this.display.value = this.expression;
    }
  }

  addOperator(operator) {
    if (this.expression.endsWith('+') || this.expression.endsWith('-') || this.expression.endsWith('*') || this.expression.endsWith('/')) {
      this.expression = this.expression.slice(0, -1) + operator;
      this.history.push(this.expression); // ajoute l'expression courante à l'historique
      this.display.value = this.expression;
    } else {
      this.expression += operator;
      this.history.push(this.expression); // ajoute l'expression courante à l'historique
      this.display.value = this.expression;
    }
  }

  clearDisplay() {
    this.expression = '';
    this.history = []; // efface l'historique
    this.display.value = this.expression;
  }

  deleteLast() {
    this.expression = this.expression.slice(0, -1);
    this.history.push(this.expression); // ajoute l'expression courante à l'historique
    this.display.value = this.expression;
  }

  calculate() {
    try {
      const result = eval(this.expression);
      this.expression = result.toString();
      this.history.push(this.expression); // ajoute l'expression courante à l'historique
      this.display.value = this.expression;
    } catch (error) {
      alert('Invalid Expression');
      this.clearDisplay();
    }
  }
  
  undo() {
    if (this.history.length > 0) {
      this.history.pop(); // supprime le dernier élément de l'historique
      if (this.history.length > 0) {
        this.expression = this.history[this.history.length - 1]; // utilise le dernier élément restant de l'historique pour mettre à jour l'expression
      } else {
        this.expression = ''; // efface l'expression si l'historique est vide
      }
      this.display.value = this.expression;
    }
  }
}

const calculator = new Calculator();
