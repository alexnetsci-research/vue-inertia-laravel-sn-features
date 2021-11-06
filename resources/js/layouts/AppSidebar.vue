<template>
  <v-navigation-drawer
    v-model="drawer"
    class="navigation-drawer"
    app
    clipped
    enable-resize-watcher
  >
    <v-list nav dense>
      <inertia-link
        v-for="(route, index) in routes"
        :href="route.route"
        :key="index"
      >
        <v-list-item link>
          <v-list-item-action>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title active-class="highlighted">{{
              route.name
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </inertia-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: "Inertia",
          route: route("inertia"),
          icon: "mdi-ab-testing",
        },
        {
          name: "Example",
          route: route("example"),
          icon: "mdi-ab-testing",
        },
      ],
    };
  },
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
