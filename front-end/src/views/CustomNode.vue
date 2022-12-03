<template>
  <div @click="openModal">
    <div  >
      <p>{{ label }}</p>
    <hr>
    </div>
    <i v-if="edit" @click="openEdit" class="bi bi-pencil "></i>
    <div class="reaction" v-else-if="uncheck">
      <span class="uncheck" @click="check"><i class="bi bi-check-circle"></i></span>
    </div>
    <div class="reaction" v-else>
      <span class="check" @click="check"><i class="bi bi-check-circle-fill"></i></span>
    </div>
  </div>

</template>

<script>
import { Modal } from 'bootstrap'
export default {
    data() {
        return {
          modalBootstrap: '',
          modalBootstrapEdit: '',
          uncheck: true,
          click: false
        }
    },
    props: {
        id: {
            type: String,
           
        },
        label: {
            type: String,
           
        },
        edit: {
          type: Boolean,
          default: false,
        },
    },
    methods:{
      openModal(){
        if(!this.click){
          this.modalBootstrap = new Modal(document.getElementById(`modalNode${this.id}`))
          this.modalBootstrap.show();
        }
      },
      openEdit(){
        this.modalBootstrapEdit= new Modal(document.getElementById(`editNode${this.id}`))
        this.modalBootstrapEdit.show();
      },
      check(){
        console.log(this.edit)
        this.click = true
        this.uncheck = !this.uncheck 
        setTimeout(() => {
          this.click = false
        },100)
            
      },
    }
    
}
</script>

<style>
p{
    margin-top: 7px;
    text-align: center;
}
.reaction {
    margin: auto;
    width: 24px;
    position: relative;
    top: -8px;
    cursor: pointer;
    font-size: 24px;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}
.check, .uncheck {
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.check {
  color: #00c86f;
  animation: check 0.3s ease-in forwards;
  background: #13f8862b;
}
.uncheck {
  animation: uncheck 0.17s ease-in reverse forwards;
  border-radius: 50%;
  background: #43434338;
}
.checkLine{
  color: #00c86f;
}
@keyframes check {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes uncheck {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>