<template>
  <v-app>
    <v-main>
      <v-container fluid style="height: 100%;">
        <slot></slot>
      </v-container>
    </v-main>

    <v-footer app padless disabled>
      <v-col class="auth-footer text-center" cols="12">
        <span class="auth-footer-text-flux">Flux</span><span class="auth-footer-text">&commat;{{ new Date().getFullYear() }} &copy;github.com/alexnet-dev</span>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>
