<template>
  <div>
    <b-button v-b-modal.modal-1 variant="success">
      Adicionar Veículo
      <b-icon icon="plus-circle"></b-icon>
    </b-button>

    <b-modal id="modal-1" refs="modal-AddCar" size="lg" title="Cadastrar Veículo" @hidden="limparFormulario">
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
                :state="states.veiculo"
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
                :state="states.marca"
                required
              ></b-form-select>
            </b-form-group>
          </div>
        </div>
        <div class="row">
          <div class="col-md">
            <b-form-group id="input-ano" label="Ano" label-for="id_ano">
              <b-form-input
                id="id_ano"
                v-model="ano"
                type="number"
                placeholder="Ex.: 1985"
                :state="states.ano"
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
        <b-alert :show="mostrarAlert" fade :variant="variante">
          {{ messageAlert }}
        </b-alert>
      </div>
      <template #modal-footer>
        <div>
          <b-button @click="$refs['modal-AddCar'].hide()"> Cancelar </b-button>
          <b-button title="OK" variant="success" @click="salvarVeiculo" class="ml-2">
            Cadastrar
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { BIcon } from "bootstrap-vue";
import axios from "axios";

export default {
  name: "CadastraVeiculo",
  components: {
    BIcon
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
      states: {
        veiculo: null,
        marca: null,
        ano: null
      },
      url: 'http://localhost:3000/veiculos/',
      mostrarAlert: false,
      variante: 'success',
      messageAlert: 'Veículo cadastrado com Sucesso!'
    };
  },
  methods: {
    validarFormulario() {
      this.states.veiculo  = (this.veiculo) ? null : false;
      this.states.marca = (this.marca) ? null : false;
      this.states.ano = (this.ano > 1970) ? null : false;

      for(let state in this.states) {
        if (this.states[state] === false) {
          return false;
        }
      }

      return true;
    },
    limparFormulario() {
      for(let state in this.states) {
        this.states[state] = null;
      }

      this.ano = 0;
      this.marca = '';
      this.descricao = '';
    },
    salvarVeiculo(){
      let valid = this.validarFormulario();
      if (valid) {

        let dataObject = {
          veiculo: this.veiculo,
          marca: this.marca,
          ano: this.ano,
          descricao: this.descricao,
          vendido: this.vendido
        }

        axios.post(this.url, dataObject).then(() => {
          this.mostrarAlert = true;
          setTimeout(() => {
            this.mostrarAlert = false;
          }, 3000);
          location.reload();
        }); 
      } else {
        this.variante = 'danger';
        this.mostrarAlert = true;
        this.messageAlert = 'Verifique todos os campos';
        setTimeout(() => {
          this.mostrarAlert = false;
        }, 3000);
      }
    }
  },
};
</script>