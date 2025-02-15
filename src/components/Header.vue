<template>
  <div class="header">
    <div class="header__content">
      <router-link
        class="header__local-link"
        :to="{ path: '/', hash: '#manifesto-buttons' }"
      >
        <img class="header__logo-eth" src="../assets/ETH.svg" alt="tickets" />
      </router-link>

      <div class="header__local-links">
        <router-link
          class="header__local-link"
          v-for="localLink in localLinks"
          :to="{ path: '/', hash: `#${localLink}` }"
          :key="localLink"
          >{{ localLink }}
        </router-link>
        <router-link @click="isHamMenuOpen = false" class="header__local-link" :to="{ path: '/', hash: '#SponsorsAndPartners' }">
          Sponsors & Partners
        </router-link>
        <router-link @click="isHamMenuOpen = false" class="header__local-link" :to="{ path: '/', hash: '#liveStream' }">
          Live stream
        </router-link>
        <router-link class="header__local-link" to="/schedule">
          Schedule
        </router-link>
      </div>

      <div class="header__social-links">
        <a href="https://t.me/ethprague" target="_blank">
          <img src="../assets/telegram.svg" alt="telegram" />
        </a>

        <a href="https://twitter.com/EthPrague" target="_blank">
          <img src="../assets/twitter.svg" alt="twitter" />
        </a>

        <a href="https://gm.events/" target="_blank">
          <img src="../assets/gm.svg" alt="gm.events" />
        </a>
      </div>
    </div>
  </div>

  <div class="header-mobile">
    <div class="header-mobile__content">
       <router-link
        class="header__eth-logo-link"
        :to="{ path: '/', hash: '#manifesto-buttons' }"
        @click="isHamMenuOpen = false"
      >
        <img class="header__logo-eth" src="../assets/ETH.svg" alt="tickets" />
      </router-link>


      <img
        class="header-mobile__hamburger-menu"
        src="../assets/hamburger-menu.svg"
        alt="menu"
        @click="isHamMenuOpen = !isHamMenuOpen"
      />

      <div class="header__social-links">
        <a href="https://t.me/ethprague" target="_blank">
          <img src="../assets/telegram.svg" alt="telegram" />
        </a>

        <a href="https://twitter.com/EthPrague" target="_blank">
          <img src="../assets/twitter.svg" alt="twitter" />
        </a>

        <a href="https://gm.events/" target="_blank">
          <img src="../assets/gm.svg" alt="gm.events" />
        </a>
      </div>
    </div>

    <Transition name="fade">
      <div v-show="isHamMenuOpen" class="header-mobile__local-links">
        <router-link
          @click="isHamMenuOpen = false"
          class="header-mobile__local-link"
          v-for="localLink in localLinks"
          :to="{ path: '/', hash: `#${localLink}` }"
          :key="localLink"
          >{{ localLink }}
        </router-link>
        <router-link @click="isHamMenuOpen = false" class="header-mobile__local-link" :to="{ path: '/', hash: '#SponsorsAndPartners' }">
          Sponsors & Partners
        </router-link>
        <router-link @click="isHamMenuOpen = false" class="header-mobile__local-link" :to="{ path: '/', hash: '#liveStream' }">
          Live stream
        </router-link>
        <router-link @click="isHamMenuOpen = false" class="header-mobile__local-link" to="/schedule">
          Schedule
        </router-link>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isHamMenuOpen = ref(false);
const localLinks = [
  "Manifesto",
  // "Hackathon",
  // "Speakers",
  "FAQ",
];
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  height: var(--header-height);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--col-primary-action);
  z-index: 100;
}

@media only screen and (max-width: 1120px) {
  .header {
    display: none;
  }
}

.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1100px;
  margin: 0 20px;
}

.header__button {
  background-color: var(--col-primary-action);
  color: white;
  border-radius: 50px;
  padding: 4px 12px;
  margin: 0;

  text-transform: uppercase;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: center;
}

.header__button-mobile-menu {
  margin-top: 30px;
}

.header__button:hover {
  background-color: white;
  color: var(--col-primary-action);
}

.header__local-links {
  padding: 0 20px;
}

.header__social-links {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  width: 15rem;
}

.header__eth-logo-link {
  width: 15rem;
}

.header__local-link {
  text-decoration: none;
  color: white;
  padding: 0 10px;

  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
}

.header__local-link:hover {
  text-decoration: underline;
}

.header-mobile {
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--col-primary-action);
  z-index: 100;
}

@media only screen and (min-width: 1120px) {
  .header-mobile {
    display: none;
  }
}

.header-mobile__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 10px;
}



.header-mobile__hamburger-menu {
  margin: 0 1rem;
  cursor: pointer;
}

.header-mobile__local-links {
  align-items: center;
  background-color: var(--col-primary-action);
  display: flex;
  flex-direction: column;
  font-size: 25px;
  min-height: 100vh;
  padding: 110px 30px 50px 50px;
  position: fixed;
  top: 80px;
  width: 100%;
  z-index: 100;
}

.header-mobile__local-link {
  text-decoration: none;
  color: white;
  padding: 23px 10px;
  font-family: "Archivo SemiExpanded", Verdana, sans-serif;
  font-size: 25px;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
}

.header__logo-eth {
  cursor: pointer;
  filter: brightness(0) saturate(100%) invert(90%) sepia(70%) saturate(7500%)
    hue-rotate(355deg) brightness(104%) contrast(108%);
  width: 11rem;

}

@media only screen and (min-width: 390px) {
  .header-mobile__content {
    padding: 20px;
  }

  .header__social-links {
    gap: 7px;
  }
  .header__logo-eth {
    width: 15rem;
  }
}

/* Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


</style>
