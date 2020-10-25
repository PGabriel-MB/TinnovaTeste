<template>
  <div class="container">
      <Menu></Menu>
      <ListaDeVeiculos :veiculos="veiculos"></ListaDeVeiculos>
  </div>
</template>

<script>
import Menu from "./Menu";
import ListaDeVeiculos from "./ListaDeVeiculos";

export default {
  name: "Principal",
  components: {
      Menu,
      ListaDeVeiculos
  },
  data() {
    return {
      veiculos: []
    }
  },
  methods: {
    getVeiculos() {

    }
  },
  mounted() {
    this.getVeiculos();
  }
};
</script>