<template>
  <v-container>
    <v-row class="my-6">
      <v-col cols="12">
        <h1 class="text-h2 mb-4">Info</h1>

        <v-table class="text-body-1">
          <thead>
            <tr>
              <th>Variable</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>MODE</th>
              <td>
                <pre><code>{{ MODE }}</code></pre>
              </td>
            </tr>
            <tr>
              <th>GIT_COMMIT_SHA</th>
              <td>
                <pre><code>{{ GIT_COMMIT_SHA || '(not set)'}}</code></pre>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>

    <v-row class="mb-6">
      <v-col cols="12">
        <h1 class="text-h2 mb-4">Colors</h1>
        <p class="text-body-1">
          See
          <a
            href="https://vuetifyjs.com/en/styles/colors/#material-colors"
            target="_blank"
            >Material Design Palette</a
          >
          for a complete list of colors.
        </p>
      </v-col>
    </v-row>

    <v-row class="mb-6">
      <v-col
        v-for="[name, value] in Object.entries(
          theme.current.value.colors
        ).filter(([k, _]) => !k.startsWith('on-'))"
        :key="name"
        cols="12"
        sm="6"
      >
        <v-card :color="name" class="fill-height" rounded="0" variant="flat">
          <v-card-text class="text-body-1 text-center">
            {{ name }} <br />
            {{ value }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h1 class="text-h2 mb-4">Components</h1>
        <p class="text-body-1">
          See
          <a href="https://vuetifyjs.com/en/components/all/" target="_blank"
            >Vuetify</a
          >
          for a complete list of components.
        </p>
      </v-col>
    </v-row>

    <v-row class="mb-6">
      <v-col cols="12">
        <h2 class="text-h4">Buttons</h2>
      </v-col>
      <v-col v-for="(button, i) in BUTTONS" :key="i" cols="12" sm="6">
        <v-btn v-bind="button">{{ button.color }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useTheme } from 'vuetify'

/**
 * @typedef {NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">} BtnVariant
 */

/**
 * @type {{block: boolean, color: string, variant?: BtnVariant}[]}
 */
const BUTTONS = [
  {
    block: true,
    color: 'primary'
  },
  {
    block: true,
    color: 'primary',
    variant: 'outlined'
  },
  {
    block: true,
    color: 'secondary'
  },
  {
    block: true,
    color: 'secondary',
    variant: 'outlined'
  },
  {
    block: true,
    color: 'tertiary'
  },
  {
    block: true,
    color: 'tertiary',
    variant: 'outlined'
  },
  {
    block: true,
    color: 'info'
  },
  {
    block: true,
    color: 'info',
    variant: 'outlined'
  },
  {
    block: true,
    color: 'warning'
  },
  {
    block: true,
    color: 'warning',
    variant: 'outlined'
  },
  {
    block: true,
    color: 'error'
  },
  {
    block: true,
    color: 'error',
    variant: 'outlined'
  },
  {
    block: true,
    color: 'success'
  },
  {
    block: true,
    color: 'success',
    variant: 'flat'
  }
]
const GIT_COMMIT_SHA = import.meta.env.GIT_COMMIT_SHA
const MODE = import.meta.env.MODE

const theme = useTheme()
</script>
