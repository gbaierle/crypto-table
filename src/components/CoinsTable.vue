<template>
<div>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
      :headers="headers"
      :items="coins"
      :items-per-page="10"
      :search="search"
      class="elevation-1"
    >
      <template #item.name="{ item }">
        <router-link
          :to="{
            path: '/coins/' + item.symbol,
            params: { symbol: item.symbol }
          }"
        >
          {{ item.name }}
        </router-link>
      </template>
      <template #item.icon="{ item }">
        <img
          :src="item.icon"
          :alt="item.name"
          width="20"
          height="20"
        />
      </template>
    </v-data-table>
  </v-card>
</div>

</template>

<script>
export default {
  name: 'CoinTable',
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name', sortable: false },
        { text: 'Rank', value: 'rank' },
        { text: 'Symbol', value: 'symbol', sortable: false },
        { text: 'Price', value: 'price' },
        { text: 'Icon', value: 'icon', sortable: false },
      ],
      search: '',
    };
  },
  computed: {
    coins() {
      return this.$store.getters['coins/getCoins'];
    },
  },
}
</script>
