<template>
  <div class="container">
    <Criptos />
  </div>
</template>
<script>
import Criptos from "@/components/Criptos.vue";

export default {
  name: "CriptosView",
  components: {
    Criptos,
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  background: #143f6b;
}
</style>
