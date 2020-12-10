<template>
  <div>
    <b-button v-b-modal.modal-VisualizarVeiculo variant="success">
      Visualizar Veículo
      <b-icon icon="eye"></b-icon>
    </b-button>

		<b-modal id="modal-VisualizarVeiculo" size="lg" title="Visualizar Veículo">
			{{ veiculo }}
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Veiculo", // Visualizando detalhes do veiculo
	props: ["veiculo"],
	methods: {

	}
};
</script>
