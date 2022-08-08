<template>
  <div class="my-5 container">
    <h2>Historial de compras</h2>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">Moneda</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Precio</th>
          <th scope="col">Fecha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "HistoryComponent",
  data() {
    return {};
  },
};
</script>
