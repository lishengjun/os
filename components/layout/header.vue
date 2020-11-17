<template>
  <header>
    <v-toolbar color="transparent" height="60" absolute flat>
      <v-toolbar-title>
        <v-img
          :src="require('~/static/images/logo.png')"
          height="30"
          width="100"
          contain
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(navItem, index) in navItems"
          :key="index"
          :to="navItem.url"
          nuxt
          flat
          >{{ navItem.title }}</v-btn
        >
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile v-for="(navItem, index) in navItems" :key="index">
            <v-list-tile-content>
              <v-list-tile-title>
                <nuxt-link :to="navItem.url">{{ navItem.title }}</nuxt-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LayoutHeader',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      navItems: 'nav/get'
    })
  }
}
</script>

<style scoped>
header >>> .v-btn {
  color: #fff;
}
header >>> .v-btn:before {
  height: 40px;
  top: 10px;
  color: #000;
}
header >>> .v-ripple__container {
  height: 40px;
  top: 10px;
  color: #000;
}
header >>> .v-toolbar__content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
