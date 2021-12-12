<template>
  <layout-auth>
    <v-row class="mx-auto" align="center" justify="center" style="height: 100%">
      <v-col cols="12" sm="7" md="5" lg="3">
        <h1 class="text-center mb-1 display-4" disabled style="color: #0277bd">
          Flux
        </h1>
        <v-card class="rounded-lg" style="padding: 9px 0px">
          <v-spacer></v-spacer>
          <v-card-text>
            <v-form @submit.prevent="submit">
              <v-text-field
                v-model="form.email"
                label="Email"
                type="text"
                outlined
                color="light-blue darken-2"
                @keydown.enter="submit"
                :error-messages="
                  $page.props.errors.email ? $page.props.errors.email[0] : []
                "
              />
              <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                outlined
                color="light-blue darken-2"
                @keydown.enter="submit"
                :error-messages="
                  $page.props.errors.password
                    ? $page.props.errors.password[0]
                    : []
                "
              />
            </v-form>

            <v-row class="flex-column mt-1" style="margin-bottom: 1px">
              <v-col class="text-center" style="padding: 0">
                <v-btn
                  color="light-blue darken-2"
                  dark
                  @click="submit"
                  large
                  class="col-9 font-weight-bold rounded-tl-xl"
                  elevation="3"
                  >Login</v-btn
                >
              </v-col>

              <!-- <v-divider></v-divider> -->

              <v-col class="text-center" style="padding: 0">
                <v-btn
                  color="green lighten-1"
                  dark
                  large
                  class="col-9 font-weight-bold rounded-br-xl"
                  elevation="3"
                  outlined
                  >Create account</v-btn
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </layout-auth>
</template>

<script>
export default {
  props: {
    errors: Object,
  },

  data() {
    return {
      sending: false,
      form: {
        email: "",
        password: "",
        remember: false,
      },
    };
  },

  methods: {
    submit() {
      this.sending = true;
      this.$inertia.post(
        route("login.attempt"),
        {
          email: this.form.email,
          password: this.form.password,
          remember: this.form.remember,
        },
        {
          onFinish: (visit) => {
            this.sending = false;
          },
        }
      );
    },
  },
};
</script>
