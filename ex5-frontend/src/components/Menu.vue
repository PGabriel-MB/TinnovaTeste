<template>
  <div class="row border rounded text-center">
    <div class="col-md">
      <CadastrarVeiculo></CadastrarVeiculo>
    </div>
    <div class="col-md">
      <h3>Veículos não Vendidos</h3>
    </div>
    <div class="col-md">
      <h3>Veículos por Década</h3>
    </div>
    <div class="col-md">
      <h3>Veículos por Fabricante</h3>
    </div>
  </div>
</template>

<script>
import CadastrarVeiculo  from "./CadastrarVeículo";

export default {
  name: 'Menu',
  components: {
    CadastrarVeiculo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
