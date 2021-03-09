"use strict";

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