<template>
  <div :style="`height: ${height}vh; width: 99vw; `">
    <VueFlow @pane-ready="onPaneReady" v-model="elements" :node-types="nodeTypes" :default-zoom="1" :max-zoom="1" :zoom-on-scroll="false" :pan-on-drag="false" :nodes-draggable="false" :preventScrolling="false" :fit-view-on-init="true">
      <h1 class="text-white text-center">{{title}}</h1>
      <Background :gap="40" pattern-color="#81818a" />
    <template #node-input="id" >
      <CustomNode  :id="id" :label="label" />
    </template>
    </VueFlow>

    <div v-for="node in elements" :key="node.id">
      <div :id="'modalNode' + node.id" class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="htmlText" v-html="text[node.id]"></div>
            </div>
            <div class="modal-footer">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueFlow } from '@vue-flow/core'
import { Background } from '@vue-flow/additional-components'
import { defineComponent, markRaw  } from 'vue'
import CustomNode from './CustomNode.vue'
import { marked } from 'marked'
import request from '@/services/request'

export default defineComponent({
  components: { VueFlow, CustomNode, Background },
  data() {  
    return {
      trails: '',
      text: [],
      title: '',
      instance: null,
      height: 100,
      nodeTypes: {
        custom: markRaw(CustomNode),
      },
      elements: []
    }
  },
  created: async function () {
    window.scroll(0, 0)
  },
  methods: {
    async onPaneReady(vueFlowInstance) {
      await this.retrieveTrail()
      this.elements = this.trails.nodes
      vueFlowInstance.fitView()
      this.instance = vueFlowInstance
      window.addEventListener('resize', this.handleResize);
      setTimeout(()=>{
        this.handleResize();
      },1)
      
    },

    handleResize() {
      this.instance.fitView({ duration: 1000, padding: 0.5 })
      this.instance.fitView({ zoomLevel: 1, duration: 1000, })
    },

    async retrieveTrail(){
      const id = this.$route.query.id
      const result = await request.list(`trails/retrieve/${id}`)
      this.trails = result.data
      this.height = result.data.height
      for (const index in this.trails.content) {
        if(this.trails.content[index])
        this.text[index] = marked.parse(this.trails.content[index]) 
      }
    }
  }

})
</script>

<style>
@import '@vue-flow/core/dist/style.css';
@import '@vue-flow/core/dist/theme-default.css';

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
.modal-dialog {
  color: #FFF;
  width: 500px;
	position: absolute;
  right: -1px;
  top: -28px;
  border-radius: 0px !important;
}
.modal-content {
	border-radius: 15px 0 0 0;
	min-height: 100vh;
  background: #1E1D25;
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
	
</style>