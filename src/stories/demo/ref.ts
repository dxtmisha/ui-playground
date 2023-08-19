import { computed, ref } from 'vue'

export const demoRef = [
  ref(),
  ref('hello'),
  computed(() => 'hi')
]
