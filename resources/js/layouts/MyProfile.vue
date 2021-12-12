<template>
  <v-app>
    <v-app-bar
      app
      absolute
      color="#fcb69f"
      dark
      prominent
      :src="cover"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-dialog v-model="profilePictureDialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-avatar
            class="profile profile-picture mr-3 mt-4"
            size="90"
            v-bind="attrs"
            v-on="on"
            color="white"
          >
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
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Upload Profile Picture</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="uploadProfilePicture">
              <v-file-input
                v-model="form.profile_picture"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="Profile Picture"
                :error-messages="
                  $page.props.errors.profile_picture
                    ? $page.props.errors.profile_picture[0]
                    : []
                "
              ></v-file-input>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-2"
              text
              @click="profilePictureDialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="light-blue darken-2"
              text
              @click="uploadProfilePicture"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-app-bar-title>
        Welcome, {{ $page.props.auth.user.name }}!
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-dialog v-model="profileCoverDialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-camera</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Upload Profile Cover</span>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="uploadProfileCover">
              <v-file-input
                v-model="form.profile_cover"
                placeholder="Pick a cover photo"
                prepend-icon="mdi-camera"
                label="Profile Cover"
                :error-messages="
                  $page.props.errors.profile_cover
                    ? $page.props.errors.profile_cover[0]
                    : []
                "
              ></v-file-input>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-2"
              text
              @click="profileCoverDialog = false"
            >
              Close
            </v-btn>
            <v-btn color="light-blue darken-2" text @click="uploadProfileCover">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

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
                <!-- <template v-if="(typeof data.item !== 'object')">
                    <v-list-item-content v-text="data.item"></v-list-item-content>
                  </template> -->
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
      <v-sheet
        id="scrolling-techniques-2"
        class="my-profile-layout-v-sheet overflow-y-auto"
      >
        <v-container class="my-profile-layout-main-sheet-container">
          <flash-messages></flash-messages>
          <slot></slot>
        </v-container>
      </v-sheet>
    </v-main>

    <v-bottom-navigation
      app
      fixed
      :value="value"
      color="light-blue darken-2"
      horizontal
    >
      <v-spacer></v-spacer>

      <v-btn @click="visitMyProfile">
        <span>My Profile</span>

        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn @click="visitFlux">
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
      profilePictureDialog: false,
      profileCoverDialog: false,
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
        profile_cover: null,
      },
    };
  },

  computed: {
    cover: {
      get() {
        return this.$page.props.auth.user.cover
          ? this.$page.props.auth.user.cover
          : "https://picsum.photos/1920/1080?random";
      },
    },
  },

  created() {
    this.initializeForm();
  },

  methods: {
    initializeForm() {
      this.form = {
        picture: null,
        profile_cover: null,
      };
    },
    visitUserProfile(data) {
      return data === this.$page.props.auth.user.id
        ? this.$inertia.visit(route("profiles.me", data))
        : this.$inertia.visit(route("profiles.user", data));
    },
    visitMyProfile() {
      return this.$inertia.visit(
        route("profiles.me", this.$page.props.auth.user.id)
      );
    },
    visitFlux() {
      return this.$inertia.visit(route("flux"));
    },
    uploadProfilePicture() {
      this.$inertia.post(
        route("profiles.upload_profile_picture"),
        {
          profile_picture: this.form.profile_picture,
        },
        {
          onSuccess: () => {
            this.profilePictureDialog = false;
            this.initializeForm();
          },
        }
      );
    },
    uploadProfileCover() {
      this.$inertia.post(
        route("profiles.upload_profile_cover"),
        {
          profile_cover: this.form.profile_cover,
        },
        {
          onSuccess: () => {
            this.profileCoverDialog = false;
            this.initializeForm();
          },
        }
      );
    },
    logout() {
      this.$inertia.post(route("logout"));
    },
  },
};
</script>
