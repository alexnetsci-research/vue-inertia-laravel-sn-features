<template>
  <layout-user-profile :profile="profile">
    <!-- <div v-if="$vuetify.breakpoint.lgAndUp">
      <breadcrumbs :list="breadcrumbs" />
    </div> -->

    <v-container fluid>
      <v-row
        v-if="$page.props.auth.user.id != profile.user.id"
        class="mx-auto flex-md-row flex-column justify-center"
      >
        <v-col class="col-md-6 text-center">
          <h2>{{ profile.user.name }} is not your friend yet!</h2>
          <p>
            <v-btn
              color="light-blue darken-2"
              dark
              elevation="3"
              >Send friend request</v-btn
            >

            <!-- <v-btn
              color="light-blue darken-2"
              dark
              elevation="3"
              @click="sendFriendRequest(profile.user.id)"
              >Send friend request</v-btn
            > -->
          </p>
        </v-col>
      </v-row>

      <v-row v-else class="mx-auto flex-md-row flex-column justify-center">
        <!-- <v-col class="col-md-6">
          <v-card :loading="loading" class="mx-auto mb-5">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-card-title>About me</v-card-title>

            <v-card-text> </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>My friends</v-card-title>

            <v-card-text> </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>My Pictures</v-card-title>

            <v-card-text> </v-card-text>
          </v-card>
        </v-col> -->

        <v-col class="col-md-6">
          <v-card
            class="mx-auto mb-5"
            v-for="(post, i) in posts"
            :key="i"
            @click="openDialog(post)"
          >
            <v-card-title>{{ post.title }}</v-card-title>
          </v-card>

          <v-dialog
            v-model="dialog.state"
            transition="dialog-top-transition"
            max-width="600"
          >
            <v-card :loading="loading" class="mx-auto" max-width="374">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="250" :src="dialog.post.img"></v-img>

              <v-card-title>{{ dialog.post.title }}</v-card-title>

              <v-card-text>{{ dialog.post.text }}</v-card-text>

              <!-- <v-divider class="mx-4"></v-divider>

              <v-card-title>Tonight's availability</v-card-title>

              <v-card-text>
                <v-chip-group
                  v-model="selection"
                  active-class="deep-purple accent-4 white--text"
                  column
                >
                  <v-chip>5:30PM</v-chip>

                  <v-chip>7:30PM</v-chip>

                  <v-chip>8:00PM</v-chip>

                  <v-chip>9:00PM</v-chip>
                </v-chip-group>
              </v-card-text>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Reserve
                </v-btn> -->
              <!-- </v-card-actions> -->
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </layout-user-profile>
</template>

<script>
export default {
  props: {
    profile: Object,
  },

  data() {
    return {
      dialog: {
        state: false,
        post: Object,
      },
      posts: [
        {
          title: "Post One",
          text: "This is the post one",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_TVE-1.svg/1200px-Logo_TVE-1.svg.png",
        },
        {
          title: "Post Two",
          text: "This is the post two",
          img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Logo_TVE-2.svg",
        },
        {
          title: "Post Three",
          text: "This is the post three",
          img: "https://www.kidibot.ca/wp-content/uploads/2018/01/number.jpg",
        },
      ],
      loading: false,
      selection: 1,
      // breadcrumbs: [
      //   {
      //     text: "Flux",
      //     disabled: false,
      //     href: route("flux"),
      //   },
      //   {
      //     text: "My Profile",
      //     disabled: true,
      //     href: route("profiles.user", this.$page.props.auth.user.id),
      //   },
      // ],
    };
  },

  methods: {
    // sendFriendRequest(requested_user_id) {
    //   axios
    //     .post(route("send.request", requested_user_id), {
    //       _method: "POST",
    //     })
    //     .then(({ data }) => {
    //       this.$inertia.visit(data, {
    //         preserveScroll: true,
    //       });
    //     });
    // },
    openDialog(post) {
      this.dialog.state = true;
      this.dialog.post = post;
    },
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>
