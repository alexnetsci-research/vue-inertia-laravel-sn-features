<template>
  <div style="position: absolute">
    <div v-if="$page.props.flash.success && show" class="alert">
      <v-snackbar v-model="$page.props.flash.success" bottom right>
        <span v-html="$page.props.flash.success"></span>
        <template v-slot:action="{ attrs }">
          <v-btn color="green" text @click="show = !show" v-bind="attrs"
            >Close</v-btn
          >
        </template>
      </v-snackbar>
    </div>

    <div v-if="$page.props.flash.error && show" class="alert">
      <v-snackbar v-model="$page.props.flash.error" bottom right>
        <span v-html="$page.props.flash.error"></span>
        <template v-slot:action="{ attrs }">
          <v-btn color="red" text @click="show = !show" v-bind="attrs"
            >Close</v-btn
          >
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
      },
      deep: true,
    },
  },
};
</script>
