<template>
  <div class="container aling-self-center w-50">
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle my-2 w-100"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Moneda a operar
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" @click="ElegirCripto('ada')" value="ada"
            >Ada</a
          >
        </li>
        <li>
          <a class="dropdown-item" @click="ElegirCripto('btc')" value="BTC"
            >Bitcoin</a
          >
        </li>
        <li>
          <a class="dropdown-item" @click="ElegirCripto('DAI')" value="DAI"
            >DAI</a
          >
        </li>
      </ul>
    </div>
    <h3>{{ this.CriptoElegida.toUpperCase() }}</h3>

    <div class="alert alert-success" role="alert">
      Precio de compra en ARS$: {{ precio }}
    </div>
    <div class="alert alert-primary" role="alert">
      Precio de venta en ARS$:{{ precio }}
    </div>

    <h3>Cantidad a comprar</h3>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">{{
        CriptoElegida
      }}</span>
      <input
        type="number"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        placeholder="ej: 0.0001"
        v-model="this.cantidad"
      />
    </div>

    <div v-if="validacion" class="alert alert-danger" role="alert">
      La cantidad a comprar debe ser un número mayor a 0. Ej: 0.001
    </div>

    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="validar()"
    >
      Comprar
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-if="this.cantidad > 0"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Detalles de compra
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="alert alert-primary" role="alert">
              Cantidad a comprar: {{ this.cantidad }}
            </div>
            <div class="alert alert-primary" role="alert">
              Total en $Ars: {{ calcularTotal }}
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button type="button" class="btn btn-primary">
              Confirmar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import criptosService from "@/services/criptosService";

export default {
  name: "TradeComponent",
  data() {
    return {
      CriptoElegida: this.$store.state.Cripto,
      precio: 0,
      cantidad: null,
      validacion: false,
    };
  },
  props: {
    CriptoAOperar: String,
  },
  methods: {
    ElegirCripto(cripto) {
      this.CriptoElegida = cripto;
      console.log(this.CriptoElegida);
      criptosService
        .getCriptos(this.CriptoElegida)
        .then((response) => {
          this.precio = response.data.ask;

          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    validar() {
      if (this.cantidad <= 0) {
        this.validacion = true;
      } else {
        this.validacion = false;
      }
    },
  },
  computed: {
    calcularTotal() {
      return this.cantidad * this.precio;
    },
  },
  mounted() {
    this.ElegirCripto(this.CriptoAOperar);
  },
};
</script>
<style scoped></style>
