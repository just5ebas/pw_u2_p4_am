const registrados = [];

const app = Vue.createApp({
  data() {
    return {
      estudiantesRegistrados: registrados,
      nombre: "",
      apellido: "",
      edad: "",
      ciudad: "",
    };
  },
  methods: {
    agregarEstudiante() {
      if (this.comprobarInformacion()) {
        const nuevoEstudiante = {
          nombre: this.nombre,
          apellido: this.apellido,
          edad: this.edad,
          ciudad: this.ciudad,
        };
        this.estudiantesRegistrados.push(nuevoEstudiante);
        this.nombre = "";
        this.apellido = "";
        this.edad = "";
        this.ciudad = "";
      }
    },
    comprobarInformacion() {
      if (
        this.nombre == "" ||
        this.apellido == "" ||
        this.edad == "" ||
        this.ciudad == ""
      ) {
        alert("Ingrese todos los datos");
        return false;
      } else {
        return true;
      }
    }
  }
});

app.mount("#miApp");
