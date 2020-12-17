<template>
  <div>
    <b-button v-b-modal.modal-1 variant="success">
      Adicionar Veículo
      <b-icon icon="plus-circle"></b-icon>
    </b-button>

    <b-modal id="modal-1" size="lg" title="Cadastrar Veículo">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <b-form-group
              id="input-veiculo"
              label="Veículo"
              label-for="id_veiculo"
            >
              <b-form-input
                id="id_veiculo"
                v-model="veiculo"
                type="text"
                placeholder="Ex.: Monza"
                required
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md">
            <b-form-group id="select-marca" label="Marca" label-for="id_marca">
              <b-form-select
                id="id_marca"
                v-model="marca"
                :options="marcasOpt"
                required
              ></b-form-select>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <b-form-group id="input-ano" label="Veículo" label-for="id_ano">
              <b-form-input
                id="id_ano"
                v-model="ano"
                type="number"
                placeholder="Ex.: 1985"
                required
                min="1980"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md">
            <b-form-group label="Vendido?">
              <b-form-radio
                v-model="vendido"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="true"
                >Sim</b-form-radio
              >
              <b-form-radio
                v-model="vendido"
                :aria-describedby="ariaDescribedby"
                name="some-radios"
                value="false"
                >Não</b-form-radio
              >
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <b-form-group
              id="input-descricao"
              label="Descrição"
              label-for="id_descricao"
            >
              <b-form-textarea
                id="id_descricao"
                v-model="descricao"
                required
              ></b-form-textarea>
            </b-form-group>
          </div>
        </div>
      </div>
      <template #modal-footer>
        <div>
          <b-button> Cancelar </b-button>
          <b-button title="OK" variant="success" class="ml-2">
            Cadastrar
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";

export default {
  name: "CadastraVeiculo",
  components: {
    BIcon,
  },
  data() {
    return {
      veiculo: "",
      marca: "",
      marcasOpt: [
        { value: "Chevrolet", text: "Chevrolet" },
        { value: "Ford", text: "Ford" },
      ],
      ano: 0,
      descricao: "",
      vendido: false,
    };
  },
  methods: {
    validarFormulario() {

    },
    limparFormulario() {
      
    }
  },
};
</script>