<template>
  <div>
    <h2>Tipo de cuenta: {{ cuenta }}</h2>
    <h2>Saldo: {{ saldo }}</h2>
    <h2>Cuenta {{ estado ? "activa" : "inactiva" }}</h2>
    <ul>
      <li v-for="(item, index) in servicios" :key="index">
        {{ index }}-{{ item }}
      </li>
    </ul>
    <AccionSaldo texto="Aumentar" @accion="aumentar"></AccionSaldo>
    <AccionSaldo
      texto="Disminuir"
      @accion="disminuir"
      :disabled="disable"
    ></AccionSaldo>
  </div>
</template>

<script>
import AccionSaldo from "@/components/AccionSaldo";
export default {
  name: "Cuenta",
  components: {
    AccionSaldo,
  },
  data() {
    return {
      cuenta: "Visa",
      saldo: 1000,
      estado: true,
      servicios: ["giro", "abono", "transferencia"],
    };
  },
  methods: {
    aumentar() {
      this.saldo += 100;
    },
    disminuir() {
      if (this.saldo === 0) {
        alert("Saldo agotado");
        return;
      }
      this.saldo -= 100;
    },
  },
  computed: {
    disable() {
      return this.saldo === 0 ? true : false;
    },
  },
};
</script>

<style></style>
