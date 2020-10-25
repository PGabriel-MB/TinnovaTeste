<template>
  <div>
      <div class="text-center my-5">
          <h2>Lista de Veículos</h2>
      </div>
    <div class="card">
      <div class="card-body">
          <ul class="list-group" v-if="veiculos.length > 0">
              <li class="list-group-item" v-for="veiculo in veiculos" :key="veiculo._id">
                  <div class="row">
                      aksdasdaaklsdlasda
                  </div>
              </li>
          </ul>
          <div v-else>
              <h2>Você não possui veiculos cadastrados</h2>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
//import ItemVeiculo from "./ItemVeiculo";

export default {
  name: "ListaDeVeiculos",
  props: ["veiculos"],
  //data() {
  //  return {
  //
  //  };
  //},
};
</script>
