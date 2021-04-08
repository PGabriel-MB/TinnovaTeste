<template>
  <div id="app">
    <div class="text-center">
      <h1>Gerenciamento de Veículos <span><i class="fas fa-car"></i></span></h1>
    </div>
    <Principal></Principal>
  </div>
</template>

<script>
//import "bootstrap/dist/css/bootstrap.css";
//import "font-awesome/css/font-awesome.css";
import Principal from "./components/Principal";

export default {
  name: 'App',
  components: {
    Principal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
