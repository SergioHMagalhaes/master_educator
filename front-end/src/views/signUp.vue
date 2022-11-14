<template>
    <genericLoginForm title='Inscreva-se' :inputs='inputs'/>
</template>

<script>
import genericLoginForm from '../components/genericLoginForm.vue'
export default {
    components: {
        genericLoginForm
    },
    data(){
        return {
            inputs: [
                {name: 'name', label:'Nome', type: 'text'},
                {name: 'email', label:'E-mail', type: 'email'},
                {name: 'password', label:'Senha', type: 'password'}
            ]
        }
    }
}
</script>

<style>

</style>