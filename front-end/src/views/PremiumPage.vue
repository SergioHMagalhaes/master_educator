<template>
    <div class="container">
        <div class="format">
            <div>
                <div class="text">Torne-se um assinante <span class="gradient-text"> PREMIUM </span>!</div>
                <p>Diga adeus as propagandas, tenha antecipado as trilhas e desfrute de conteudos excluisvos!</p>
                <premiumForm/>
            </div>
            <div>
                <!-- imagem -->
                <img src="../assets/img/image1.png" alt="image1">
            </div>
        </div>
    </div>
</template>

<script>
import premiumForm from '../components/premiumForm.vue'
export default {
    components: {
        premiumForm,
    },
    
}
</script>

<style scoped>
    .format {
        display: flex;
        flex-direction: row;
        padding-top: 25px;
    }
    .gradient-text {
        background-color: #f3ec78;
        background-image: linear-gradient(98.62deg, #FFAC30 -27.91%, #FD01A7 102.96%);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }
    .text {
        font-size: 65px;
        color: azure;
    }
    p {
        font-size: 25px;
        color: azure;
    }
</style>