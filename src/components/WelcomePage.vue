<template>
  <section class="welcome-page">
    <v-row class="ma-0 mobile-responsive">
      <v-col cols="12" xs="1" sm="1" md="1" xl="1" lg="1"></v-col>
      <v-col cols="12" xs="12" sm="5" md="5" xl="5" lg="5" class="justify-center align-left d-flex flex-column mobile-responsive" data-aos-delay="50" data-aos="fade-up">
   <h2 class="auto-typer"> We&nbsp;<vue-typer 
    :text='["QA", "Cost-Estimate" , "Architect", "Build Blockchain", "Build Smart Contract", "Build Crypto", "Design" ]'
    :repeat='Infinity'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='100'
  :type-delay='100'
  :pre-erase-delay='1500'
  :erase-delay='100'
  erase-style='backspace'
  :erase-on-complete='true'
  caret-animation='smooth'
  class="auto-typer"
    ></vue-typer> Apps </h2> 
      <span id="for-you">for you - so you won't have to.</span>
      <v-btn small class="lets-build" @click="goToForm">
Let's Build your App
      </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="5" md="5" xl="5" lg="5" class="justify-center align-center d-flex"  data-aos-delay="300" data-aos="zoom-out">
    <v-img src="../assets/img/newmobile.png" class="welcome-mobile"></v-img>
      </v-col>
      <v-col  cols="12" xs="0" sm="0" md="0" xl="1" lg="1"></v-col>
    </v-row>
   
  </section>
</template>

<script>
import { VueTyper } from 'vue-typer'
export default {
    name:"WelcomePage",
    components: {
       VueTyper
    },
    methods: {
      goToForm() {
      const element = document.getElementById('quiz_placeholder')
      element && element.scrollIntoView({behavior:'smooth', block:'nearest', inline:'nearest'})
    }
    }
    
}
</script>

<style>
.welcome-page {
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
}
.auto-typer, .auto-typer span {
  font-size: 43px;
    color: #3898ed;
    animation-name: colorChange;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

@keyframes colorChange {
     0%   {color: royalblue}
     25%  {color: mediumseagreen}
     50%  {color: aqua}
     75%  {color: gold}
     100% {color: crimson}
 }
      #for-you {
        color: black;
    font-size: 25px;
    font-family: sans-serif;
      }
      .lets-build {
        margin-top: 10px;
        background-color: #212121 !important;
    color: #fff !important;
    border-radius: 20px;
    font-size: 14px !important;
    padding: 23px 13px !important;
    box-shadow: 0px 0px 34px #3030301c;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    width:fit-content;
      }
      .v-app-bar--hide-shadow::before {
    content: '';
    position: absolute;
    background-image: url(../assets/img/banner-before.png);
    background-repeat: no-repeat;
    background-size: cover;
    right: 0;
    top: 0;
    width: 130px;
    height: 120px;
    z-index: -1;
}
.v-app-bar--hide-shadow::after {
    content: '';
    position: absolute;
    background-image: url(../assets/img/banner-after.png);
    background-repeat: no-repeat;
    background-size: cover;
    left: 0;
    top: 0;
    width: 560px;
    height: 240px;
    z-index: -1;
}
.welcome-mobile {
  max-width:85%;
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}
@keyframes up-down {
  0% {
    transform: translateY(10px);
}

100% {
    transform: translateY(-10px);
}
}
@media screen and (max-width: 599px) {
  .v-app-bar--hide-shadow::after {
        width: 286px;
        height: 118px;
    }
  .welcome-page {
    height:fit-content;
    display: block;
    margin-top:170px;
  }
.mobile-responsive {
  align-items:center;
}
.auto-typer, #for-you {
  text-align:center;
}
}
@media  screen and (min-width: 1920px) {
    .welcome-mobile {
      max-width: 80%;
    }
}
 
</style>