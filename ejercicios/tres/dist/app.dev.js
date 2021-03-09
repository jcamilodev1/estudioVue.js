"use strict";

Vue.component("coin-detail", {
  props: ['coin'],
  data: function data() {
    return {
      showPrices: false,
      value: 0
    };
  },
  computed: {
    converted: function converted() {
      if (!this.value) {
        return 0;
      }

      return this.value / this.coin.pricesActually;
    }
  },
  methods: {
    toggleShowPrices: function toggleShowPrices() {
      this.showPrices = !this.showPrices;
    }
  },
  template: "<div>\n  <img v-bind:src=\"coin.img\" v-bind:alt=\"coin.name\" v-on:mouseover='toggleShowPrices' v-on:mouseout=\"toggleShowPrices\">\n  <h1 v-bind:class=\"coin.changePercent >0 ? 'green' : 'red' \" >{{name}}\n    <span v-show=\"coin.changePercent > 0\">subio</span>\n    <span v-show=\"coin.changePercent < 0\">bajo</span>\n    <span v-show=\"coin.changePercent === 0\">No pasa nada</span></h1>\n    <span v-on:click=\"toggleShowPrices\">{{showPrices ? 'ocultar precios' : 'mostrar precios'}}</span>\n    <input type=\"number\" v-model=\"value\">\n    <span>{{converted}}</span>\n    <ul v-show=\"showPrices\">\n        <li class=\"uppercase\"\n        v-bind:class=\"{orange : p.value == coin.pricesActually, red: p.value < coin.pricesActually , green: p.value > pricesActually}\"\n        v-for=\"(p,i) in pricesWithDays\" \n        v-bind:key=\"p.day\"\n        >{{i}}--{{p.value}}--{{p.day}}</li> <!-- manejo de arreglos y obejtos la porpiedad key es recomendable para no perder traqueo-->\n      </ul>\n</div>"
});
var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: -10,
      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
      pricesWithDays: [{
        day: 'Lunes',
        value: 8400
      }, {
        day: 'Martes',
        value: 7900
      }, {
        day: 'Miercoles',
        value: 8200
      }, {
        day: 'Jueves',
        value: 9000
      }, {
        day: 'Viernes',
        value: 9400
      }, {
        day: 'Sabado',
        value: 10000
      }, {
        day: 'Domingo',
        value: 10200
      }],
      value: 0,
      color: 'f4f4f4',
      pricesActually: 8400,
      showPrices: false
    };
  },
  computed: {
    title: function title() {
      return "".concat(this.name, " -- ").concat(this.symbol);
    },
    converted: function converted() {
      if (!this.value) {
        return 0;
      }

      return this.value / this.pricesActually;
    }
  },
  watch: {
    showPrices: function showPrices(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  methods: {
    toggleShowPrices: function toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.color = this.color.split("").reverse().join("");
    }
  }
});