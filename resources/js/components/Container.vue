<template>
  <v-container fluid>
    <v-card class="mx-auto" max-width :elevation="1">
      <v-list-item three-line>
        <v-list-item-content>
          <v-card-title v-if="!!$slots['header']">
            <slot name="header"></slot>
          </v-card-title>
          <slot name="main"></slot>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>
