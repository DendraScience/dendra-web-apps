import { VLigatureIcon } from 'vuetify/lib/composables/icons'
import { h } from 'vue'

// SEE: https://fonts.google.com/icons
const aliases = {
  collapse: 'expand_less',
  complete: 'done',
  cancel: 'cancel',
  close: 'close',
  delete: 'cancel', // delete (e.g. v-chip close)
  clear: 'cancel',
  success: 'check_circle',
  info: 'info',
  warning: 'warning',
  error: 'error',
  prev: 'chevron_left',
  next: 'chevron_right',
  checkboxOn: 'check_box',
  checkboxOff: 'check_box',
  checkboxIndeterminate: 'indeterminate_check_box',
  delimiter: 'circle', // for carousel
  sortAsc: 'arrow_upward',
  sortDesc: 'arrow_downward',
  expand: 'expand_more',
  menu: 'menu',
  subgroup: 'arrow_drop_down',
  dropdown: 'arrow_drop_down',
  radioOn: 'radio_button_checked',
  radioOff: 'radio_button_unchecked',
  edit: 'edit',
  ratingEmpty: 'star',
  ratingFull: 'star_rate',
  ratingHalf: 'star_half',
  loading: 'cached',
  first: 'first_page',
  last: 'last_page',
  unfold: 'unfold_more',
  file: 'attach_file',
  plus: 'add',
  minus: 'remove',
  calendar: 'event'
}

const mso = {
  component: props =>
    h(VLigatureIcon, { ...props, class: 'material-symbols-outlined' })
}

export { aliases, mso }
