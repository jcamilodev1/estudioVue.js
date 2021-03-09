<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categeroias</th>
        <th scope="col">Estado</th>
        <th scope="col">Numero</th>
        <th scope="col">Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tareas" :key="item.id">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.nombre }}</td>
        <td>
          <span v-for="(i, index) in item.catageroias" :key="index">
            {{ item.catageroias === index + 1 ? i : i + ", " }}
          </span>
        </td>
        <td>{{ item.estado }}</td>
        <td>{{ item.numero }}</td>
        <td>
          <button class="btn btn-danger btn-sm" @click="deleteTarea(item.id)">
            Delete
          </button>
          <router-link
            class="btn btn-warning btn-sm ml-2"
            :to="{
              name: 'Editar',
              params: {
                id: item.id,
              },
            }"
            >Editar</router-link
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["tareas"]),
  },
  methods: {
    ...mapActions(["deleteTarea"]),
  },
};
</script>

<style></style>
