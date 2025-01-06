<template>
  <v-navigation-drawer
    floating
    location="end"
    temporary
    :width="$vuetify.display.mdAndUp ? 680 : 280"
  >
    <v-card-item
      class="position-sticky top-0 bg-brand-surface py-3"
      subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      title="Adams Group"
    >
      <template #append>
        <v-btn class="mt-n6" density="compact" icon="$close" variant="text" />
      </template>
    </v-card-item>

    <div class="pa-4">
      <v-sheet
        border="dashed md"
        class="pa-4"
        color="surface-light"
        height="365"
        rounded="lg"
        width="100%"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </v-sheet>
    </div>

    <div class="pa-4">
      <v-sheet
        border="dashed md"
        class="pa-4"
        color="surface-light"
        height="365"
        rounded="lg"
        width="100%"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </v-sheet>
    </div>

    <div class="pa-4">
      <v-sheet
        border="dashed md"
        class="pa-4"
        color="surface-light"
        height="365"
        rounded="lg"
        width="100%"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </v-sheet>
    </div>
  </v-navigation-drawer>
</template>
