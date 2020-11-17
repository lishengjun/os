<template>
  <v-app>
    <PcHeader></PcHeader>
    <Nuxt />
    <PcFooter></PcFooter>
  </v-app>
</template>
<script>
import PcHeader from '~/components/layout/header.vue'
import PcFooter from '~/components/layout/footer.vue'
export default {
  components: {
    PcHeader,
    PcFooter
  }
}
</script>
<style>
/* common */
.theme--light.application {
  background-color: #fff;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}
.container {
  max-width: 1200px;
}
</style>
