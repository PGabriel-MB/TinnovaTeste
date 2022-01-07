<template>
  <div id="app">
    <div class="text-center">
      <h1>Gerenciamento de Veículos <span><i class="fas fa-car"></i></span></h1>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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
  background: rgb(40,167,69);
  background: linear-gradient(180deg, rgba(40,167,69,1) 0%, rgba(40,167,69,1) 35%, rgba(20,85,35,1) 100%);
}
</style>
