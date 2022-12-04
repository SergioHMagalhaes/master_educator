<template>
    <div class="formBox">
        <div>
            <h1>Mensalmente</h1>
        </div>
        <div class="buttonfield">
            <button class="valueButton">R$ 4</button>
            <button class="valueButton">R$ 10</button>
            <button class="valueButton">R$ 15</button>
            <button class="valueButton">R$ 20</button>
            <button class="valueButton">R$ 25</button>
        </div>    
        <div class="inputField">
            <label for="">Ou digite um valor especifico:</label>
            <input type="text" placeholder="R$ valor especifico">
        </div>
        <div>
            <button class="signButton">Pagar</button>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.formBox {
    background: rgba(55, 55, 55, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
}

.valueButton {
    padding: 6px 10px;
    margin: 10px 15px;
    border-radius: 15px;
    background: rgba(55, 55, 55, 0.3);
    border-color:#FD01A7;
    color: white;
}
.signButton {
    width: 150px;
    height: 55px;
    padding: 6px 10px;
    margin: 10px 15px;
    border-radius: 15px;
    background: linear-gradient(98.62deg, #FFAC30 -27.91%, #FD01A7 102.96%);
    color: white;
    font-size: 15px;
}
.inputField {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 20px;
} 

input {
    border-radius: 8px;
    background: rgba(55, 55, 55, 0.3);
}
</style>