<template>
  <div>
    <div class="container">
    <div id="vector5"></div>
    <section id="section1">
      <div id="title">
        <h1 v-if="logged" >Descubra os caminhos para impulsionar a sua carreira</h1>
        <h1 v-else>Descubra os caminhos para impulsionar a sua carreira</h1>
        <h5 v-if="logged">Diga adeus as propagandas, tenha antecipado as trilhas e desfrute de conteudos excluisvos!</h5>
        <h5 v-else>Com o Master Educator você embarca em uma jornada de aprendizado.</h5>
        <a v-if="logged" href="/premium" class="buttonBanner">VIRAR PREMIUM</a>
        <a v-else href="/signup" class="buttonBanner">INICIAR JORNADA</a>
        
      </div>
      <img id="cardBanner" src="../assets/img/Statue.svg" alt="">
    </section>
    <a href="#section2" class="arrow"></a>
    <section id="section2" >
      <div class="text-center mt-5">
        <h4>Trilhas em destaque</h4>
        <p>Trilhas com conteúdo do mercado de trabalho</p>
      </div>
      <div class="row d-flex ms-1">
        <button class="buttonCategory me-1 shadow-sm" @click="filterTrails('all')"> Todos </button>
        <button class="buttonCategory mx-1 shadow-sm" v-for="category in categories" :key="category.name" @click="filterTrails(category.name)"> {{ category.name }} </button>
      </div>
      <div class="row row-cols-md-3 row-cols-sm-2">
        <div v-for="(trail, index) in trails" :key="index">
          <div v-if="index <= 5" class="col">
            <div class="card" @click="openTrail(trail.idTrails)">
              <img :src="trail.image" class="card-img" alt="nodejs">
              <div class="card-body d-flex justify-content-between">
                <div>
                  <span class="spanCard">Trilha</span>
                  <p>{{ trail.name }}</p>
                </div>
                <div>
                  <span class="spanCard">Categoria</span>
                  <p>{{ trail.categories.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <a href="/trilhas" class="buttonCategory" > Veja mais </a>
      </div>
    </section>
    <section id="section3">
      
      <div class=" d-flex justify-content-center">
        <span class="text-center methodText">
          <h2>Método desenhado para acelerar a sua evolução</h2>
          <p >Combinamos 3 pilares para você conquistar experiência, dominar as ferramentas e saber se posicionar profissionalmente</p>
        </span>
      </div>
      <div class="methodCards">
        <div class="card text-center p-5">
          <i class="bi bi-compass cardIcon"></i>
          <h4>Direção</h4>
          <p class="card-p">Encontre os melhores caminhos para seu futuro e avance em direção as suas oportunidades na área.</p>
        </div>
        <div class="card cardCenter text-center p-5">
          <i class="bi bi-journal-code cardIcon"></i>
          <h4>Conteúdo</h4>
          <p class="card-p">Especialize-se em stacks de ponta, com Os melhores conteúdos da internet sobre tecnologia em um lugar só.</p>
        </div>
        <div class="card text-center p-5">
          <i class="bi bi-people cardIcon"></i>
          <h4>Comunidade</h4>
          <p class="card-p">Nosso objetivo é que os usuários da plataforma possam aprimorar suas habilidades técnicas em um ambiente colaborativo e inovador.</p>
        </div>
      </div>
    </section>
    <div id="vector2"></div>
    <section id="section4" class="d-flex justify-content-center">
      <div class="cardPremium text-center">
        <h2>Torne-se Premium!</h2>
        <p class="w-75 m-auto">Faça parte da nossa comunidade premium hoje mesmo para ter um mundo de vantagens.</p>
        <p class="w-75 m-auto" >
          Tenha acesso a conteúdos exclusivos e diga adeus as propagandas!</p>
        <a href="/premium" class="buttonBanner m-auto mt-5">VIRAR PREMIUM</a>
      </div>
    </section>
  </div>
  </div>
</template>

<script>
import request from '@/services/request'
import { isSignedIn } from '../services/auth'
export default {
  data() {
    return {
      logged: false,
      categories: [
        {name: "Front-end"},
        {name: "Back-end"},
        {name: "DevOps"},
        {name: "Cloud"},
        {name: "Mobile"},
        {name: "UX & Design"},
        {name: "Inovação"}
      ],
      originalTrails: [],
      trails:[]
    }
  },
  created: function(){
    this.searchTrails()
    this.searchCategory()
    this.isLoggedIn()
  },
  methods: {
    isLoggedIn() {
      const { isLoggedIn } = isSignedIn()
      if (isLoggedIn) {
        this.logged = true
      } else {
        this.logged = false
      }
    },
    openTrail(id){
      this.$router.push({path: '/trails', query: { id: id }})
    },

    async searchTrails(){
      const result = await request.list('trails')
      this.originalTrails = result.data
      this.trails = result.data
    },
    
    async searchCategory(){
      const result = await request.list('trails/categories')
      this.categories = result.data
    },

    filterTrails(category){
      if(category == 'all') this.trails = this.originalTrails
      else{
        this.trails = this.originalTrails.filter(trail => trail.categories.name == category)
      }
    }
  }
}
</script>

<style scoped>

a{
  text-decoration: inherit;
}
.container{
  color: #FFFEFD;
}
#vector5{
  position: absolute;
  width: 867.63px;
  height: 963px;
  left: -653px;
  top: -619px;
  background: #67267E;
  filter: blur(934.951px);
  Z-Index: -1
 }
#title{
  padding-top: 50px;
  width: 600px;
  
}
#section1{
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
}

#cardBanner{
  width: 400px;
  height: 400px;
}

.buttonBanner{
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 200px;
  height: 60px;
  background: linear-gradient(98.62deg, #FFAC30 -27.91%, #FD01A7 102.96%);
  border-radius: 10px;
  color: #FFF;
  margin-right: 10px;
}
.buttonCategory{
  margin: 50px 0 48px 0;
  display: flex;  
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 150px;
  height: 40px;
  border: none;
  background: rgba(55, 55, 55, 0.3);
  border-radius: 5px;
  color: #fffefda0;
  
}
#section2{
  margin-top: 150px;
  padding: 0;

}
.card{
  margin-top: 24px;
  padding: 10px;
  background: rgba(55, 55, 55, 0.3);
  backdrop-filter: blur(3.62842px);
  border-radius: 9px;
}

.card-p{
  max-width: 300px;
}

.card img{
  padding: 20px;
  margin-top:  20px;
}

.arrow, .arrow:before{
  position: absolute;
  left: 50%;
}
.arrow{
  width: 40px;
  height: 40px;
  margin: 20px 0 0 0;
  -webkit-transform: rotate(45deg);
  border-left: none;
  border-top: none;
  border-right: 2px #fff solid;
  border-bottom: 2px #fff solid;
  
}
  
.arrow:before{
  content: '';
  width: 20px;
  height: 20px;
  top: 50%;
  margin: -10px 0 0 -10px;
  border-left: none;
  border-top: none;
  border-right: 1px #fff solid;
  border-bottom: 1px #fff solid;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: arrow;
  }
@keyframes arrow{
  0%{
    opacity: 1;
  }
    
  100%{
    opacity: 0;
    transform: translate(-10px, -10px)
  }
}

.cardCenter{
 margin-left: 24px;
 margin-right: 24px;
}

.cardIcon{
  font-size: 70px;
  background-image: linear-gradient(98.62deg, #FFAC30 -27.91%, #FD01A7 102.96%);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#section3{
  padding-top: 50px;
}
.methodText{
    max-width: 50%;
  }
.methodCards{
  display: flex;
  justify-content: space-between;

}

#section4{
  padding-top: 50px;
}
.cardPremium{
  width: 800px;
  height: 400px;
  background: rgba(55, 55, 55, 0.3);
  text-align: center;
  border-radius: 9px;
}

.cardPremium h2{
  margin-top: 100px;

}

#vector2{
  position: absolute;
  width: 1403px;
  height: 750px;
  background: #67267E;
  filter: blur(676.699px);
  Z-Index: -1
}

.card-img{
  width: 200px;
  height: 200px;
  margin: auto;
}

.spanCard{
  color: #fffefda0;
}

@media screen and (max-width: 768px){
  #title h1{
    font-size: 30px;
  }
  #title h5{
    font-size: 15px;
  }
  #cardBanner{
    padding-top: 50px;
    width: 300px;
    height: 300px;
}
.buttonCategory{
  margin: 24px 0 0px 0;  
}

.methodCards{
  display: block !important;
}

.cardCenter{
 margin-left: 0;
 margin-right: 0;
}

.card-p{
  margin: auto;
}
}

@media screen and (max-width: 576px){
  .methodText{
    max-width: 90%;
  }
  #section1{
    display: block;
  }
  #title {
    max-width: 95%;
  }
  .cardPremium h2{
  margin-top: 40px;

}
}
</style>