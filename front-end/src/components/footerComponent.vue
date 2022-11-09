<template>
  <footer class="d-flex justify-content-between">
    <div>
      <img id="logo" src="../assets/logo.svg" alt="logo">
      <p class="pLogo">Master Educator 2022 <br> Todos os direitos reservados</p>
    </div>
    <ul>
      <li><i class="bi bi-github"></i></li>
      <li><i class="bi bi-instagram"></i></li>
      <li><i class="bi bi-twitter"></i></li>
      <li><i class="bi bi-youtube"></i></li>
      <li><i class="bi bi-discord"></i></li>
      <li><i class="bi bi-facebook"></i></li>
    </ul>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
  color: #FFF;
    background-color: rgba(0, 0, 0, 0.3);
    margin-top: 100px;
    height: 250px;
}

#logo{
  margin: 50px 0 0 50px;
  width: 100px;
}

.pLogo{
  margin-left: 50px;
}

ul{
  margin: 100px 50px 0 0;
  display: flex;
  list-style: none;
}
li{
  padding: 15px;
  font-size: 25px;
}
</style>