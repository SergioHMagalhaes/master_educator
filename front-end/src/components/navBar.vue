<template>
    <div class="container">
        <header class="header">
            <nav class="navbar navbar-expand-sm navbar-dark ">
                <div class="container-fluid">
                    <div class="divLogo">
                        <a class="navbar-brand" href="/"><img src="../assets/logo.svg" class="logo" alt="Logo"></a>
                    </div>
                    <button v-if="!logged" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                    
                    <div class="collapse navbar-collapse navbarNav" id="navbarSupportedContent" >
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active"  href="/">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/trilhas">Trilhas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/premium">Premium</a>
                            </li>
                        </ul>
                        <div class="buttonInsideMenu" v-if="!logged">
                            <a href="/signup" class="buttonRegister">Cadastrar</a>
                            <a href="/login" class="buttonLogin">Entrar</a>
                        </div>
                    </div>
                    <div class="buttonOutsideMenu" v-if="!logged">
                            <button class="buttonRegister"><a href="/signup">Cadastrar</a></button>
                            <button class="buttonLogin"><a href="/login">Entrar</a></button>
                    </div>
                    <div class="logged dropdown" v-if="logged">
                        <img src="https://ovicio.com.br/wp-content/uploads/2021/07/20210712-one-piece-zoro-wano-postcover-555x555.jpg"
                            class="rounded-circle avatar" alt="Avatar" type="button" id="dropdownMenu"
                            data-bs-toggle="dropdown" aria-expanded="false" />
                        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="dropdownMenu">
                            <li class="dropdown-item nav-dropdown"><a class="nav-link active"  href="/">Inicio</a></li>
                            <li class="dropdown-item nav-dropdown"><a class="nav-link" href="/trilhas">Trilhas</a></li>
                            <li class="dropdown-item nav-dropdown"><a class="nav-link" href="/premium">Premium</a></li>
                            <li><a class="dropdown-item" href="#">Minha lista</a></li>
                            <li><a class="dropdown-item" href="#">Configurações de perfil</a></li>
                            <li v-if="user.userGroup == 'Super'"><a class="dropdown-item" href="#">Cadastrar trilha</a></li>
                            <li class="dropdown-item logOut" @click="logOut">Sair</li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
import { isSignedIn, signOut } from '../services/auth'
export default {
    data() {
        return {
            logged: false,
            user: {}
        }
    },
    created(){
        this.isLoggedIn()
    },
    watch: {
      '$route' () {
        this.isLoggedIn()
      }
    },
    methods: {
        isLoggedIn(){
            const { isLoggedIn, user, /*decoded*/ } = isSignedIn()
            if(isLoggedIn){
                const userObject = JSON.parse(user)
                this.user = userObject
                this.logged = true
            } else{
                this.logged = false
            }
        },
        logOut(){
            signOut()
            this.$router.go(this.$router.currentRoute)
        }
    }
}
</script>

<style scoped>
a{
    color:#FFFFFFFF;
    text-decoration: inherit;
}
a:link{
    color: #FFFFFFFF;
    text-decoration: inherit;
}
a:hover{
    color: #FFFFFFFF;
    text-decoration: inherit;
}
.collapse{
    margin: auto;
}
.navbar{
    color: #FFF;
}
.logo, .avatar{
    width: 40px;
}
.divLogo{
    width: 200px;
}
.navbarNav{

    display: flex;
    justify-content: center;
}

.buttonRegister, .buttonLogin{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 90px;
    height: 20px;
    background: linear-gradient(98.62deg, #FFAC30 -27.91%, #FD01A7 102.96%);
    border-radius: 10px;
    color: #FFF;
    margin-right: 10px;
}

.buttonLogin{
    background: rgba(0, 0, 0, 0);
    border-color: #FD01A7;
}

.buttonInsideMenu{
    display: none;
}
.buttonOutsideMenu{
    display: flex;
}
.dropdown-menu{
    background: rgb(55, 55, 55);
}
.dropdown-item:hover{
    background: rgb(55, 55, 55);
}
.logOut{
    cursor:pointer;
    color: #FFF;
}
.nav-dropdown{
    display: none;
}

@media screen and (max-width: 770px){
    .navbarNav{
        display: block;
    }
    .buttonInsideMenu{
        display: flex;
    }
    .buttonOutsideMenu{
        display: none;
    }

}
@media screen and (max-width: 576px){
    .nav-dropdown{
    display: block;
    }

}
</style>