<template>
  <layout-app>
    <div>
      <breadcrumbs :list="breadcrumbs" />
    </div>

    <container>
      <template v-slot:header>
        Example2
        <v-spacer></v-spacer>
      </template>

      <template v-slot:main>
        <h1>Example2</h1>
      </template>
    </container>
  </layout-app>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        {
          text: "Example2",
          disabled: true,
          href: route("example"),
        },
      ],
    };
  },
};
</script>
