import { ref } from "vue"

export enum LiveStreamProvider {
  YT = "Youtube",
  LP = "Livepeer",
}

export const selectedLiveStream = ref()
const LPVideoPlayer = ref();
const YTVideoPlayer = ref();

export default function useHero() {
  return { 
    LPVideoPlayer,
    YTVideoPlayer
  }
}