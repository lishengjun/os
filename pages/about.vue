<template>
  <main>
    <div class="banner">
      <v-img :src="banner.src" :height="banner.height"></v-img>
    </div>
    <div class="about">
      <v-container>
        <v-timeline align-top>
          <v-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            color="red lighten-2"
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img :src="activity.src" />
              </v-avatar>
            </template>
            <v-card :color="activity.color" dark>
              <v-card-title class="title">
                {{ activity.timestamp }}
              </v-card-title>
              <v-card-text class="white text--primary">
                {{ activity.content }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      banner: {
        src: require('~/static/images/banner/about.jpg'),
        height: 380
      },
      activities: [
        {
          content: '成功上市',
          src:
            'https://static.jiemo.net/proc/Home/Aboutus/images/img-pro-6_22583107.png',
          timestamp: '2019年4月14日',
          color: '#8e24aa'
        },
        {
          content: '获得A轮融资',
          src:
            'https://static.jiemo.net/proc/Home/Aboutus/images/img-pro-7_2b8caf4e.png',
          timestamp: '2019年4月13日',
          color: '#e57373'
        },
        {
          content: '拥有100人开发团队',
          src:
            'https://static.jiemo.net/proc/Home/Aboutus/images/about2018_17aea2fb.jpg',
          timestamp: '2019年4月12日',
          color: '#66bb6a'
        },
        {
          content: '公司成立',
          src:
            'https://static.jiemo.net/proc/Home/Aboutus/images/about2019_ad428701.jpg',
          timestamp: '2019年4月11日',
          color: '#3f51b5'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
