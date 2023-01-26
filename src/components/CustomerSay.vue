<template>
   <div  class="Quotes pt-10 mobile-responsive" >
                                <div class=" flex-column" data-aos="fade-up">
                                  <h1 class="heading">What our customers say about us</h1>
                                  <v-row justify="center">
                                  <v-col cols="12" xs="8" sm="10" md="10" xl="7" lg="7" >    
                                  <v-card elevation="12" class="QuotesPadding">        
                                    <v-carousel
                                        cycle
                                        height="300"
                                        class=' pa-0'
                                        hide-delimiter-background
                                       
                                        show-arrows
                                      >
                                        <v-carousel-item
                                        class = "comma pr-16" 
                                           v-for="(text,i) in texts"
                                          :key="i"
                                        >

                                        <v-row >
                                        <v-col cols='12' xs='1' sm="1" md="1" xl="1" lg="1"></v-col>
                                        <v-col cols="12" xs='1' sm="1" md="1" xl="1" lg="1" class='mt-4'>
                                        <img src="../assets/img/comma.png">
                                        </v-col>
                                        <v-col cols="10" xs='10' sm="10" md="10" xl="10" lg="10" class="pa-0"></v-col>
                                        </v-row>
                                         <v-row>
                                            <v-col cols="12" xs='2' sm="2" md="2" xl="2" lg="2" class="pa-0"></v-col>
                                            <v-col cols="12" xs='8' sm="8" md="8" xl="8" lg="8" class="pa-0">
                                              <div class="text-h5 commas">
                                                {{ text.title}}
                                              </div>
                                              <div class="text-h6 blue--text commas">
                                                {{ text.person}}
                                              </div>
                                               <v-col cols="12" xs='2' sm="2" md="2" xl="2" lg="2" class="pa-0"></v-col>
                                             </v-col>
                                            </v-row> 
                                        </v-carousel-item>
                                    </v-carousel>
                                      </v-card>
                                      </v-col>
                                      </v-row>
                                    </div>                    
                                  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        {
          title:
            "From concept to development, it was a pleasure to work with Elintegro. They delivered my product on time and on budget. I’d definitely hire them again.",
          person: "Drasko Raicevic,Quickbody Fitness",
        },
        {
          title:
            "The Dating app Elintegro developed for me was perfect. It was exactly what I needed, and more.",
          person: "Lev, Matchmaker",
        },
      ],
    };
  },
};
</script>

<style>


</style>
