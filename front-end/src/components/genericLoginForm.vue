<template>
   <div class="container">
    <div class="blurLeft"></div>
    <div class="blurRight"></div>
    <main>
        <div class="formBox">
            <div class="cardForm">
                <h1>{{ title }}</h1>
                <div class="text-field" v-for="(input, index) in inputs" :key="index">
                    <label :for="input.name">{{ input.label }}</label>
                    <input :type="input.type" :name="input.name" :placeholder="input.label" v-model="modal[input.name]">
                </div>
                    <button v-if="login" class="submitButton" @click="signIn()">Fazer login</button>
                    <button v-else class="submitButton" @click="signUp()">Cadastra</button>
                    
                    <p v-if="login">Não tem uma conta? <a href="/signup">Cadastre-se</a></p>
                    <p v-else>Já tem uma conta? <a href="/login">Faça login</a></p>
            </div>
        </div>
    </main>
    
   </div>
</template>

<script>
import { signIn } from '../services/auth'
import api from '../services/request'
export default {
    data() {
        return {
            modal: {
                name: '',
                email: '',
                password: '' 
            }
        }
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        inputs:{
            type: Array,
            default() {
                return [];
            },
        },
        login: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        async signIn(){
            await signIn(this.modal.email, this.modal.password)
            this.$router.push({
                path: '/trilhas',
            })
        },
        async signUp(){
            await api.create('/user', this.modal)
            this.signIn()
        }
    }
}
</script>

<style>
p{
    color: #FFF
}

p > a{
    color: #a307db
}
p > a:link{
    color: #a307db
}
p > a:hover {
    color: #a307db
}
.blurLeft, .blurRight{
    position: absolute;
    background: #67267E;
    filter: blur(934.951px);
    Z-Index: -1
}
.blurLeft {
    width: 867.63px;
    height: 963px;
    left: -653px;
    top: -619px;
}
.blurRight{
    width: 700px;
    height: 600px;
    left: 653px;
    bottom: 0px;
}
main{
    display: flex;
    justify-content: center;
    align-items: center;
}
.formBox{
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cardForm{
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px 35px;
    background: rgba(55, 55, 55, 0.3);
    border-radius: 15px;
    box-shadow: 0px 20px 40px #00000056;
}
.cardForm > h1{
    color: #FFF;
    font-weight: 800px;
    margin: 0;
}
.text-field{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 10px 0px;
}
.text-field > input{
    width: 100%;
    border: none;
    padding: 15px;
    background: rgba(55, 55, 55, 0.3);
    border-radius: 5px;
    color: #f0ffffde;
    font-size: 12pt;
    box-shadow: 0px 20px 40px #00000056;
    outline: none;
    box-sizing: border-box;
}
.text-field > label{
    color: #f0ffffde;
    margin-bottom: 10px;
}
.text-field > input::placeholder{
    color: #f0ffff94;
}
.submitButton{
    width: 100%;
    padding: 16px 0px;
    margin: 25px;
    border: none;
    border-radius: 5px;
    outline: none;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    color: #2b134b;
    cursor: pointer;
    box-shadow: 0px 10px 40px -8px #00000056;
}

@media only screen and (max-width: 950px){
    .cardForm {
        width: 85%;
    }
}

@media only screen and (max-width: 600px){
    main {
        flex-direction: column;
    }
    .formBox{
        width: 100%;
        height: auto;
    }
    .cardForm{
        width: 90%;
    }
}
</style>