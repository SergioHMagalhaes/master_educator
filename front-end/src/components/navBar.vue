<template>
    <div class="container">
        <header class="header">
            <nav class="navbar navbar-dark navbar-expand">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src="../assets/logo.svg" class="logo" alt="Logo"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <button class="buttonRegister">Cadastrar</button>
                    <button class="buttonLogin">Entrar</button>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar{
    background-color: black !important;
    color: #FFF;
    Z-Index: -1;
}
.logo{
    width: 40px;
}
#navbarNav{
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
</style>