import {Ref,ref,onMounted,onUnmounted} from 'vue'

export const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutAside = ref(false)
  const width = document.documentElement.clientWidth
  if (width > 500) return isClickOutAside
  const handler = (e: MouseEvent | TouchEvent) => {
    if (elementRef.value) {
      isClickOutAside.value = elementRef.value?.contains(e.target as HTMLElement)
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickOutAside
}
