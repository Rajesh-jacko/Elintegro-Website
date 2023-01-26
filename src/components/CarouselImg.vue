
<template>
    <section class="carousel-img" data-aos-delay="50" data-aos="fade-up">
        <v-row class="text-center justify-center">
            <span class="heading">This is how we do it</span>
        </v-row>
    <div ref="slider" class="keen-slider">
        <img src="../assets/img/slider1.png"  class="keen-slider__slide ">
        <img src="../assets/img/slider2.png"  class="keen-slider__slide">
        <img src="../assets/img/slider3.png"  class="keen-slider__slide">
        <img src="../assets/img/slider4.png"  class="keen-slider__slide">
        <img src="../assets/img/slider5.png"  class="keen-slider__slide">
        <img src="../assets/img/slider6.png"  class="keen-slider__slide">
        <img src="../assets/img/slider7.png"  class="keen-slider__slide">

  
    </div>
</section>
  </template>
  
  <script>
  import "keen-slider/keen-slider.min.css"
  import KeenSlider from "keen-slider"
  const animation = { duration: 9000, easing: (t) => t }
  
  export default {
    mounted() {
      this.slider = new KeenSlider(this.$refs.slider, {
        loop: true,
        renderMode: "performance",
        drag: false,
        slides: { perView: 6, spacing: 30  },
        breakpoints: {
        '(max-width: 576px)': {
          slides: { perView: 2, spacing: 5 },
        },
        },
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
      })
    },
    beforeDestroy() {
      if (this.slider) this.slider.destroy()
    },
  }
  </script>
  
  <style scoped>
    
    .carousel-img {
        padding:100px;
    }
    .keen-slider {
        margin-top: 60px;
    }
    .keen-slider__slide {
        width:100px !important;
        border:1px solid rgb(232 223 240);
        box-shadow: 1px 0px 11px 1px rgb(232 223 240);
    }
@media screen and (max-width: 576px) {
  .carousel-img {
padding: 100px 30px;

  }
 
}
  </style>
  
  
  
  