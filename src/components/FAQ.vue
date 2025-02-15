<template>
  <div class="faq" id="FAQ">

    <div class="faq__wrap-title">
      <SectionTitle title="FAQ about venue" />
    </div>

    <div class="faq__blocks">
      <div v-for="block in blocks" :key="block.title" class="faq__block">
        <div class="faq__block-toggle" :style="{background: block.toggleBgColor}" @click="toggleBlock(block.title)"> 
            <div class="faq__block-title">
              {{block.title}}
            </div>

            <div class="faq__block-toggle-icon-wrap">
              <div :class="['faq__block-toggle-icon', {'faq__block-toggle-icon--upside-down': openBlocks.includes(block.title)}]">
                <span class="faq__block-toggle-icon-carpet" />
              </div>
            </div>
        </div>

        <div class="faq__block-content-container" :style="getBlockContentStyle(block)">
          <div  v-if="block.blockName === 'expectation'" v-html="block.html" class="faq__block-content-text">
          </div>
          <div class="faq__block-content-text" v-if="block.blockName === 'location'">
            <Location />
          </div>
          <SleepAndRest v-if="block.blockName === 'sleepAndRest'" class="faq__block-content-text"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SectionTitle from "@/components/SectionTitle.vue";
import SleepAndRest from "@/components/faq/SleepAndRest.vue";
import Location from './faq/Location.vue';

type Block = {
  title: string;
  toggleBgColor: string;
  contentBgColor: string;
  text?: string;
  blockHeight: string;
}

const openBlocks = ref(['']);

const toggleBlock = (blockTitle: string) => {
  if (openBlocks.value.includes(blockTitle)) {
    openBlocks.value = openBlocks.value.filter(title => title !== blockTitle)
  } else {
    openBlocks.value.push(blockTitle)
  }
}

const getBlockContentStyle = (block: Block) => ({background: block.contentBgColor, transform: openBlocks.value.includes(block.title) ? 'scaleY(1)' : 'scaleY(0)', maxHeight: openBlocks.value.includes(block.title) ? '2300px' : '0', marginBottom: openBlocks.value.includes(block.title) ? '10px' : '-120px'})


const blocks = [
  {
    title: 'what to expect on-site',
    toggleBgColor: '#01ffe5',
    contentBgColor: '#9efff5',
    blockName: 'expectation',
    html:
        '<p> The event is primarily a hackathon BUT since the venue enables us to also host talks, we would be crazy not to have those! </p> ' +
        '<p> Not only there are going to be various types of workspaces available, but also there is going to be:  </p> ' +
        '<ul> ' +
        '<li> 1 track of informative Solarpunk related and technical talks </li>' +
        '<li> 1 track of hands-on workshops </li>' +
        '</ul>' +
        '<p> Also, we have cookies! There is going to be free all-day catering provided for all participants!</p>',
    blockHeight: '300px'
  },
   {
    title: 'location',
    toggleBgColor: '#81ff70',
    contentBgColor: '#c1feb8',
    blockName: 'location',
    // html: 'location',
    //     '<div style="text-align: center"> ' +
    //     '<h3> Paralelni Polis & LaFabrika</h3>' +
    //     '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.088196893983!2d14.448352415899075!3d50.10335612019434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94b187dd27cd%3A0x87ff46ed44b1086f!2sD%C4%9Blnick%C3%A1%2043%2C%20170%2000%20Praha%207-Hole%C5%A1ovice!5e0!3m2!1sen!2scz!4v1649344922786!5m2!1sen!2scz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' +
    //     '</div>',
    blockHeight: '450px'
  },
  {
    title: 'sleep & rest',
    blockName: 'sleepAndRest',

    toggleBgColor: '#ffff01',
    contentBgColor: '#ffffb2',
    // html: SleepAndRest,
    blockHeight: '2000px'
  },
  
  
]
</script>
;
<style scoped>

.faq {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px var(--app-padding);
}

.faq__wrap-title {
  max-width: 1100px;
  width: 100%;
  margin-bottom: 30px;
}

.faq__blocks {
  transition: all 0.3s;
  max-width: 1600px;
  width: 100%;
}

.faq__block {
  transition: all 0.3s;
  margin-bottom: 15px;
}

.faq__block-toggle {
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 270px;
  position: relative;
  background-color: yellow;
  height: 145px;
  z-index: 1;
}

@media (min-width: 970px) {
  .faq__block-toggle {
    height: 160px;
  }
}


.faq__block:hover {
  filter: drop-shadow(-8px 8px 8px rgba(0, 0, 0, 0.15));
}

.faq__block-title {

  font-size: 17px;
  color: var(--col-primary-action);
  text-transform: uppercase;
  padding: 0 70px;
  text-align: center;
}

@media (min-width: 500px) {
  .faq__block-title {
    font-size: 20px;
  }
}

@media (min-width: 970px) {
  .faq__block-title {
    font-size: 25px;
  }
}

.faq__block-content-container {
  transition: all 0.3s;
  background: #ffff004f;
  padding: 120px 25px 85px;
  margin-top: -85px;
  border-bottom-right-radius: 85px;
  border-bottom-left-radius: 85px;
  overflow: hidden;
  transform-origin: top;
}

@media (min-width: 500px) {
  .faq__block-content-container {
    padding: 120px 70px 85px;
  }
}

@media (min-width: 970px) {
  .faq__block-content-container {
    padding: 135px 200px 70px;
  }
}

.faq__block-content-text {
  max-width: 1100px;
  margin: auto;
  font-size: 17px;
}

@media (min-width: 970px) { 
  .faq__block-content-text { 
    font-size: 20px;
  }
}

.faq__block-toggle-icon-wrap {
  position: initial;
}

.faq__block-toggle-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border-radius: 35px;
  border: solid 2px var(--col-primary-action);
  position: absolute;
  right: 30px;
  top: 55px;
}

@media (min-width: 970px) {

  .faq__block-toggle-icon-wrap {
    position: absolute;
  }
  .faq__block-toggle-icon  {
    width: 41px;
    height: 41px;
    left: 300px;
    position: relative;
    right: unset;
    top: unset;
  }
}

.faq__block-toggle-icon--upside-down {
  transform: rotate(180deg)
}

.faq__block-toggle-icon-carpet {
  border-left: solid 2px var(--col-primary-action);
  border-bottom: solid 2px var(--col-primary-action);
  transform: rotate(-45deg) skew(5deg, 5deg) translate(1px, -1px);
  width: 11px;
  height: 11px;
}

</style>
