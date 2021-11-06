<template>
  <v-app>
    <sidebar-app></sidebar-app>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>software_program</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <flash-messages></flash-messages>

      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-main>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>software_program</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(value) {
        this.$store.commit("UPDATE_DRAWER_STATE", value);
      },
    },
  },
};
</script>
