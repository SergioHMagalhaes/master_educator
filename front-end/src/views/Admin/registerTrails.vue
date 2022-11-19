<template>
  <div :style="`height: ${height}vh; width: 99vw; `">
    <div class="d-flex justify-content-center">
      <input class="title" type="text" name="title" placeholder="Título" v-model="title">
    </div>
    <VueFlow 
    v-model="elements" 
    :node-types="nodeTypes" 
    :default-zoom="1" 
    :max-zoom="1" 
    :zoom-on-scroll="false"  
    :preventScrolling="false" 
    :fit-view-on-init="true"
    @connect="onConnect"
    @pane-ready="onPaneReady" 
    >
      <Background :gap="40" pattern-color="#81818a" />
    <template #node-input="id" >
      <CustomNode  :id="id" :label="label" />
    </template>
    <Panel :position="panelPosition.TopLeft" class="buttonGroup">
      <button type="button" @click="addNode"><i class="bi bi-node-plus"></i></button>
      <button type="button" @click="handleResize"><i class="bi bi-aspect-ratio"></i></button>
      <button type="button" @click="heightAdd"><i class="bi bi-zoom-in"></i></button>
      <button type="button" @click="heightRemove"><i class="bi bi-zoom-out"></i></button>
      <button type="button" data-bs-toggle="modal" data-bs-target="#modalCreate">Criar</button>
    </Panel>
    </VueFlow>

    <div v-for="(node, index) in elements" :key="index">
      <div :id="'modalNode' + node.id" class="modal" tabindex="-1">
        <div class="modal-dialog modal-marked">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <textarea class="textMarked" v-model="input[node.id]" @input="update(node.id)"></textarea>
              <div class="htmlText" v-html="text[node.id]"></div>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>

      <div :id="'editNode' + node.id" class="modal" tabindex="-1" data-bs-target="#staticBackdrop">
        <div class="modal-dialog modalEdit">
          <div class="modal-content modalContentEdit">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body modalBodyEdit">
              <p>Nome</p>
              <input id="name" type="text" v-model="node.label" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="modalCreate" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-block">
              <p class="text-center my-4">Antes de salvar a trilha é necessário definir uma imagem</p>
              <div v-if="!image" class="drop" @drop.prevent="uploadImg" @dragenter.prevent @dragover.prevent>
                <i class="bi bi-images"></i>
                <p>Arraste e solte a imagem da trilha aqui.</p>
                <p>Ou</p>
                <label for="file-upload">Procure o arquivo</label>
                <input type="file" id="file-upload" class="file-input" multiple @change="uploadImg"/>
              </div>
              <div v-else class="d-flex justify-content-center" >
                <img :src="image" class="w-25"/>
                <button type="button" class="btn-close bg-secondary" @click="deleteImg"></button>
              </div>
            </div>
            <div class="modal-footer">
              <button data-bs-dismiss="modal" aria-label="Close">Cancelar</button>
              <button v-if="!image" class="createButtonDisabled" disabled>Criar</button>
              <button v-else class="createButton" @click="create">Criar</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { VueFlow, addEdge } from '@vue-flow/core'
import { Background, Panel, PanelPosition } from '@vue-flow/additional-components'
import { defineComponent, markRaw  } from 'vue'
import CustomNode from './CustomNodeEdit.vue'
import { marked } from 'marked'
import request from '@/services/request'

export default defineComponent({
  components: { VueFlow, CustomNode, Background, Panel },
  data() {  
    return {
      height: 100,
      panelPosition: PanelPosition,
      instance: null,
      nodeTypes: {
        custom: markRaw(CustomNode),
      },
      editModal: {
        label: ''
      },
      image: '',
      input: [],
      text: [],
      title: '',
      elements: [ ]
    }
  },

  methods: {
    update(nodeId) {
      this.text[nodeId] = marked.parse(this.input[nodeId])
    },

    onPaneReady(vueFlowInstance) {
      vueFlowInstance.fitView()
      this.instance = vueFlowInstance
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },

    async handleResize() {     
      await this.instance.fitView({ duration: 1000, padding: 0.1 })
    },

    addNode(){
      const nodeId = (this.elements.length + 1).toString()
      const newNode = {
        id: nodeId,
        label: 'Novo',
        position: { x: 0, y: 0 },
        class: 'flowCard',
        type: 'custom',
      }
      this.instance.addNodes([newNode])
      this.handleResize()
    },

    async heightAdd() {
        let object = this.instance.toObject()
        while (object.zoom < 1) {
          object = this.instance.toObject()
          await new Promise((resolve, reject) => {
              try {
                setTimeout(() => {
                  this.instance.zoomIn({
                    duration: 1000
                  })
                  resolve()
                }, 1000)

              } catch (err) {
                reject(err)
              }
            })
            this.height += 10
          }
    },
    async heightRemove() {
      let object = this.instance.toObject()
      while (object.zoom < 1) {
        object = this.instance.toObject()
        await new Promise((resolve, reject) => {
          try {
            setTimeout(() => {
              this.instance.zoomOut({
                duration: 1000
              })
              resolve()
            }, 1000)

          } catch (err) {
            reject(err)
          }
        })
        this.height -= 10
      }
    },

    onConnect(params) {
      addEdge(params, this.elements)
    },

    async uploadImg(event){
      let itemArray 
      if(event.type == 'change') itemArray = [...event.target.files];
      else itemArray = [...event.dataTransfer.files];
      const item = itemArray.find((i) => i.type.startsWith('image/'))
      if(item){
        const result = await request.imageUpload(item)
        this.image = result
      }
    },
    deleteImg(){
      this.image = ''
    },
    async create(){
      const trail = {
        name: this.title,
        content: this.input,
        nodes: this.elements,
        image: this.image
      }
      await request.create('/trails', trail)
    }
  }

})
</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';

.title{
  width: 400px;
  border: none;
  padding: 15px;
  background: rgba(55, 55, 55, 0.3);
  border-radius: 5px;
  color: #f0ffffde;
  font-size: 12pt;
  box-shadow: 0px 20px 40px #00000056;
  outline: none;
  box-sizing: border-box;
  text-align: center;
}
.flowCard{
  box-sizing: border-box;
  width: 180px;
  height: 90px;
  background: #1E1D25;
  border: 1px solid #8C8C8C;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  color: #FFF
}
.modal-marked {
  color: #FFF;
  min-width: 100%;
	position: absolute;
  right: -1px;
  top: -28px;
  border-radius: 0px !important;
}
.modal-content {
  background: #1E1D25;
}
.modal-marked > .modal-content {
	border-radius: 0;
	min-height: 100vh;
}
.modal-header{
  padding: 7px;
  border-color: #454355;
}
.modal-header button{
  border: solid;
  border-width: 0 0 0 2px;
  border-color: #454355;
  border-radius: 0;
  width: 40px;
  height: 40px;
}
.modal-footer{
  border-color: #454355;
}
.modal-body{
  color: #FFF;
  display: flex;
}
.textMarked{
  display: flex;
  flex-grow: 1;
  margin-right: 24px;
}
.htmlText{
  width: 466px;
  margin: 0 16px;
  padding: 16px;
  flex-grow: 0;
  border: solid;
  border-color: #454355;
  border-width: 0 0 0 2px;
}
.modalContentEdit{
  border-radius: 15px;
	min-height: 200px;
  background: #1E1D25;
}
.modalEdit {
  color: #FFF;
  width: 250px;
	position: absolute;
  right: 25px;
  top: 25px;
  border-radius: 0px !important;
}
.modalBodyEdit{
  display: block;
  margin: auto;
}
.drop {
    border-radius: 10px;
    border: 3px dashed #aaaaaa;
    display: grid;
    width: 100%;
    place-content: center;
    padding: 2rem;
    box-sizing: border-box;
    display: grid;
    place-items: center;
}
.drop i{
  font-size: 60px;
}
.drop label {
  background: linear-gradient(98.62deg, #FFAC30 -27.91%, #FD01A7 102.96%);
  padding: 0.7rem 1.8rem;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
}
.file-input {
  display: none;
}

.modal-footer button{
  width: 80px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5e5e69;
  border-radius: 10px;
  color: #f0ffffde;
  border: none;
  box-shadow: 0px 5px 5px #00000056;
}
.createButtonDisabled{
  background: linear-gradient(98.62deg, #f7c377 -27.91%, #fd81d4 102.96%);
}
.createButton{
  background: linear-gradient(98.62deg, #FFAC30 -27.91%, #FD01A7 102.96%);
}

</style>

<style scoped>


.buttonGroup {
    display: grid;
    background-color: #1E1D25;
    border-radius: 10px;
    min-width: 65px;
    justify-content: center;

}

.buttonGroup > button {
    margin-block: 10px;
    margin-left: 10%;
    width: 46px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1b1b1e;
    padding: 20px;
    border-radius: 10px;
    color: #f0ffffde;
    border: none;
    box-shadow: 0px 5px 5px #00000056;
    margin-right: 10px;
}
</style>