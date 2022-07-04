const CALCULATOR_CONFIG = {
    0: { type: 'number', value: 0, title: '0' },
    1: { type: 'number', value: 1, title: '1' },
    4: { type: 'number', value: 4, title: '4' },
    5: { type: 'number', value: 5, title: '5' },
    6: { type: 'number', value: 6, title: '6' },
    2: { type: 'number', value: 2, title: '2' },
    3: { type: 'number', value: 3, title: '3' },
    7: { type: 'number', value: 7, title: '7' },
    8: { type: 'number', value: 8, title: '8' },
    9: { type: 'number', value: 9, title: '9' },
    plus: { 
        type: 'operator',
        value: 'plus',
        title: '+',
        handler: function(firstValue, seconValue) {
            return parseFloat(firstValue) + parseFloat(seconValue);
        },
    },
    equal:  { type: 'result', value: 'equal', title: '=' },

}

class Button {
    constructor({title, value, type}) {
        this.title = title;
        this.value = value;
        this.type = type;

        return this.render();
    }

    render() {
        const button = document.createElement('button');
        button.innerText = this.title;
        button.style = 'margin: 8px;';
        button.setAttribute('data-value', this.value);
        button.setAttribute('data-type', this.type);

        return button;
    }
}

class Screen {
    constructor() {
        this.value = 0;
        this.input;
    }

    render = () => {
        this.input = document.createElement('input');
        this.input.setAttribute('type', 'text');
        this.input.setAttribute('readonly', true);
        this.input.setAttribute('value', this.value);

        return this.input;
    }

    setValue = (newValue) => {
        this.input.setAttribute('value', newValue);
    }
}

class Calculator {
    constructor(config) {
        this.root = document.querySelector('#root');
        this.numPad;
        this.config = config;

        this.screen = new Screen();

        this.firstOperand = '';
        this.secondOperand = '';
        this.operation = null;


        this.init();
    }

    init = () => {
        this.root.appendChild(this.screen.render());
        this.numPad = document.createElement('div');
        this.numPad.classList.add('numpud');

        Object.keys(this.config).forEach((key) => {
            this.numPad.appendChild(new Button(this.config[key]));
        });

        this.root.appendChild(this.numPad);

        this.numPad.addEventListener('click', event => {
            if(event.target.hasAttribute('data-value')) {
                const type = event.target.getAttribute('data-type');
                const value = event.target.getAttribute('data-value');

                switch(type) {
                    case 'number':
                        if (!this.operation) {
                            this.setOperand(value, 'firstOperand');
                        } else {
                            this.setOperand(value, 'secondOperand');
                        }
                        break;
                    case 'operator':
                        if (this.firstOperand) {
                            this.operation = value;
                        }
                        break;
                    case 'result':
                        this.makeResult(this.firstOperand, this.secondOperand, this.operation);
                        break;
                    default:
                        return;
                }
            }
        });
    }

    setOperand = (anotherValue, properyName) => {
        this[properyName] += anotherValue;
        this.screen.setValue(this[properyName]);
    }

    makeResult = (firstValue, secondValue, operation) => {
        const handler = this.config[operation].handler;

        if (handler) {
            this.screen.setValue(handler(firstValue, secondValue));
        }
    }
}

new Calculator(CALCULATOR_CONFIG);
