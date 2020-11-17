<template>
  <main>
    <!-- slide -->
    <div class="slide" data-aos="fade-up">
      <v-container class="pa-0" fluid>
        <v-layout>
          <v-flex xs12>
            <v-carousel height="666" hide-delimiters hide-controls>
              <v-carousel-item
                v-for="(slideItem, index) in slideItems"
                :key="index"
                :src="slideItem.src"
              ></v-carousel-item>
            </v-carousel>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!-- solution -->
    <div class="solution" data-aos="fade-up">
      <v-container grid-list-lg>
        <div class="solution-head">
          <div class="title">服务项目</div>
        </div>
        <div class="solution-content">
          <v-layout wrap>
            <v-flex
              v-for="solutionItem in solutionItems"
              :key="solutionItem.id"
              xs12
              sm3
            >
              <v-card flat>
                <v-img :src="solutionItem.src"></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </div>
    <!-- about -->
    <div class="about" data-aos="fade-up">
      <v-container grid-list-lg>
        <div class="about-content">
          <div class="about-msg">
            <h2>
              本公司主要提供网页设计、网站开发、微信开发、App开发等服务
              <br />拥有超过20人的开发团队，服务超过100家企业
              <br />我们了解大中小型企业的模式和需求
              <br />我们倡导让客户感知产品的应用体验价值，而不仅是产品的功能
            </h2>
          </div>
          <div ref="aboutItems" class="about-items">
            <v-layout wrap>
              <v-flex
                v-for="(aboutItem, index) in aboutItems"
                :key="index"
                xs12
                sm6
                md3
              >
                <v-card flat>
                  <v-img :src="aboutItem.src" height="100"></v-img>
                  <div class="about-info">
                    <p class="about-desc">{{ aboutItem.desc }}</p>
                    <vue-count-to
                      ref="count"
                      class="about-count"
                      :start-val="aboutItem.startVal"
                      :end-val="aboutItem.endVal"
                      :duration="3000"
                      :autoplay="false"
                      @mountedCallback="onScroll"
                    ></vue-count-to>
                  </div>
                </v-card>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </v-container>
    </div>
    <!-- case -->
    <div class="case" data-aos="fade-up">
      <v-container grid-list-lg>
        <div class="case-head">
          <div class="title">案例展示</div>
        </div>
        <div class="case-content">
          <v-layout wrap>
            <v-flex
              v-for="(caseItem, index) in caseItems"
              :key="index"
              xs12
              sm6
              md6
            >
              <v-hover>
                <v-card class="case-item" hover flat>
                  <v-img :src="caseItem.src" height="350">
                    <v-card-text class="case-info">
                      <div class="case-title font-weight-light my-2">
                        {{ caseItem.title }}
                      </div>
                      <v-divider class="my-2"></v-divider>
                      <div class="case-desc font-weight-light">
                        {{ caseItem.desc }}
                      </div>
                    </v-card-text>
                  </v-img>
                </v-card>
              </v-hover>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </div>
    <!-- news -->
    <div class="news" data-aos="fade-up">
      <v-container grid-list-lg>
        <div class="news-head">
          <div class="title">最近新闻</div>
        </div>
        <div class="news-content">
          <v-layout wrap>
            <v-flex
              v-for="(newsItem, index) in newsItems"
              :key="index"
              xs12
              sm6
              md6
              lg3
            >
              <v-card class="news-item" flat>
                <v-img :src="newsItem.src" height="160"></v-img>
                <v-card-text class="pt-0">
                  <div class="news-title font-weight-light my-2">
                    {{ newsItem.title }}
                  </div>
                  <div class="news-abstract font-weight-light grey--text">
                    {{ newsItem.abstract }}
                  </div>
                  <v-divider class="my-2"></v-divider>
                  <span class="caption grey--text font-weight-light">{{
                    newsItem.time
                  }}</span>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </div>
    <!-- contact -->
    <div class="contact" data-aos="fade-up">
      <v-container grid-list-lg>
        <div class="contact-content">
          <v-layout row wrap>
            <v-flex d-flex xs12 sm6 md6>
              <h2>
                深入学习贯彻习近平新时代中国特色社会主义思想
                <br />牢牢把握“最本质的特征”和“最大优势”
                <br />加强领导狠抓落实坚定不移将改革进行到底。
              </h2>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex d-flex xs12 sm6 md4>
              <v-form ref="contactForm" class="contact-form">
                <v-text-field
                  v-model="contactForm.name"
                  :counter="10"
                  label="您的名字"
                ></v-text-field>
                <v-text-field
                  v-model="contactForm.phone"
                  :counter="11"
                  label="您的手机号码"
                ></v-text-field>
                <v-textarea
                  v-model="contactForm.content"
                  :counter="100"
                  label="咨询内容"
                ></v-textarea>
                <v-btn
                  class="mt-4 white--text"
                  color="#2e0494"
                  block
                  large
                  depressed
                  @click="onSubmit(contactForm)"
                  >提交</v-btn
                >
              </v-form>
            </v-flex>
          </v-layout>
        </div>
      </v-container>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  head() {
    return {
      title: 'Home',
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
      slideOption: {
        autoplay: true,
        loop: true,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      contactForm: '',
      countUp: true
    }
  },
  computed: {
    ...mapGetters({
      slideItems: 'slide/get',
      solutionItems: 'solution/get',
      caseItems: 'case/get',
      aboutItems: 'about/get',
      contactItems: 'contact/get',
      newsItems: 'news/get'
    })
  },
  created() {
    this.contactForm = JSON.parse(JSON.stringify(this.contactItems))
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll: function() {
      if (this.$refs.aboutItems) {
        // 滚动高度
        const scrollTop = window.scrollY
        // 元素距离顶部滚动的高度
        const aboutItemsTop =
          this.$refs.aboutItems.offsetTop -
          document.documentElement.clientHeight
        const countItems = this.$refs.count
        if (scrollTop > aboutItemsTop && this.countUp) {
          this.countUp = false
          countItems.forEach(function(v, i, countItem) {
            countItem[i].start()
          })
        }
      }
    },
    ...mapMutations({ onSubmit: 'contact/submit' })
  }
}
</script>

<style lang="less" scoped>
@deep: ~'>>>';
/* slide */
.slide {
  @{deep} .v-carousel {
    box-shadow: none;
    .v-carousel__controls {
      background: transparent !important;
    }
  }
}
/* solution */
.solution {
  .solution-head {
    text-align: center;
    margin: 20px 0;
    .title {
      display: inline-block;
      font-weight: 600;
      &:before {
        content: '/';
        margin-right: 10px;
      }
      &:after {
        content: '/';
        margin-left: 10px;
      }
    }
  }
  .solution-content {
    padding: 16px;
  }
}
/* about */
.about {
  background: linear-gradient(to bottom right, #6262ec, #2e0494);
  .about-content {
    padding: 16px;
    .about-msg {
      text-align: center;
      margin-bottom: 32px;
      h2 {
        font-size: 20px;
        color: #fff;
      }
    }
    .about-info {
      padding: 16px;
      .about-desc {
        font-size: 16px;
      }
      .about-count {
        font-size: 30px;
        position: relative;
        &:after {
          content: '+';
          position: absolute;
          top: 0;
          font-size: 20px;
          margin-left: 5px;
        }
      }
    }
  }
}
/* case */
.case {
  background-color: #fff;
  .case-head {
    text-align: center;
    margin: 20px 0;
    .title {
      display: inline-block;
      font-weight: 600;
      &:before {
        content: '/';
        margin-right: 10px;
      }
      &:after {
        content: '/';
        margin-left: 10px;
      }
    }
  }
  .case-content {
    padding: 16px;
    .case-info {
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      .case-title {
        color: #fff;
      }
      .case-desc {
        color: #fafafa;
      }
    }
  }
}
/* news */
.news {
  background: linear-gradient(to bottom right, #6262ec, #2e0494);
  .news-head {
    text-align: center;
    margin: 20px 0;
    .title {
      display: inline-block;
      font-weight: 600;
      color: #fff;
      &:before {
        content: '/';
        margin-right: 10px;
      }
      &:after {
        content: '/';
        margin-left: 10px;
      }
    }
  }
  .news-content {
    padding: 16px;
    .news-title {
      height: 42px;
    }
    .news-abstract {
      height: 42px;
    }
  }
}
/* contact */
.contact {
  .contact-content {
    padding: 16px;
    h2 {
      font-size: 20px;
    }
    .contact-form {
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
