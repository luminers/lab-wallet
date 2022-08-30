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
              @click="this.setIndex = index"
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
                      <input
                        v-model="this.amount"
                        type="number"
                        min="0"
                        name=""
                        id=""
                      />
                      <br />
                      Actual: {{ this.history[this.setIndex].crypto_amount }}
                    </div>
                    <div class="alert alert-primary" role="alert">
                      Editar precio:
                      <input
                        v-model="this.money"
                        type="number"
                        min="0"
                        name=""
                        id=""
                      />
                      <br />
                      Actual: {{ this.history[this.setIndex].money }}
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
                      @click="edit()"
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
      id: null,
      setIndex: 0,
      amount: null,
      money: null,
    };
  },
  methods: {
    edit() {
      let transaccion = {
        id: this.history[this.setIndex]._id,
        crypto_amount: String(this.amount),
        money: String(this.money),
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
