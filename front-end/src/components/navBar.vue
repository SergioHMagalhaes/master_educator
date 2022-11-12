<template>
    <div class="container">
        <header class="header">
            <nav class="navbar navbar-expand-sm navbar-dark ">
                <div class="container-fluid">
                    <div class="divLogo">
                        <a class="navbar-brand" href="/"><img src="../assets/logo.svg" class="logo" alt="Logo"></a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                        <div class="buttonInsideMenu">
                            <a href="/signup" class="buttonRegister">Cadastrar</a>
                            <a href="/login" class="buttonLogin">Entrar</a>
                        </div>
                    </div>
                    <div class="buttonOutsideMenu">
                            <button class="buttonRegister"><a href="/signup">Cadastrar</a></button>
                            <button class="buttonLogin"><a href="/login">Entrar</a></button>
                    </div>
                    
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {

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
.logo{
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
</style>