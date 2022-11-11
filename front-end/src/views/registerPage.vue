<template>
    <div class="container">
        <div class="col-4 col-md-4">
            <form class="formulario">
                <h1 class="label">Cadastre-se</h1>
                <div class="mb-3">
                    <label for="nome_id" class="form-label label">Nome</label>
                    <input type="email" class="form-control" id="nome_id" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="email_id" class="form-labe label">Email </label>
                    <input type="email" class="form-control" id="email_id" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="senha_id" class="form-label label">Senha</label>
                    <input type="password" class="form-control" id="senha_id">
                </div>
                <button type="submit" class="btn botao">Cadastra</button>
            </form>
        </div>
    </div>
</template>
<script>

export default {

}
</script>
<style scoped>
    .formulario {
        background-color: rgba(55, 55, 55, 0.3);
        border-radius: 5px;
        padding: 25px;
    }
    .label {
        color: #fff;
    }
    .botao {
        background: linear-gradient(98.62deg, #FFAC30 -27.91%, #FD01A7 102.96%);
        border: 1px solid black;
    }

</style>