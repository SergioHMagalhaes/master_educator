<template>
  <div>
    <div class="container">
    <div id="vector5"></div>
    <section id="section1">
      <div id="title">
        <h1>Descubra os caminhos para impulsionar a sua carreira</h1>
        <h5>Com o Master Educator você embarca em uma jornada de aprendizado.</h5>
        <a href="/signup" class="buttonBanner">INICIAR JORNADA</a>
      </div>
      <img id="cardBanner" src="../assets/img/Statue.svg" alt="">
    </section>
    <a href="#section2" class="arrow"></a>
    <section id="section2" >
      <div class="text-center mt-5">
        <h4>Trilhas em destaque</h4>
        <p>Trilhas com conteúdo do mercado de trabalho</p>
      </div>
      <div class="row d-flex justify-content-between mt-4">
        <button class="buttonCategory" v-for="category in categories" :key="category.name"> {{ category.name }} </button>
      </div>
      <div class="row row-cols-md-3 row-cols-sm-2">
        <div v-for="(trail, index) in trails" :key="index">
          <div v-if="index <= 5" class="col">
            <div class="card" @click="openTrail(trail)">
              <img :src="trail.img" class="card-img" alt="nodejs">
              <div class="card-body d-flex justify-content-between">
                <div>
                  <span class="spanCard">Trilha</span>
                  <p>{{ trail.name }}</p>
                </div>
                <div>
                  <span class="spanCard">Categoria</span>
                  <p>{{ trail.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <a href="#" class="buttonCategory" > Veja mais </a>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="card cardCenter text-center p-5">
          <i class="bi bi-journal-code cardIcon"></i>
          <h4>Conteúdo</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div class="card text-center p-5">
          <i class="bi bi-people cardIcon"></i>
          <h4>Comunidade</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
    <div id="vector2"></div>
    <section id="section4" class="d-flex justify-content-center">
      <div class="cardPremium text-center">
        <h2>Torne-se Premium!</h2>
        <p class="w-75 m-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error earum quisquam voluptas ducimus accusamus itaque magni blanditiis quod, pariatur odio.</p>
        <button class="buttonBanner m-auto mt-5">VIRAR PREMIUM</button>
      </div>
    </section>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {name: "Front-end"},
        {name: "Back-end"},
        {name: "DevOps"},
        {name: "Cloud"},
        {name: "Mobile"},
        {name: "UX & Design"},
        {name: "Inovação"}
      ],
      trails:[
        {name: "Node.js", category: "Back-end", img: "https://walde.co/wp-content/uploads/2016/09/nodejs_logo.png"},
        {name: "JavaScript", category: "Back-end", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"},
        {name: "C#", category: "Back-end", img: "https://growiz.com.br/wp-content/uploads/2020/08/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png"},
        {name: "Laravel", category: "Back-end", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"},
        {name: "JavaScript", category: "Front-end", img: "https://static.javatpoint.com/images/javascript/javascript_logo.png"},
        {name: "Vue.js", category: "Front-end", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"},
        {name: "Microsoft Azure", category: "Cloud", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png"},
      ]
    }
  },
  methods: {
    openTrail(trail){
      this.$router.push({path: '/trails', query: trail})
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