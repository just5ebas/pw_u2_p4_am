const app = Vue.createApp({
  data() {
    return {
      num1: 0,
      num2: 0,
      label: "",
      operacion: "",
      igual: false
    };
  },
  methods: {
    leerNumero(numero) {
      if (this.igual) {
        this.label = "" + numero;
        this.igual = false;
        this.num1 = 0;
      } else {
        this.label = this.label + numero;
      }
    },
    operar(op) {
      if (this.num1 == 0) {
        this.num1 = parseInt(this.label);
      } else {
        this.num2 = parseInt(this.label);
      }
      if (op != "=") {
        this.operacion = op;
        this.label = "";
      } else {
        this.num1 = this.calcular;
        this.num2 = 0;
        this.operacion = "";
        this.label = "" + this.num1;
        this.igual = true;
      }
    },
  },
  computed: {
    calcular() {
      switch (this.operacion) {
        case "+":
          return this.num1 + this.num2;
        case "-":
          return this.num1 - this.num2;
        case "*":
          return this.num1 * this.num2;
        case "/":
          return this.num1 / this.num2;
        default:
          return 0
      }
    }
  }
});

app.mount("#calculadora");

