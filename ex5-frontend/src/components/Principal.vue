<template>
  <div class="container">
      <Menu></Menu>
      <ListaDeVeiculos :veiculos="veiculos"></ListaDeVeiculos>
  </div>
</template>

<script>
import Menu from "./Menu";
import ListaDeVeiculos from "./ListaDeVeiculos";
import axios from "axios";

axios.defaults.withCredentials = true;

export default {
  name: "Principal",
  components: {
      Menu,
      ListaDeVeiculos
  },
  data() {
    return {
      veiculos: [],
      url: 'http://localhost:3000/veiculos/'
    }
  },
  methods: {
    getVeiculos() {
      axios.get(this.url).then(async res => {
        console.log(await res.data);
      });
    }
  },
  mounted() {
    this.getVeiculos();
  }
};
</script>