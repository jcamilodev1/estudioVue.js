class PlatziReactive{
  //Dependencias
  deps= new Map()
  constructor(options){
    this.origen = options.data()
    const self = this
    // Destino
    this.$data = new Proxy(this.origen, {
      get(target,name){
        if(Reflect.has(target, name)){
          self.track(target,name)
        return  Reflect.get(target,name)
        }
        console.warn("la propiedad", name, "no existe")
        return ""
      },
      set(target,name,value){
        if(!name == 'src:image'){
          Reflect.set(target,name)
          self.trigger(name)
        }
        name = name.slice(0, 3)
        Reflect.set(target,name,value)
        self.trigger(name)
      }
    })
  }
  track(target, name){
    
    if(!this.deps.has(name)){
      const effect = () =>{
        document.querySelectorAll(`*[p-text=${name}]`).forEach(el =>{
        this.pText(el,target,name)
      }) 
      document.querySelectorAll(`*[p-model=${name}]`).forEach(el => {
        this.pModel(el, target, name);
        
    });
      
    }
    this.deps.set(name,effect)
  }
  }
  trigger(name){
    const effect = this.deps.get(name)
    //console.log(name)
    effect()
  }
  mount(){
    document.querySelectorAll("*[p-text]").forEach(el => {
      this.pText(el,this.$data, el.getAttribute("p-text"))
    })
    document.querySelectorAll("*[p-model]").forEach(el => {
      let name = el.getAttribute("p-model")
      this.pModel(el,this.$data,name )
      el.addEventListener("input", ()=>{
        if(!name == 'src:image'){
          console.log(el.value)
          Reflect.set(this.$data, name, el.value)
        }
        name = name.slice(0, 3)
        console.log(el.value)
        Reflect.set(this.$data, name, el.value)
      })
    })
    document.querySelectorAll("*[p-bind]").forEach(el => {
      const [attr,name] = el.getAttribute("p-bind").match(/(\w+)/g)
      this.pBind(el,this.$data,name, attr)
    })
  }

  pText(el, target, name){
    el.innerText = Reflect.get(target,name)
  }
  pModel(el, target, name){
    //console.log(name)
    if(!name == 'src:image'){
      el.value = Reflect.get(target,name)
    }
    name = name.slice(0, 3)
    console.log(name)
    el.value = Reflect.get(target,name)
  }
  pBind(el,target,name,attr){
    console.log(target)
    el.setAttribute(attr,  Reflect.get(target, attr))  
    //el.src = Reflect.get(target, attr)
  }
}


var Platzi = {
  createApp(options){
    return new PlatziReactive(options)
  }
}