<template>
  <div class="row">
    <div class="col-12" v-for="pais in paises" :key="pais.name">
      <Card :pais="pais" />
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import { computed, onMounted } from "@vue/runtime-core";
import { Store, useStore } from "vuex";

export default {
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const paises = computed(() => {
      return store.getters.topPaises;
    });
    onMounted(async () => {
      await store.dispatch("getPaises");
      await store.dispatch("filtrarRegion", "");
    });
    return {
      paises,
    };
  },
};
</script>

<style></style>
