<template>
  <v-navigation-drawer
    ref="navbar"
    app
    :value="$vuetify.breakpoint.mdAndDown ? drawer : true"
    :expand-on-hover="$vuetify.breakpoint.lgAndUp"
  >
    <v-list>
      <inertia-link
        :href="$route('my.profile')"
        class="text-decoration-none"
      >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="http://www.cybecys.com/wp-content/uploads/2017/07/no-profile.png"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">{{
              $page.props.auth.user.name
            }}</v-list-item-title>
            <v-list-item-subtitle>{{
              $page.props.auth.user.email
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </inertia-link>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <inertia-link
        v-for="(route, index) in routes"
        :href="route.route"
        :key="index"
        class="text-decoration-none"
      >
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item>
      </inertia-link>
    </v-list>

    <template v-slot:append>
      <v-divider></v-divider>
      <v-list dense>
        <span @click="logout" class="btn-block text-left">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </span>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: "Flux",
          route: route("flux"),
          icon: "mdi-newspaper-variant-multiple",
        },
      ],
    };
  },

  mounted() {
    this.$watch(
      () => {
        return this.$refs.navbar.isActive;
      },
      (val) => {
        this.$store.state.drawer = val;
      }
    );
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

  methods: {
    logout() {
      this.$inertia.post(route("logout"));
    },
  },
};
</script>
