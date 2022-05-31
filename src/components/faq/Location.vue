<template>
  <div class="location__venues-opening">
    <div class="location__venue-opening">
      <strong>La Fabrika</strong><br/>
      (entrance for registered)<br/>
      address: Komunardu 1001, Prague<br/>
      Fri 10am – 10pm<br/>
      Sat 9am – 10pm<br/>
      Sun 9am – 7pm<br/>
    </div>

    <div class="location__venue-opening" >
      <strong>Paralelni Polis</strong><br/>
      (registration desk + entrance)<br/>
      address: Delnicka 475/43, Prague<br/>
      from Friday 10th (10am)<br/>
      till Sunday 12th (7pm)<br/>
    </div>
  </div>
  
  <div style="text-align: center">
    <h3>Paralelni Polis & LaFabrika</h3>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.088196893983!2d14.448352415899075!3d50.10335612019434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94b187dd27cd%3A0x87ff46ed44b1086f!2sD%C4%9Blnick%C3%A1%2043%2C%20170%2000%20Praha%207-Hole%C5%A1ovice!5e0!3m2!1sen!2scz!4v1649344922786!5m2!1sen!2scz"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.location__venues-opening {
  font-size: 15px;
  display: flex;
  margin: 3rem 0 2rem;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
}

@media (min-width: 1120px) {
  .location__venues-opening{
    font-size: 17px;
  }
}
.location__venue-opening {
  margin: 0 auto;
  width: 34rem;
  padding: var(--app-padding)
}

</style>
