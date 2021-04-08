<template>
  <div class="row border rounded text-center py-3">
    <div class="col-md">
      <CadastrarVeiculo></CadastrarVeiculo>
    </div>
    <div class="col-md">
      <b-button variant='success'>
        Veículos não Vendidos
        <b-icon icon="truck-flatbed"></b-icon>
      </b-button>
    </div>
    <div class="col-md">
      <b-button variant='success'>
        Veículos por Década
        <b-icon icon="calendar3"></b-icon>
      </b-button>
    </div>
    <div class="col-md">
      <b-button variant='success'>
        Veículos por Fabricante
        <b-icon icon="tools"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
import CadastrarVeiculo from "./CadastrarVeículo";

export default {
  name: "Menu",
  components: {
    CadastrarVeiculo,
  },
};
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
