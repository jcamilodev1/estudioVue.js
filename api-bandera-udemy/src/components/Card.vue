<template>
  <div class="card mb-2">
    <div class="card-body">
      <h5 class="text-center">{{ pais.name }}</h5>
      <p class="text-center">
        <img
          :src="pais.flag"
          class="img-fluid w-50"
          :alt="`Bandera de ${pais.name}`"
        />
      </p>
      <p class="card-text">
        <span class="badge bg-info d-block mb-1 p-3"
          >Population: {{ formato(pais.population) }}</span
        >
        <span class="badge bg-primary d-block mb-1"
          >Nombre nativo: {{ pais.nativeName }}</span
        >
        <span class="badge bg-primary d-block mb-1"
          >Capital: {{ pais.capital }}</span
        >
        <span class="badge bg-primary d-block mb-1"
          >Region: {{ pais.region }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pais"],
  setup() {
    const formato = (num) => {
      return new Intl.NumberFormat("de-DE").format(num);
    };
    return {
      formato,
    };
  },
};
</script>
