<template>
  <div>
    <b-button v-b-modal.modal-1 variant='success'>
      Adicionar Veículo
      <b-icon icon="plus-circle"></b-icon>
    </b-button>

    <b-modal id="modal-1" size="lg" title="Cadastrar Veículo">
      
    </b-modal>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";

export default {
  name: "CadastraVeiculo",
  components:{
    BIcon
  },
  methods: {
      
  }
};
</script>