<template>
  <div class="my-5 container">
    <h2>Historial de compras</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Moneda</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Fecha</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>

      <div v-if="loading" class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <tbody>
        <tr v-for="(element, index) in this.history" :key="index">
          <th scope="row">{{ element.crypto_code }}</th>
          <td>{{ element.crypto_amount }}</td>
          <td>{{ element.money }}</td>
          <td>{{ element.datetime }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              &#9999;
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
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
                      Editar cantidad:
                      <input type="number" min="0" name="" id="" />
                      <br />
                      Actual: {{ element.money }}
                    </div>
                    <div class="alert alert-primary" role="alert">
                      Editar precio:
                      <input type="number" min="0" name="" id="" />
                      <br />
                      Actual: {{ element.crypto_amount }}
                    </div>
                    <div class="alert alert-primary" role="alert">
                      Editar fecha: <input type="date" name="" id="" />
                      <br />
                      Actual: {{ element.datetime }}
                    </div>
                  </div>
                  <div class="modal-footer">
                    <input
                      type="button"
                      value="Eliminar transacción"
                      class="btn btn-danger"
                    />
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                    <input
                      type="button"
                      value="Confirmar edición"
                      class="btn btn-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <State v-if="!loading" :history="this.history" />
</template>

<script>
import restdbService from "@/services/restdbService";
import State from "@/components/History/State.vue";
export default {
  name: "HistoryComponent",
  components: {
    State,
  },
  data() {
    return {
      history: null,
      loading: true,
    };
  },
  methods: {
    edit() {
      let transaccion = {
        crypto_amount: String(this.cantidad),
        money: String(this.calcularTotal),
        datetime: this.formatDate,
      };

      console.log(transaccion);

      restdbService
        .patchTransaccion(transaccion)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    restdbService
      .getHistory()
      .then((response) => {
        this.history = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .then(() => {
        this.loading = false;
      });
  },
  computed: {},
};
</script>
