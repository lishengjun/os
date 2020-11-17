<template>
  <main>
    <div class="banner">
      <v-img :src="banner.src" :height="banner.height"></v-img>
    </div>
    <div class="case">case</div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      banner: {
        src: require('~/static/images/banner/case.png'),
        height: 380
      }
    }
  }
}
</script>

<style scoped></style>
