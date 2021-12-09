<template>
  <v-app>
    <!-- <sidebar-app></sidebar-app> -->

    <!-- <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>software_program</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar> -->

    <sidebar-app></sidebar-app>

    <v-app-bar
      app
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Title</v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
    </v-app-bar>

    <v-main>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="900"
      >
        <v-container fluid>
          <slot></slot>
        </v-container>
      </v-sheet>
    </v-main>

    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>software_program</strong>
      </v-col>
    </v-footer>

    <!-- 
    <v-main>
      <flash-messages></flash-messages>

      <v-container fluid>
        
      </v-container>
    </v-main> -->
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
