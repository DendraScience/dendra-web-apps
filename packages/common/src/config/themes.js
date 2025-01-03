import colors from 'vuetify/util/colors'

export const generic = {
  themes: {
    dark: {
      dark: true
    },

    light: {
      dark: false
    }
  }
}

export const dendra = {
  themes: {
    dark: {
      dark: true,

      colors: {
        primary: colors.lightBlue.base,
        secondary: colors.blueGrey.lighten3,
        tertiary: colors.blueGrey.base,
        info: colors.lightBlue.lighten5,
        warning: colors.amber.darken3,
        error: colors.deepOrange.darken3,
        success: colors.green.darken2,
        'brand-surface': '#1d3148'
      }
    },

    light: {
      dark: false,

      colors: {
        primary: colors.lightBlue.base,
        secondary: colors.blueGrey.lighten3,
        tertiary: colors.blueGrey.darken1,
        info: colors.lightBlue.lighten3,
        warning: colors.amber.darken3,
        error: colors.deepOrange.darken3,
        success: colors.green.darken3,
        'brand-surface': '#e1f5fe'
      }
    }
  }
}
