const app = new Vue({
  el: "#app",
  data: {
    mensaje: "hola soy camilo",
  },
  computed: {
    invertido() {
      return this.mensaje.split("").reverse().join("");
    },
  },
});
