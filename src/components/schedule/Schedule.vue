<template>
  <div id="Schedule" class="schedule">
    <span id="Friday-desktop" />
    <span id="Friday-mobile" />

    <div
      :class="[
        'schedule__header',
        { 'schedule__header-speakers': showSection === Sections.SPEAKERS },
      ]"
    >
      <div class="schedule__section-buttons">
        <button
          @click="showSection = Sections.SCHEDULE"
          :class="headerSectionsButtonClasses(Sections.SCHEDULE)"
        >
          schedule
        </button>
        <button
          @click="showSection = Sections.SPEAKERS"
          :class="headerSectionsButtonClasses(Sections.SPEAKERS)"
        >
          speakers
        </button>
      </div>

      <div v-if="showSection === Sections.SCHEDULE">
        <div class="schedule__dates-buttons">
          <a :href="getLocalLinkForDates('#Friday')">
            <button
              @click="onDateClick(Dates.FRIDAY)"
              :class="headerDatesButtonClasses(Dates.FRIDAY)"
            >
              FRIDAY 10. JUNE
            </button>
          </a>
          <a :href="getLocalLinkForDates('#Saturday')">
            <button
              @click="onDateClick(Dates.SATURDAY)"
              :class="headerDatesButtonClasses(Dates.SATURDAY)"
            >
              SATURDAY 11. JUNE
            </button>
          </a>
          <a :href="getLocalLinkForDates('#Sunday')">
            <button
              @click="onDateClick(Dates.SUNDAY)"
              :class="headerDatesButtonClasses(Dates.SUNDAY)"
            >
              SUNDAY 12. JUNE
            </button>
          </a>
        </div>
        <div class="schedule__venues">
          <div class="schedule__venue">
            <div>La Fabrika <span class="schedule__venue-subtitle">(Livestream)</span></div>
            <div class="schedule__venue-additional-info">Entrance #2</div>
          </div>
          <div class="schedule__venue">
            <div>Paralelni Polis</div>
            <div class="schedule__venue-additional-info">Registrations + Entrance #1</div>
          </div>
          <span class="schedule__venues-all-times-zone">All times are in CET</span>
        </div>
      </div>
    </div>

    <div class="schedule__loading" v-if="loadingData">loading...</div>
    <Speakers
      v-if="showSection === Sections.SPEAKERS"
      :speakers="speakers"
      :allEvents="allEvents"
    />

    <div
      class="schedule__content"
      v-if="scheduleJsonData && showSection === Sections.SCHEDULE"
    >
      <!-- <div class="schedule__venues-opening">
        
        <div class="schedule__venue-opening">
          <span class="schedule__venue-opening-title"><strong>La Fabrika</strong><br/></span>
          (entrance for registered)<br/>
          address: Komunardu 1001, Prague<br/>
          Fri 10am – 10pm<br/>
          Sat 9am – 10pm<br/>
          Sun 9am – 7pm<br/>
        </div>

        <div class="schedule__venue-opening" >
          <span  class="schedule__venue-opening-title"><strong>Paralelni Polis</strong><br/></span>
          (registration desk + entrance)<br/>
          address: Delnicka 475/43, Prague<br/>
          from Friday 10th (10am)<br/>
          till Sunday 12th (7pm)<br/>
        </div>
      </div> -->

      <div class="schedule__content--mobile">
        <div class="schedule__day-title">Friday 10. June</div>

        <div class="schedule__venues-opening">
          <div class="schedule__venue-opening">
            <div class="schedule__venue-opening-text">
              <strong>La Fabrika</strong> (Livestream)<br />
              Entrance #2<br />
              open door – 10am<br />
              close door – 10pm<br />
            </div>
          </div>

          <div class="schedule__venue-opening">
            <div class="schedule__venue-opening-text">
              <strong>Paralelni Polis</strong><br />
              Registrations + Entrance #1<br />
              open door – 10am<br />
              close door on Sunday<br />
            </div>
          </div>
        </div>

        <ScheduleEventBox
          v-for="event in friday"
          :key="event.id"
          @click="setModalContent(event)"
          :event="event"
        />

        <div id="Saturday-mobile" class="schedule__day-title">
          Saturday 11. June
        </div>

        <div class="schedule__venues-opening">
          <div class="schedule__venue-opening">
            <div class="schedule__venue-opening-text">
              <strong>La Fabrika</strong><br />
              Entrance #2<br />
              open door – 9am<br />
              close door – 10pm<br />
            </div>
          </div>

          <div class="schedule__venue-opening">
            <div class="schedule__venue-opening-text">
              <strong>Paralelni Polis</strong><br />
              Registrations + Entrance #1<br />
              nonstop
            </div>
          </div>
        </div>
        <ScheduleEventBox
          v-for="event in saturday"
          :key="event.id"
          @click="setModalContent(event)"
          :event="event"
        />
        <div id="Sunday-mobile" class="schedule__day-title">
          Sunday 12. June
        </div>

        <div class="schedule__venues-opening">
          <div class="schedule__venue-opening">
            <div class="schedule__venue-opening-text">
              <strong>La Fabrika</strong><br />
              Entrance #2<br />
              open door – 9am<br />
              close door – 7pm<br />
            </div>
          </div>

          <div class="schedule__venue-opening">
            <div class="schedule__venue-opening-text">
              <strong>Paralelni Polis</strong><br />
              Registrations + Entrance #1<br />
              close door – 7pm
            </div>
          </div>
        </div>
        <ScheduleEventBox
          v-for="event in sunday"
          :key="event.id"
          @click="setModalContent(event)"
          :event="event"
        />
      </div>
      <div class="schedule__content--desktop">
        <DayBlock
          :dayData="friday"
          @set-modal-content="setModalContent"
          title="Friday 10. June"
          dayName="Friday-disabled-local-link"
        >
          <div class="schedule__venues-opening">
            <div class="schedule__venue-opening">
              <div class="schedule__venue-opening-text">
                open door – 10am<br />
                close door – 10pm<br />
              </div>
            </div>

            <div class="schedule__venue-opening">
              <div class="schedule__venue-opening-text">
                open door – 10am<br />
                close door on Sunday<br />
              </div>
            </div>
          </div>
        </DayBlock>

        <DayBlock
          :dayData="saturday"
          @set-modal-content="setModalContent"
          title="Saturday 11. June"
          dayName="Saturday"
        >
          <div class="schedule__venues-opening">
            <div class="schedule__venue-opening">
              open door – 9am<br />
              close door – 10pm<br />
            </div>

            <div class="schedule__venue-opening">nonstop<br /></div>
          </div>
        </DayBlock>

        <DayBlock
          :dayData="sunday"
          @set-modal-content="setModalContent"
          title="Sunday 12. June"
          dayName="Sunday"
        >
          <div class="schedule__venues-opening">
            <div class="schedule__venue-opening">
              open door – 9am<br />
              close door – 7pm<br />
            </div>

            <div class="schedule__venue-opening">close door – 7pm<br /></div>
          </div>
        </DayBlock>
      </div>
    </div>
  </div>
  <ModalSchedule v-model="modalContent" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted, computed } from "vue";
import ModalSchedule from "./ModalSchedule.vue";
import ScheduleEventBox from "./ScheduleEventBox.vue";
import Speakers from "./Speakers.vue";
import { peopleData, fetchPeopleData } from "@/components/usePeople";
import { Venues } from "@/components/schedule/useSchedule";
import DayBlock from "./DayBlock.vue";
const axios = require("axios").default;

enum Sections {
  SCHEDULE = "schedule",
  SESSIONS = "sessions",
  SPEAKERS = "speakers",
}

enum Dates {
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}
const showSection = ref(Sections.SCHEDULE);
const showDate = ref(Dates.FRIDAY);
const scheduleJsonData = ref();
const loadingData = ref(true);

const friday = ref();
const saturday = ref();
const sunday = ref();
const fridayDesktopTitleElement = ref();
const saturdayDesktopTitleElement = ref();
const sundayDesktopTitleElement = ref();

const fridayMobileTitleElement = ref();
const saturdayMobileTitleElement = ref();
const sundayMobileTitleElement = ref();

const isOnDateClick = ref();
const modalContent = ref<any | null>(null);
const speakers = ref();
const allEvents = ref();

const MOBILE_BREAKPOINT = 1120;

const headerSectionsButtonClasses = (section: string) =>
  `schedule__header-sections-button ${
    showSection.value === section
      ? "schedule__header-sections-button-active"
      : ""
  }`;

const onDateClick = (date: Dates) => {
  showDate.value = date;
  isOnDateClick.value = true;
  setTimeout(() => {
    isOnDateClick.value = false;
  }, 1000);
};

const headerDatesButtonClasses = (date: string) =>
  `schedule__header-dates-button ${
    showDate.value === date ? "schedule__header-dates-button-active" : ""
  }`;

const mergeEvents = (scheduleJsonData: any) => {
  const venues = [
    ...scheduleJsonData[Venues.PARALELNI_POLIS],
    ...scheduleJsonData[Venues.LA_FABRIKA],
  ];
  return venues.sort((a: any, b: any) => {
    return (
      Date.parse("01/01/2022 " + a.start) - Date.parse("01/01/2022 " + b.start)
    );
  });
};

const setModalContent = (event: any) => {
  modalContent.value = event;
};

const getLocalLinkForDates = (day: string) =>
  `${day}-${window.innerWidth < MOBILE_BREAKPOINT ? "mobile" : "desktop"}`;

const updateScroll = () => {
  if (showSection.value !== Sections.SCHEDULE) return;

  let fridayYPosition;
  let saturdayYPosition;
  let sundayYPosition;

  if (window.innerWidth < MOBILE_BREAKPOINT) {
    fridayYPosition = fridayMobileTitleElement.value.getBoundingClientRect().y;
    saturdayYPosition =
      saturdayMobileTitleElement.value.getBoundingClientRect().y;
    sundayYPosition = sundayMobileTitleElement.value.getBoundingClientRect().y;
  } else {
    fridayYPosition = fridayDesktopTitleElement.value.getBoundingClientRect().y;
    saturdayYPosition =
      saturdayDesktopTitleElement.value.getBoundingClientRect().y;
    sundayYPosition = sundayDesktopTitleElement.value.getBoundingClientRect().y;
  }

  if (isOnDateClick.value) return;

  if (
    fridayYPosition - 185 < 0 &&
    saturdayYPosition - 185 > 0 &&
    sundayYPosition > 0
  ) {
    showDate.value = Dates.FRIDAY;
  } else if (saturdayYPosition - 185 < 0 && sundayYPosition - 185 > 0) {
    showDate.value = Dates.SATURDAY;
  } else if (sundayYPosition - 185 < 0) {
    showDate.value = Dates.SUNDAY;
  }
};

const getSpeakersFromEvents = (allEvents: any) => {
  const speakers = [];
  for (const event of allEvents) {
    for (const person of event.persons) {
      if (person.biography) {
        speakers.push(person);
      }
    }
  }
  return speakers;
};

onMounted(async () => {
  if (!peopleData.value) fetchPeopleData();

  try {
    loadingData.value = true;
    const jsonDataFetch = await axios.get(
      "https://cfp.paralelnipolis.cz/ethprague-2022/schedule/export/schedule.json"
    );
    scheduleJsonData.value = jsonDataFetch.data.schedule.conference.days;
    loadingData.value = false;
  } catch (e) {
    loadingData.value = false;
  }
  friday.value = mergeEvents(scheduleJsonData.value[0].rooms);
  saturday.value = mergeEvents(scheduleJsonData.value[1].rooms);
  sunday.value = mergeEvents(scheduleJsonData.value[2].rooms);

  allEvents.value = [...friday.value, ...saturday.value, ...sunday.value];
  speakers.value = getSpeakersFromEvents(allEvents.value);

  window.addEventListener("scroll", updateScroll, { passive: true });
});

onUpdated(() => {
  fridayMobileTitleElement.value =
    window.document.getElementById("Friday-mobile");
  saturdayMobileTitleElement.value =
    window.document.getElementById("Saturday-mobile");
  sundayMobileTitleElement.value =
    window.document.getElementById("Sunday-mobile");

  fridayDesktopTitleElement.value =
    window.document.getElementById("Friday-desktop");
  saturdayDesktopTitleElement.value =
    window.document.getElementById("Saturday-desktop");
  sundayDesktopTitleElement.value =
    window.document.getElementById("Sunday-desktop");
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
});
</script>

<style scoped>
.schedule {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.schedule__venues {
  position: relative;
  display: none;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 3rem 0;
}

@media (min-width: 1120px) {
  .schedule__venues {
    display: flex;
  }
}

.schedule__venue {
  color: var(--col-primary-action);
  font-size: 25px;
  line-height: 28px;
  width: 100%;
  text-align: center;
}

.schedule__loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 26vh;
}
.schedule__content {
  background-color: var(--col-light-gray-bg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 50px var(--app-padding) 20rem;
  margin-top: -20rem;
}

.schedule__content--desktop {
  display: none;
}

@media (min-width: 1120px) {
  .schedule__content--mobile {
    display: none;
  }

  .schedule__content--desktop {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
}

.schedule__header {
  background-color: white;
  width: 100%;
  padding: 100px var(--app-padding) 0;
  position: sticky;
  top: -91px;
  z-index: 10;
  overflow: auto;
}

.schedule__header-speakers {
  position: relative;
  top: 0;
}

@media (min-width: 650px) {
  .schedule__header {
    padding: 100px var(--app-padding) 0;
  }
}

.schedule__section-buttons {
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 5rem;
}

.schedule__header-sections-button {
  border-radius: 0;
  border: 1px solid #000000;
  padding: 9px 22px;
  margin-left: 10px;
  margin: 0;

  font-weight: 300;
  text-transform: uppercase;
  font-size: 17px;
  line-height: 22px;
}

.schedule__header-sections-button-active {
  border: 1px solid var(--col-primary-accent);
  background-color: var(--col-primary-accent);
  color: var(--col-primary-action);
  font-weight: 300;
}

.schedule__dates-buttons {
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.schedule__dates-buttons:last-child {
  margin-bottom: var(--app-padding);
}

@media (min-width: 650px) {
  .schedule__dates-buttons {
    justify-content: center;
    margin-bottom: 2rem;
  }
}

.schedule__header-dates-button {
  border-radius: 18px;
  border: 1px solid #000000;
  padding: 9px 22px;
  margin: 0;
  font-weight: 300;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 22px;
}
.schedule__header-dates-button-active {
  border: 1px solid var(--col-primary-action);
  background-color: var(--col-primary-action);
  color: white;
  font-weight: 300;
}

.schedule__day-title {
  font-size: 25px;
  color: var(--col-primary-action);
  padding: 17rem 0 2rem 0;
  text-align: center;
}

@media (min-width: 650px) {
  .schedule__day-title {
    font-size: 30px;
  }
}

@media (min-width: 1120px) {
  .schedule__day-title {
    padding: 25rem 0 2rem 0;
  }
}

.schedule__venues-opening {
  font-size: 15px;
  display: flex;
  margin: 3rem 0 3rem;
  flex-wrap: wrap;
  width: 100%;
}

.schedule__venue-opening {
  display: flex;
  width: 100%;
  padding: var(--app-padding);
}

@media (min-width: 500px) {
  .schedule__venues-opening {
    flex-wrap: nowrap;
  }
  .schedule__venue-opening {
    justify-content: center;
  }
}

@media (min-width: 1120px) {
  .schedule__venues-opening {
    font-size: 20px;
    /* margin: 16rem 0 -17.5rem; */
  }
}

.schedule__venue-opening-title {
  display: block;
}

@media (min-width: 1120px) {
  .schedule__venue-opening-title {
    display: none;
  }
}

.schedule__venue-additional-info {
  font-size: 15px;
}

.schedule__venue-subtitle {
  font-size: 19px;
}

.schedule__venues-all-times-zone {
  position: absolute;
  bottom: -25px;

}
</style>
