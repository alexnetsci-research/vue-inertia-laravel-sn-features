<template>
  <v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini">
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

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
      mini: true,
      routes: [
        {
          name: "Flux",
          route: route("flux"),
          icon: "mdi-newspaper-variant-multiple",
        },
        {
          name: "Test",
          route: route("test"),
          icon: "mdi-newspaper-variant-multiple",
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
