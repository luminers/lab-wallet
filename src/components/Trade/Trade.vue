<template>
  <div class="container w-50 trade-container">
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

    <div v-show="validacion" class="alert alert-danger" role="alert">
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
            <input
              type="button"
              value="Confirmar compra"
              class="btn btn-primary"
              @click="comprar()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import criptosService from "@/services/criptosService";
import restdbService from "@/services/restdbService";
import store from "@/store";

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
      //console.log(this.CriptoElegida);
      criptosService
        .getCriptos(this.CriptoElegida)
        .then((response) => {
          this.precio = response.data.ask;
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
    comprar() {
      let transaccion = {
        user_id: this.$store.state.Id,
        action: "purchase",
        crypto_code: this.CriptoElegida,
        crypto_amount: String(this.cantidad),
        money: String(this.calcularTotal),
        datetime: this.formatDate,
      };

      console.log(transaccion);

      restdbService
        .postTransaccion(transaccion)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  computed: {
    calcularTotal() {
      let total = this.cantidad * this.precio;

      return total.toFixed(2);
    },
    formatDate() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();
      let hh = today.getHours();
      let ss = today.getMinutes();

      today = dd + "-" + mm + "-" + yyyy + " " + hh + ":" + ss;

      return today;
    },
  },
  mounted() {
    this.ElegirCripto(this.CriptoAOperar);
    console.log(store.state.Id);
  },
};
</script>
<style scoped></style>
