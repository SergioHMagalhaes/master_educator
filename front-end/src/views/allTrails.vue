<template>
    <div class="container">
        <h1 class="text-center">Trilhas</h1>
        <div class="row d-flex ">
            <button class="buttonCategory"> Todos os cursos</button>
            <button class="buttonCategory" v-for="category in categories" :key="category.name"> {{ category.name }}
            </button>
            <section>
                <div v-for="category in categories" :key="category.idCategory">
                    <h2>{{ category.name }}</h2>
                    <div class="row">
                        <div class="col-1 me-4 my-2 cardTrail" v-for="trail in category.trails" :key="trail.name">
                            <div class="d-flex align-itens-start" @click="openTrail(trail)">
                                <img :src="trail.image" alt="">
                                <div>
                                    <div class="my-3 mx-2">
                                        <span class="spanCard">Trilha</span>
                                        <p>{{ trail.name }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import request from '@/services/request'
export default {
    data(){
        return {
            categories: ''
        }
    },
    created(){
        this.searchCategory()
    },

    methods: {
        async searchCategory(){
            const result = await request.list('trails/categories')
            this.categories = result.data
        },

        openTrail(trail){
            this.$router.push({name: 'trails', query: {id: trail.idTrails}})
        }
    }
}
</script>

<style scoped>
.buttonCategory{
    margin: 15px 10px 48px 0;
    width: 100px;
    height: 25px;
    font-size: 10px;
    padding: 5px;
    background: rgba(55, 55, 55, 0.3);
    border-radius: 5px;
    color: #fffefda0;
}
.container{
    color: #fff;
}
.cardTrail{
    border-radius: 9px;
    width: 260px;
    height: 120px;
    background: rgba(55, 55, 55, 0.3);
    margin: 5px 0;
}
.cardTrail img{
    max-width: 90px;
    max-height: 90px;
    margin: 15px 10px 10px 5px;
}
.cardTrail h4{
    display: inline;
}
.spanCard{
  color: #fffefda0;
}
</style>