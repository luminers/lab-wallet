<template>
  <div class="">
    <Balance />
  </div>
</template>
<script>
import Balance from "@/components/Balance.vue";

export default {
  name: "CriptosView",
  components: {
    Balance,
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  background: #143f6b;
}
</style>
