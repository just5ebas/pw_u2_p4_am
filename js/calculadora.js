const app = Vue.createApp({
  data() {
    return {
      num: "",
      igual: false,
      label: "",
    };
  },
  methods: {
    leerNumero(numero) {
      if (this.igual) {
        this.label = "" + numero;
        this.igual = false;
      } else {
        this.label = this.label + numero;
      }
    },
    operar(op) {
      if (op == "=") {
        this.label = eval(this.num + this.label);

        this.num = "";
        this.igual = true;
      } else {
        this.num += this.label + op;
        this.label = "";
      }
    },
  }
});

app.mount("#calculadora");

