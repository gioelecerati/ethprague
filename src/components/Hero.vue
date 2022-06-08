<template>
  <!-- <div class="hero">
    <div class="hero__image-desktop">
      <img class="hero__image-eth" src="../assets/hero/hero_eth.svg" />
      <img class="hero__image-polis" src="../assets/hero/hero_polis.svg" />
      <img class="hero__image-text" src="../assets/hero/hero_text.svg" />
      <img class="hero__image-prague" src="../assets/hero/hero_prague.svg" />
      <img class="hero__image-main-image" :src="getHeroImage(DeviceType.DESKTOP)" />
    </div>
    <img class="hero__image-mobile" :src="getHeroImage(DeviceType.MOBIL)" alt="hero" />
  </div> -->

    
  <div class="hero__stream-buttons" v-if="!selectedLiveStream">
    <h1 class="hero__stream-title">
      Live stream
    </h1>
    <div class="hero__buttons-row">
      <button class="hero__button" @click="selectStreamProvider(LiveStreamProvider.LP)">
        Livepeer <span class="hero__headless-arrow" />
      </button>

      <button class="hero__button" @click="selectStreamProvider(LiveStreamProvider.YT)">
        YouTube <span class="hero__headless-arrow" />
      </button>
    </div>
  </div>

  <div v-else>
    <iframe v-if="selectedLiveStream === LiveStreamProvider.LP" width="560" height="315" src="" title="Livepeer video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>

    <iframe v-if="selectedLiveStream === LiveStreamProvider.YT" width="560" height="315" src="https://www.youtube.com/embed/31SV969GXaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>

  </div>
  
  
  <div class="hero__event-date">
		<div class="hero__event-date-marquee-block">
			<div class="hero__event-date-marquee-inner to-right">
				<span>
					<div class="hero__event-date-marquee-item">
					ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
					ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
					ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
					ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
					ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
				</span>
				<span>
					<div class="hero__event-date-marquee-item">
						ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
						ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
						ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
						ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
					<div class="hero__event-date-marquee-item">
						ETH Prague &nbsp;  June 10th — 12th &nbsp;
					</div>
				</span>
		</div>
	</div>
    <div class="hero__event-date-text-mobile">ETH Prague <br/> June 10th — 12th</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


enum DeviceType {
  MOBIL = 'mobile',
  DESKTOP = 'desktop',
}

enum LiveStreamProvider {
  YT = 'Youtube',
  LP = 'Livepeer',
}
const selectedLiveStream = ref()

const stripe = 'ETH Prague \u00A0  June 10th — 12th \u00A0'.repeat(3)

const selectStreamProvider = (provider: LiveStreamProvider) => {
  selectedLiveStream.value = provider
}

const getHeroImage = (forDevice: string) => {
  const randomHeroNum = Math.floor(Math.random() * 4) + 1;
  switch (forDevice) {
    case DeviceType.MOBIL:
      return require(`../assets/hero/hero_mobile_${randomHeroNum}.webp`)
    case DeviceType.DESKTOP:
      return require(`../assets/hero/hero_${randomHeroNum}.webp`)
  }
}

</script>

<style scoped>
.hero {
  background: linear-gradient(180deg, #00ffe5 0%, #88ff6b 35.42%, #ffff00 100%);
  transform: matrix(1, 0, 0, -1, 0, 0);
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero__image-desktop {
  transform: matrix(1, 0, 0, -1, 0, 0);
  display: none;
  height: 700px;
  width: 1100px;
  position: relative;
}

.hero__image-mobile {
  transform: matrix(1, 0, 0, -1, 0, 0);
  max-width: 100%;
  padding: 15px;
}

.hero__image-eth {
  position: absolute;
  top: 53px;
  left: 0;
}
.hero__image-polis {
  position: absolute;
  top: 53px;
  right: 0;
}
.hero__image-text {
  position: absolute;
  right: 10px;
  bottom: 50px;
}
.hero__image-prague {
  position: absolute;
  bottom: 15px;
  right: 275px;
  z-index: 10;
}
.hero__image-main-image {
  position: absolute;
  bottom: -150px;
  right: 250px;
  width: 605px;
}

.hero__event-date {
  --marquee-block-width--mobile: 470px;
  --marquee-block-width--desktop: 680px;
  overflow: hidden;
  background-color: var(--col-primary-accent);
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  height: 110px;
  font-size: 27px;
  color: var(--col-primary-action);
  display: flex;
  align-items: center;
}

.hero__event-date-marquee-block {
  --total-marquee-items: 5;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: none;
  align-items: center;
  width: calc((var(--marquee-block-width--mobile)) * (var(--total-marquee-items)));
}
.hero__event-date-marquee-inner {
  width: 200%;
  position: absolute;
}

.hero__event-date-marquee-inner.to-right {
  animation: marqueeRight 25s linear infinite;
}
.hero__event-date-marquee-item {
  width: var(--marquee-block-width--mobile);
  display: inline-block;
  transition: all .2s ease-out;
}

@keyframes marqueeRight {
  0% { 
    left: -100%; 
  }
  100% {
   left: 0; 
  }
}

.hero__event-date-text-mobile {
  text-align: center;
  width: 100%;
}

@media (min-width: 1120px) {
  .hero__image-desktop {
    display: block;
  }

  .hero__event-date {
    height: 150px;
    font-size: 40px;
  }
  .hero__event-date-marquee-block {
    display: flex;
    width: calc((var(--marquee-block-width--desktop)) * (var(--total-marquee-items)));
  }
  .hero__event-date-marquee-item {
    width: var(--marquee-block-width--desktop);
  }
  
  .hero__image-mobile {
    display: none;
  }
}

@media (min-width: 600px) {
  .hero__event-date-marquee-block {
    display: flex;
  }

  .hero__event-date-text-mobile {
    display: none;
  }

  .hero__event-date {
    display: block;
  }
}


iframe {
  display: block;       /* iframes are inline by default */
  background: #000;
  border: none;         /* Reset default border */
  height: 90vh;        /* Viewport-relative units */
  width: 100%;
}


.hero__buttons-row {
  display: flex;
  gap: 30px;
  flex-direction: column;
  max-width: 1600px;
  width: 100%;
}

@media (max-width: 1120px) {
  .hero__buttons-row {
    flex-wrap: wrap;
    gap: 30px;
  }
  .hero__button-one-button {
    max-width: 90%;
  }
}


.hero__button:hover,
.hero__button:focus {
  border: solid 2px var(--col-primary-action);
  color: white;
  box-shadow: inset 30px -8em 0 0 var(--col-primary-action);
}

.hero__button:hover .hero__headless-arrow {
  border-left: solid 2px white;
  border-bottom: solid 2px white;
}

.hero__headless-arrow {
  border-left: solid 2px var(--col-primary-action);
  border-bottom: solid 2px var(--col-primary-action);
  transform: rotate(-135deg) skew(5deg, 5deg) translate(1px, -1px);
  width: 12px;
  height: 12px;
  margin: 0 12px 2px;
}


.hero__button {
  transition: all 0.3s;
  margin: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  letter-spacing: 0px;
  text-transform: uppercase;
  font-weight: 300;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 25px;
  line-height: 29px;
  color: var(--col-primary-action);
  text-align: center;

  border-radius: 300px;
  width: 100%;
  height: 170px;
  border: solid 2px var(--col-primary-action);
  background-color: white;

  position: relative;
}

.hero__stream-buttons {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  width: 100%;
  padding: 0 var(--app-padding);
}
.hero__stream-title {
  margin-bottom: 5rem;
}

@media (max-width: 1120px) {
  .hero__button {
    font-size: 20px;
    height: 150px;
  }
}

@media (max-width: 600px) {
  .hero__button {
    font-size: 15px;
    height: 120px;
    white-space: break-spaces;
  }
}


</style>
