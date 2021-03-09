<template>
  <Titulo texto="Ruta con parametros"></Titulo>
  <h2>Parametro: {{ $route.params.id }}</h2>
  <h3>{{ articulo.id }}-- {{ articulo.title }}</h3>
  <p>{{ articulo.body }}</p>
</template>

<script>
import Titulo from "../components/Titulo.vue";

export default {
  components: {
    Titulo,
  },
  data() {
    return {
      articulo: {},
    };
  },
  methods: {
    async consumirAPi() {
      try {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        );
        const res = await data.json();
        this.articulo = res;
        console.log(this.articulo);
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.consumirAPi();
  },
};
</script>

<style></style>
