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
                {name: 'name', label:'Nome'},
                {name: 'email', label:'E-mail'},
                {name: 'password', label:'Senha'}
            ]
        }
    }
}
</script>

<style>

</style>