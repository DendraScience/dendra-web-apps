<template>
  <v-container fluid>
    <v-row class="mb-6">
      <v-col cols="12">
        <h1 class="text-h3 mb-4">First Page</h1>
        <p class="text-body-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </v-col>

      <v-col cols="12">
        <router-link :to="{ name: 'home' }"> Home page </router-link> |
        <router-link :to="{ name: 'first' }"> First page </router-link> |
        <router-link :to="{ name: 'second' }"> Second page </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
console.log('before suspense1...')
await new Promise(resolve => setTimeout(resolve, 2000))
console.log('after suspense1...')
</script>
