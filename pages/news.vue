<template>
  <main>
    <div class="banner">
      <v-img :src="banner.src" :height="banner.height"></v-img>
    </div>
    <div class="news">
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex v-for="(newsItem, index) in newsItems" :key="index" xs6>
            <v-card hover>
              <v-img :src="newsItem.src"></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline">{{ newsItem.title }}</h3>
                  <div class="py-3">{{ newsItem.abstract }}</div>
                </div>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">阅读详情</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  head() {
    return {
      title: '新闻中心',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  data() {
    return {
      banner: {
        src: require('~/static/images/banner/news.png'),
        height: 380
      }
    }
  },
  computed: {
    ...mapGetters({
      newsItems: 'news/get'
    })
  }
}
</script>

<style scoped></style>
