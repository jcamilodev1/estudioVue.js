Vue.component("coin-detail",{
  props:['coin'],
  data(){
    return {
      showPrices: false,
      value: 0,
    

    }
  },
  computed: {
    converted(){
      if(!this.value){
        return 0
      }
      return this.value / this.coin.pricesActually
    }
  },
  methods: {
    toggleShowPrices(){
      this.showPrices = !this.showPrices
    }
  },
  template: `<div>
  <img v-bind:src="coin.img" v-bind:alt="coin.name" v-on:mouseover='toggleShowPrices' v-on:mouseout="toggleShowPrices">
  <h1 v-bind:class="coin.changePercent >0 ? 'green' : 'red' " >{{name}}
    <span v-show="coin.changePercent > 0">subio</span>
    <span v-show="coin.changePercent < 0">bajo</span>
    <span v-show="coin.changePercent === 0">No pasa nada</span></h1>
    <span v-on:click="toggleShowPrices">{{showPrices ? 'ocultar precios' : 'mostrar precios'}}</span>
    <input type="number" v-model="value">
    <span>{{converted}}</span>
    <ul v-show="showPrices">
        <li class="uppercase"
        v-bind:class="{orange : p.value == coin.pricesActually, red: p.value < coin.pricesActually , green: p.value > pricesActually}"
        v-for="(p,i) in pricesWithDays" 
        v-bind:key="p.day"
        >{{i}}--{{p.value}}--{{p.day}}</li> <!-- manejo de arreglos y obejtos la porpiedad key es recomendable para no perder traqueo-->
      </ul>
</div>`
})


const app = new Vue ({
  el: '#app',

  data(){
    return{
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: -10,
      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 9400 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
    ],
    value:0,
    color: 'f4f4f4',
    pricesActually: 8400,
    showPrices: false,
    }
  },
  computed: {
    title(){
      return `${this.name} -- ${this.symbol}`
    },
    converted(){
      if(!this.value){
        return 0
      }
      return this.value / this.pricesActually
    }
  },
  watch:{
    showPrices(newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  },
  methods:{
    toggleShowPrices(){
      this.showPrices = !this.showPrices
      this.color = this.color.split("").reverse().join("")
    }
  },

})