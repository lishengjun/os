<template>
  <v-footer dark height="auto">
    <v-card width="100%" flat tile>
      <v-card-text class="box white--text">
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex d-flex xs12 sm4>
              <v-card color="purple" dark>
                <v-card-title primary class="title">Lorem</v-card-title>
                <v-card-text>{{ lorem }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm4>
              <v-card color="blue lighten-2" dark>
                <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs12 sm4>
              <v-layout row wrap>
                <v-flex d-flex>
                  <v-card color="indigo" dark>
                    <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
                  </v-card>
                </v-flex>
                <v-flex d-flex>
                  <v-layout row wrap>
                    <v-flex v-for="n in 2" :key="n" d-flex xs12>
                      <v-card color="red lighten-2" dark>
                        <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-text class="copyright text-xs-center white--text"
        >&copy; 2019 牛逼普拉斯科技有限公司</v-card-text
      >
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'LayoutFooter',
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      contacts: [
        {
          title: '联系我们1',
          items: ['活动推广1', '业务咨询1', '商务合作1', '售后服务1']
        },
        {
          title: '联系我们2',
          items: ['活动推广2', '业务咨询2', '商务合作2', '售后服务2']
        },
        {
          title: '联系我们3',
          items: ['活动推广3', '业务咨询3', '商务合作3', '售后服务3']
        },
        {
          title: '联系我们4',
          items: ['活动推广4', '业务咨询4', '商务合作4', '售后服务4']
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.box {
  background-color: #242a31;
}
.copyright {
  background-color: #191e22;
}
</style>
