<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
    <template v-slot:[`item.calories`]="{ item }">
      <v-chip
        :color="getColor(item.calories)"
        dark
      >
        {{ item.calories }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "Home",
  props: ['headers','desserts'],
  data: () => ({
    saludo: 'text-primary'
  }),
  methods:{
      getColor(calories) {
      if (calories > 400) return "red";
      else if (calories > 200) return "orange";
      else return "green";
    },
  },
  components: {},
};
</script>