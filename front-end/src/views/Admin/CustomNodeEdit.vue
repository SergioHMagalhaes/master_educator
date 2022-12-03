<template>
  <div @click="openModal">
    <Handle type="target" :position="position.Left"  :is-valid-connection="true" />
    <Handle type="target" :position="position.Bottom"  :is-valid-connection="true" />
    <Handle type="target" :position="position.Top"  :is-valid-connection="true" />
    <Handle type="target" :position="position.Right"  :is-valid-connection="true" />
    <div  >
      <p>{{ label }}</p>
    <hr>
    </div>
    <div class="reaction">
      <span class="edit" @click="openEdit"><i class="bi bi-pencil"></i></span>
    </div>

  </div>

</template>

<script>
import { Handle, Position } from '@vue-flow/core'
import { Modal } from 'bootstrap'
export default {
  components: {Handle},
    data() {
        return {
          position: Position,
          edit: false,
          modalBootstrap: '',
          modalBootstrapEdit: '',
        }
    },
    props: {
        id: {
            type: String,
           
        },
        label: {
            type: String,
           
        },
    },
    methods:{
      openModal(){
        if(!this.edit){
          this.modalBootstrap = new Modal(document.getElementById(`modalNode${this.id}`))
          this.modalBootstrap.show();
        }
      },
      openEdit(){
        this.edit = true
        this.modalBootstrapEdit= new Modal(document.getElementById(`editNode${this.id}`))
        this.modalBootstrapEdit.show();
        setTimeout(() => {
          this.edit = false
        }, 100);
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
.edit {
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>