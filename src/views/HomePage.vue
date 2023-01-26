<template>
  <div class="components">
    <WelcomePage/>
    <WebMobile/>
    <YouDeserve/>
    <FullyAgile/>
    <QualityBuild/>
    <CustomerSay/>
    <CarouselImg/>
    <SignupForm/>
    <FooterPart/>
  </div>
</template>

<script>
import WelcomePage from '../components/WelcomePage.vue'
import WebMobile from '../components/WebMobile.vue'
import YouDeserve from '../components/YouDeserve.vue'
import FullyAgile from '../components/FullyAgile.vue'
import QualityBuild from '../components/QualityBuild.vue'
import CustomerSay from '../components/CustomerSay.vue'
import CarouselImg from '../components/CarouselImg.vue'
import SignupForm from '@/components/SignupForm.vue'
import FooterPart from '@/components/FooterPart.vue'

export default {
components: {
    WelcomePage,
    WebMobile,
    YouDeserve,
    FullyAgile,
    QualityBuild,
    CustomerSay,
    CarouselImg,
    SignupForm,
    FooterPart
}
}
</script>

<style>

</style>