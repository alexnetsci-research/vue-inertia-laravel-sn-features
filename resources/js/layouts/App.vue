<template>
  <v-app>
    <v-app-bar app dark dense absolute class="app-layout-app-bar-color">
      <v-app-bar-nav-icon @click="visitMyProfile">
        <v-avatar class="profile-picture" size="30" color="white">
          <v-img
            v-if="$page.props.auth.user.picture"
            alt="Profile Picture"
            :src="$page.props.auth.user.picture"
            :lazy-src="$page.props.auth.user.picture"
          ></v-img>
          <v-icon v-else large color="light-blue darken-2">mdi-account</v-icon>
        </v-avatar>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Flux</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-dialog v-model="searchDialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <v-card dark class="app-layout-app-bar-color">
          <v-card-text>
            <v-autocomplete
              :items="people"
              filled
              label="Search for users"
              item-text="name"
              item-value="name"
            >
              <template v-slot:item="data">
                <template>
                  <v-list-item link @click="visitUserProfile(data.item.id)">
                    <v-list-item-avatar v-if="data.item.profile.picture">
                      <v-img :src="data.item.profile.picture" />
                    </v-list-item-avatar>
                    <v-list-item-avatar v-else>
                      <v-icon large color="light-blue darken-2"
                        >mdi-account</v-icon
                      >
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="data.item.name"
                      ></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </template>
            </v-autocomplete>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-menu bottom left offset-y>
        <template v-slot:activator="{ attrs, on }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list nav dense>
          <v-list-item link @click="visitMyProfile">
            <v-list-item-icon class="mr-3">
              <v-avatar class="profile-picture" size="30" color="white">
                <v-img
                  v-if="$page.props.auth.user.picture"
                  alt="Profile Picture"
                  :src="$page.props.auth.user.picture"
                  :lazy-src="$page.props.auth.user.picture"
                ></v-img>
                <v-icon v-else large color="light-blue darken-2"
                  >mdi-account</v-icon
                >
              </v-avatar>
            </v-list-item-icon>
            <v-list-item-title class="mt-1">My Profile</v-list-item-title>
          </v-list-item>

          <inertia-link
            v-for="(route, i) in routes"
            :href="route.route"
            :key="i"
            class="text-decoration-none"
          >
            <v-list-item link>
              <v-list-item-icon class="mr-3">
                <v-icon>{{ route.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ route.name }}</v-list-item-title>
            </v-list-item>
          </inertia-link>

          <v-divider></v-divider>

          <inertia-link href="route('settings')" class="text-decoration-none">
            <v-list-item link>
              <v-list-item-icon class="mr-3">
                <v-icon>mdi-account-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>
          </inertia-link>

          <v-divider></v-divider>

          <v-list-item link @click="logout">
            <v-list-item-icon class="mr-3">
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-sheet class="my-profile-layout-v-sheet overflow-y-auto">
        <v-container fluid class="my-profile-layout-main-sheet-container">
          <flash-messages></flash-messages>
          <slot></slot>
        </v-container>
      </v-sheet>
    </v-main>

    <v-bottom-navigation app fixed :value="value" color="primary" horizontal>
      <v-spacer></v-spacer>

      <v-btn small @click="visitMyProfile">
        <span>My Profile</span>

        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn small @click="visitFlux">
        <span>Flux</span>

        <v-icon>mdi-newspaper-variant-multiple</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      people: this.$page.props.user_profiles,
      searchDialog: false,
      value: route().current("flux") ? 1 : 2,
      routes: [
        {
          name: "Flux",
          route: route("flux"),
          icon: "mdi-newspaper-variant-multiple",
        },
      ],
      form: {
        profile_picture: null,
      },
    };
  },

  methods: {
    visitUserProfile(data) {
      return data === this.$page.props.auth.user.id
        ? this.$inertia.visit(route("my.profile", data))
        : this.$inertia.visit(route("profiles.user", data));
    },
    visitMyProfile() {
      return this.$inertia.visit(
        route("my.profile", this.$page.props.auth.user.id)
      );
    },
    visitFlux() {
      return this.$inertia.visit(route("flux"));
    },
    logout() {
      this.$inertia.post(route("logout"));
    },
  },
};
</script>
