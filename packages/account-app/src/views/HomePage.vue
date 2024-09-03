<template>
  <v-container>
    <v-row class="my-6">
      <v-col cols="12">
        <h1 class="text-h2 mb-4">Log in</h1>
        <h2 class="text-h5 mb-4">or create a Dendra.Science account</h2>
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
      <!--
      <v-col cols="12">
        <pre v-if="isAuthenticated">
          <code>{{ user }}</code>
        </pre>
      </v-col>
 -->
      <v-col cols="12">
        <!-- <v-btn v-if="isAuthenticated" @click="logout">Log out</v-btn> -->
        <!-- <v-btn v-else @click="login">Log in</v-btn> -->

        <v-btn class="mr-2" href="http://localhost:8080/login">Log in</v-btn>
        <v-btn href="http://localhost:8080/logout">Log out</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// import { useAuth0 } from '@auth0/auth0-vue'

// const auth0 = useAuth0()

// const { isAuthenticated, user } = auth0

// function login() {
//   auth0.loginWithRedirect()
// }

// function logout() {
//   auth0.logout({
//     logoutParams: {
//       returnTo: window.location.origin
//     }
//   })
// }
</script>
