<template>
  <div>
    <div class="container">
    <div id="vector5"></div>
    <section id="section1">
      <div id="title">
        <h1>Descubra os caminhos para impulsionar a sua carreira</h1>
        <h5>Com o Master Educator você embarca em uma jornada de aprendizado.</h5>
        <button class="buttonBanner">INICIAR JORNADA</button>
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
        <div v-for="(category, index) in categories" :key="index">
          <div v-if="index <= 5" class="col">
            <div class="card">
              <img src="../assets/img/Statue.svg" class="card-img-top" alt="nodejs">
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.}</p>
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
        <span class="text-center w-50">
          <h2>Método desenhado para acelerar a sua evolução</h2>
          <p >Combinamos 3 pilares para você conquistar experiência, dominar as ferramentas e saber se posicionar profissionalmente</p>
        </span>
      </div>
      <div class="d-flex justify-content-between">
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
        <p class="w-75 m-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error earum quisquam voluptas ducimus accusamus itaque magni blanditiis quod, pariatur odio. Aliquam officia fugit corrupti provident veniam laudantium deserunt ipsa debitis!</p>
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
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono&display=swap');
.container{
  color: #FFFEFD;
  font-family: 'DM Mono', monospace;
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
</style>