Vue.component('modal', {
  data(){
    return{
    title: 'Hola Vue',
  }},
  methods:{
    close(){
      this.$emit('close')
    }
  },
  template: `
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot name="title"></slot>
          <slot name="body"></slot>  
          <footer>
            <button v-on:click="close">Cerrar</button>
          </footer>
        </div>
      </div>
    </div>`
})


const app = new Vue({
  el: '#app',
  data(){
    return{
      showModal: false
    }
  },
  methods : {
    toggleModal(){
      this.showModal = !this.showModal
    }
  }
})