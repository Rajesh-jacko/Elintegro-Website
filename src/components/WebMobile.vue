<template>
  <section class="web-mobile-container" >
    <v-row class="ma-0 justify-center mobile-responsive">
      <v-col  cols="12" xs="10" sm="5" md="5" xl="5" lg="5" id="web-container" class="justify-center align-left d-flex" data-aos-delay="50" data-aos="fade-up">
        <v-img src="../assets/img/webMobile.png"></v-img>
      </v-col>
      <v-col  cols="12" xs="12" sm="5" md="5" xl="5" lg="5"  class="justify-center align-center d-flex" data-aos-delay="50" data-aos="fade-up">
        <v-row class="ml-0 ml-lg-4 ml-xl-4 ml-md-4 mobile-heading">
        <span class="heading">Web & Mobile</span> <br>
        <span class="paragraph">We deliver everything from full-stack web apps to native mobile apps, as well as custom algorithms and data analysis. We’re quick to adapt to your needs and have never been halted by complexity.
</span>
        </v-row>
      
      </v-col>
    </v-row>
<img src="../assets/img/webmobilebg3.png" class="web-mobile-bg"/>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.web-mobile-container {
    background-color: #4e98c917;
    padding:70px 0;
    position: relative;
}
.web-mobile-bg {
  position: absolute;
    bottom: 0;
    right: 0;
}
</style>