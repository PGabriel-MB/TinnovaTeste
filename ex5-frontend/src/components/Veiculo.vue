<template>
  <div>
    <b-button v-b-modal.modal-VisualizarVeiculo variant="success">
      Visualizar Veículo
      <b-icon icon="eye"></b-icon>
    </b-button>

    <b-modal
      id="modal-VisualizarVeiculo"
      centered
      size="lg"
      title="Visualizar Veículo"
    >
      <div class="container">
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
          <b-button variant="success">
            <b-icon icon="check-circle"></b-icon>
          </b-button>
          <b-button variant="danger" class="ml-2">
            <b-icon icon="x-circle"></b-icon>
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Veiculo", // Visualizando detalhes do veiculo
  props: ["veiculo"],
  methods: {},
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
