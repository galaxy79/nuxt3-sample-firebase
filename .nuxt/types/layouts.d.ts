import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/govind/Documents/blog/sample-repos/nuxt3-firebase/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}