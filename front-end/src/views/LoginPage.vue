<template>
    <genericLoginForm title='Faça login' :inputs='inputs' :login='true'/>
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
                {name: 'email', label:'E-mail'},
                {name: 'password', label:'Senha'}
            ]
        }
    }
}
</script>

<style>

</style>