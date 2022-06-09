<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <span id="simulateClick"/>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue';
import { onMounted, onUnmounted } from 'vue';
import useHero, { selectedLiveStream, LiveStreamProvider } from "@/components/useHero";

const {LPVideoPlayer, YTVideoPlayer} = useHero()

const showVideoStreamInPip = async () => {
  console.log(window.pageYOffset)
  if(window.pageYOffset > 50) {
    
    if (selectedLiveStream.value === LiveStreamProvider.LP) {
      // if (document.getElementById('simulateClick')) {
      //   document.getElementById('simulateClick').click();
      // }
      setTimeout(() => {
      LPVideoPlayer.value.player.requestPictureInPicture()
      }, 100)
      console.log('LPVideoPlayer.value', LPVideoPlayer.value.player)
      LPVideoPlayer.value
    }

    if (selectedLiveStream.value === LiveStreamProvider.YT) {
      YTVideoPlayer.value
    }
  }

  if(window.pageYOffset < 50 && document.pictureInPictureElement) {

    await document.exitPictureInPicture();

  }

  // setTimeout(() => {
  //   video.requestPictureInPicture()
  //     .then(() => {
  //       // auto-exit in 1s
  //       setTimeout(() => {
  //         document.exitPictureInPicture();
  //       }, 1000);
  //     })
  //     .catch(console.error);
  // }, ms);
}

onMounted(async () => {
  window.addEventListener("scroll", showVideoStreamInPip, { passive: true });

})

onUnmounted(() => {
  window.removeEventListener("scroll", showVideoStreamInPip);
});
</script>

<style lang="css">
  @import 'styles/normalize.css';
  @import "styles/skeleton.css";

  * {
    box-sizing: border-box;
  }

  :root {
    /* colors */
    --col-primary-action: #5400ff;
    --col-primary-accent: #FFFF00;
    --col-light-gray-bg: rgba(0, 0, 0, 0.08);

    --mobile-breakpoint: 1120px;
    --app-padding: 15px;

    --header-height: 80px;
  }

  html, body {
    font-family: "Archivo SemiExpanded", Verdana, sans-serif;
    letter-spacing: 0px;
    /* color: #ffffff; */
    /* background: url('./assets/placeholderpunk.jpeg') no-repeat center center fixed; */
    scroll-behavior: smooth;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  ::-moz-selection { /* Code for Firefox */
    color: var(--col-primary-action);
    background: var(--col-primary-accent);
  }

  ::selection {
    color: var(--col-primary-action);
    background: var(--col-primary-accent);
  }

  @font-face {
    font-family: "Archivo SemiExpanded"; /*a name to be used later*/
    src: url("assets/font/Archivo_SemiExpanded-Medium.ttf"); /*URL to font*/
  }

  @font-face {
    font-family: 'Helvetica Neue';
    src: url('assets/font/Helvetica.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica Neue Bold';
    src: url('assets/font/Helvetica-Bold.ttf');
    font-weight: normal;
    font-style: normal;
  }
</style>
