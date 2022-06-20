<template>
<v-card>
  <div>
    <v-card-title>
      {{ coinInfo.name }}
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col
          cols="6"
          v-for="element, index in coinInfo"
          :key="element.key"
        >
          <strong>{{ index }}</strong>: {{ element }}
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="$router.push('/')"
      >
        Go Back
      </v-btn>
    </v-card-actions>
  </div>
</v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CoinInfo',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      getCoinInfo: 'coins/getCoinInfo',
    }),
    coinInfo() {
      return this.getCoinInfo(this.coinSymbol) ?? {};
    },
    coinSymbol() {
      return this.$route.params.symbol ?? '';
    }
  },
}
</script>
