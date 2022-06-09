import { ref } from "vue"

export enum LiveStreamProvider {
  YT = "Youtube",
  LP = "Livepeer",
}

export const selectedLiveStream = ref()
