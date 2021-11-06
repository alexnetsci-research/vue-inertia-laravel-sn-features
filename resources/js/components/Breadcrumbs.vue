<template>
  <v-breadcrumbs :items="list">
    <template v-slot:divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :disabled="item.disabled">
        <inertia-link :href="item.href" as="button" type="button">
          {{ item.text }}
        </inertia-link>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style scoped>
.v-breadcrumbs >>> .v-breadcrumbs__item:not([class$="disabled"]) {
  color: #3ea8a3;
}
</style>