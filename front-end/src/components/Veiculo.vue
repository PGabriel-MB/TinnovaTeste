<template>
  <div>
    <b-modal
      ref="modal-VisualizarVeiculo"
      centered
      size="lg"
      title="Visualizar Veículo"
      @hidden="veiculo = null"
    >
      <div class="container" v-if="veiculo">
        <div class="row">
          <div class="col">
            <label for=""><strong>Veículo:</strong></label>
            {{ veiculo.veiculo }}
          </div>
          <div class="col">
            <label for=""><strong>Marca:</strong></label>
            {{ veiculo.marca }}
          </div>
          <div class="col">
            <label for=""><strong>Ano:</strong></label>
            {{ veiculo.ano }}
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <label for=""><strong>Descrição:</strong></label>
            {{ veiculo.descricao }}
          </div>
          <div class="col">
            <label for=""><strong>Vendido? </strong></label>
            <span id="vendidoBadge" class="text-white">
              <b-badge variant="success"> </b-badge>
            </span>
          </div>
        </div>
      </div>

      <template #modal-footer>
        <div>
          <b-button title="OK" variant="success" @click="$refs['modal-VisualizarVeiculo'].hide()">
            <b-icon icon="check-circle"></b-icon>
          </b-button>
          <b-button title="Excluir Veículo" variant="danger" @click="deletarVeiculo(veiculo._id)" class="ml-2">
            <b-icon icon="x-circle"></b-icon>
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
import { bus } from "../main";

export default {
  name: "Veiculo", // Visualizando detalhes do veiculo
  data(){
    return {
      veiculo: null,
      url: "http://localhost:3000/veiculos/",
    }
  },
  methods: {
    deletarVeiculo(_id) {
      axios.delete(this.url + _id)
    }
  },
  mounted() {
    bus.$on('abrirModal', (veiculo) => {
      this.veiculo = veiculo;
      this.$refs['modal-VisualizarVeiculo'].show();
    });
  }
};
</script>

<style>
#vendidoBadge {
  font-size: 2rem;
}

#modal-VisualizarVeiculo {
  font-size: 1.5rem;
}
</style>
