<template>
  <input
    type="text"
    class="form-control my-2"
    placeholder="Ingrese Nombre"
    v-model="tarea.nombre"
  />

  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="check-1"
      v-model="tarea.catageroias"
      value="JavaScript"
    />
    <label class="form-check-label" for="check-1">Javascript</label>
  </div>
  <div class="form-check form-check-inline">
    <input
      class="form-check-input"
      type="checkbox"
      id="check-2"
      v-model="tarea.catageroias"
      value="node.js"
    />
    <label class="form-check-label" for="check-2">Node.js</label>
  </div>

  <div class="my-2">
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="radio1"
        value="urgente"
        v-model.trim="tarea.estado"
      />
      <label class="form-check-label" for="radio1">Urgente</label>
    </div>
    <div class="form-check form-check-inline">
      <input
        class="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="radio2"
        value="relax"
        v-model="tarea.estado"
      />
      <label class="form-check-label" for="radio2">Relax</label>
    </div>
  </div>
  <div class="mt-2">
    <input type="number" class="form-control" v-model.number="tarea.numero" />
  </div>
  <button
    :disabled="toggleButton"
    class="btn btn-dark mt-2 btn-block"
    type="submit"
  >
    Porcesas
  </button>
</template>

<script>
export default {
  props: {
    tarea: Object,
  },
  computed: {
    toggleButton() {
      return this.tarea.nombre.trim() === "" ? true : false;
    },
  },
};
</script>

<style></style>
