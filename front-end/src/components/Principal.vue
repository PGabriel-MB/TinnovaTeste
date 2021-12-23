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

axios.defaults.withCredentials = false;

export default {
  name: "Principal",
  components: {
    Menu,
    ListaDeVeiculos,
  },
  data() {
    return {
      veiculos: [],
      url: "http://localhost:3000/veiculos/",
    };
  },
  methods: {
    getVeiculos() {
      axios
        .get(this.url, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:8080",
          },
        })
        .then(async (res) => {
          this.veiculos = await res.data;
        });
    },
  },
  mounted() {
    this.getVeiculos();
  },
};
</script>