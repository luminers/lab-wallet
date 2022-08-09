<template>
  <div class="home">
    <History />
  </div>
</template>

<script>
// @ is an alias to /src
import History from "@/components/History/History.vue";

export default {
  name: "HomeView",
  components: {
    History,
  },
};
</script>
