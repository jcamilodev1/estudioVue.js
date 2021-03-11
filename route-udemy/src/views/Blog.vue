<template>
  <Titulo texto="Hola mundo Blog"></Titulo>
  <button @click="ConsumirApi()">Consumir API</button>
  <div v-for="item in ArrayBlog" :key="item.id">
    <router-link :to="`/blog/${item.id}`">
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
import Titulo from "@/components/Titulo";
export default {
  components: {
    Titulo,
  },
  data() {
    return {
      ArrayBlog: [],
    };
  },
  methods: {
    async ConsumirApi() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const Array = await data.json();
        this.ArrayBlog = Array;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.ConsumirApi();
  },
};
</script>

<style></style>
