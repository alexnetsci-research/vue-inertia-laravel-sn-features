<template>
  <layout-app>
    <div>
      <breadcrumbs :list="breadcrumbs" />
    </div>

    <v-container fluid>
      <v-row class="mx-auto">
        <v-col class="col-md-6">
          <v-bottom-sheet v-model="sheet" inset>
            <template v-slot:activator="{ on, attrs }">
              <v-card class="mx-auto mb-5" v-bind="attrs" v-on="on">
                <v-card-title>Cafe Badilico</v-card-title>
              </v-card>
            </template>
            <v-sheet class="text-center">
              <v-btn class="mx-auto" text color="error" @click="sheet = !sheet">
                close
              </v-btn>
              <v-container class="my-3">
                <v-row class="mx-auto">
                  <v-card :loading="loading" class="mx-auto mb-5">
                    <template slot="progress">
                      <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                      ></v-progress-linear>
                    </template>

                    <v-img
                      height="250"
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>

                    <v-card-title>Cafe Badilico</v-card-title>

                    <v-card-text>
                      <v-row align="center" class="mx-0">
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">4.5 (413)</div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                      <div>
                        Small plates, salads & sandwiches - an intimate setting
                        with 12 indoor seats plus patio seating.
                      </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

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
                      <v-btn
                        color="deep-purple lighten-2"
                        text
                        @click="reserve"
                      >
                        Reserve
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-row>
              </v-container>
            </v-sheet>
          </v-bottom-sheet>
        </v-col>
      </v-row>
    </v-container>
  </layout-app>
</template>

<script>
export default {
  data() {
    return {
      sheet: false,
      loading: false,
      selection: 1,
      breadcrumbs: [
        {
          text: "Flux",
          disabled: true,
          href: route("flux"),
        },
      ],
    };
  },

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 1000);
    },
  },
};
</script>
