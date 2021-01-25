<template>
  <div>
    <div class="text-center my-5">
      <h2>Lista de Veículos</h2>
    </div>
    <div class="card">
      <div class="card-body">
        <ul class="list-group" v-if="veiculos.length > 0">
          <li
            class="list-group-item"
            v-for="veiculo in veiculos"
            :key="veiculo._id"
          >
            <div class="row">
              <div class="col-md-8 align-self-center">
                <p><strong>Veículo:</strong> {{ veiculo.veiculo }}</p>
                <p><strong>Marca:</strong> {{ veiculo.veiculo }}</p>
              </div>
              <div class="col-md-4 align-self-center">
                <b-button variant="success" @click="levantarModal(veiculo)">
                  Visualizar Veículo
                  <b-icon icon="eye"></b-icon>
                </b-button>
              </div>
            </div>
          </li>
        </ul>
        <div v-else>
          <h2>Você não possui veiculos cadastrados</h2>
        </div>
      </div>
    </div>
    <Veiculo />
  </div>
</template>

<script>
import { bus } from "../main";
import Veiculo from "./Veiculo";

export default {
  name: "ListaDeVeiculos",
  props: ["veiculos"],
  components: {
    Veiculo
  },
  methods: {
    levantarModal(veiculo){
      bus.$emit('abrirModal', veiculo);
    }
  }
};
</script>
