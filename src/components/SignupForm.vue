<template>
    <div class="signUp">
  <div id="quiz_placeholder" class="Quiz_Placeholder" data-aos="fade-up">
    <v-flex xs12 sm12 md12 lg12 x12>
      <v-row class="justify-center mobile-responsive">
        <v-col cols="12" xs="10" sm="10" md="7" xl="6" lg="6" style="position:relative;">
          <v-row align="center" justify="center">
            <h2 class="heading">Let's Talk about your project</h2>
          </v-row>
          <img
              alt="our_frameworks"
              src="../assets/img/contact-before.png"
              class="contactAfterTop"
            />
            <img
              alt="our_frameworks"
              src="../assets/img/contact-after.png"
              class="contactAfterBottom"
            />
          <v-card class="quiz-card-container" align="center" justify="center">
           
            <v-row>
              <v-container grid-list-sm fluid>
            
                <v-layout wrap class="text-center">
                  <v-flex xs12 sm12 md12 lg12 xl12>
                    <v-combobox
                      label="Which describes you best ?"
                      item-text="Answer"
                      item-value="id"
                      :items = "describe"
                      hide-no-data
                      hide-selected
                      solo
                      attach
                      auto-select-first
                      flat
                      id=""
                      append-icon="mdi-chevron-down"
                      class="quiz-signup"
                    ></v-combobox>
                  </v-flex>

                  <v-flex xs12 sm12 md12 lg12 xl12>
                    <v-combobox
                      label="What stage is your app in ?"
                      item-text="Answer"
                      item-value="id"
                      :items = "stage"
                      hide-no-data
                      hide-selected
                      solo
                      attach
                      auto-select-first
                      flat
                      append-icon="mdi-chevron-down"
                      class="quiz-signup"
                    ></v-combobox>
                  </v-flex>

                  <v-flex xs12 sm12 md12 lg12 xl12>
                    <v-combobox
                      label="What is your budget ?"
                      item-text="Answer"
                      item-value="id"
                      :items="budget"
                      hide-no-data
                      hide-selected
                      solo
                      attach
                      auto-select-first
                      flat
                      append-icon="mdi-chevron-down"
                      class="quiz-signup"
                    ></v-combobox>
                  </v-flex>

                  <v-flex xs12 sm12 md6 lg6 xl6
                    ><v-text-field
                      label="Name Of Your Project ?"
                      style="width: auto; height: auto"
                      autocomplete="off"
                      placeholder=""
                      solo
                      attach
                      auto-select-first
                      class="quiz-signup"
                    ></v-text-field
                  ></v-flex>

                  <v-flex xs12 sm12 md6 lg6 xl6>
                    <v-menu
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="200px"
                      style="width: auto; height: auto"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          label="Deadline of 1st version or MVP (date)"
                          v-on="on"
                          hint="DD/MM/YYYY Format"
                          persistent-hint
                          prepend-icon="mdi-calander"
                          readonly
                          id="vueElintegroSignUpQuizDataframe_lead_deadline_id"
                          solo
                          attach
                          class="quiz-signup"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        locale="en"
                        no-title
                        scrollable
                      ></v-date-picker>
                    </v-menu>
                  </v-flex>

                  <v-flex xs12 sm12 md12 lg12 xl12
                    ><v-textarea
                      name="vueElintegroSignUpQuizDataframe_lead_descriptionOfProject"
                      label="Describe Your Project"
                      rows="4"
                      auto-grow
                      style="width: auto; height: auto; margin-bottom: auto"
                      solo
                      attach
                      class="quiz-signup"
                    ></v-textarea
                  ></v-flex>

                  <v-flex xs12 sm12 md6 lg6 xl6
                    ><v-text-field
                      label="First Name "
                      style="width: auto; height: auto"
                      autocomplete="off"
                      placeholder=""
                      solo
                      attach
                      auto-select-first
                      class="quiz-signup"
                    ></v-text-field
                  ></v-flex>

                  <v-flex xs12 sm12 md6 lg6 xl6
                    ><v-text-field
                      label="Last Name "
                      style="width: auto; height: auto"
                      autocomplete="off"
                      placeholder=""
                      solo
                      attach
                      auto-select-first
                      flat
                      class="quiz-signup"
                    ></v-text-field
                  ></v-flex>

                  <v-flex xs12 sm12 md6 lg6 xl6>
                    <v-text-field
                      label="Email *"
                      placeholder="Enter your email."
                      style="width: auto; height: auto"
                      solo
                      attach
                      auto-select-first
                      flat
                      class="quiz-signup"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12 md6 lg6 xl6>
                    <v-text-field
                      label="Phone "
                      solo
                      attach
                      auto-select-first
                      flat
                      class="quiz-signup"
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm12 md12 lg12 xl12>
                    <v-btn
                      class="lets-build"
                      type="button"
                     
                      >submit</v-btn
                    >
                  </v-flex>
                </v-layout>
              </v-container>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      describe: [
      'I want to build an app for my bussiness.',
      'I work at a company who is looking to build an app.',
      'We are a software company looking to outsource some technology.'
      ],
      stage:[
      'I dont have a detailed spec but I do have some document with requirements and i want help with a spec.',
      'Whats a spec?',
      'I want to brainstorm ideas?'
      ],
      budget:[
       ' $250K and up',
       '$100K - $250K',
       '$50K - $100K',
       '$25K - $50K',
       '$10K - $25K',
       'Under 10K',
      ]
    }
  }
};
</script>

<style>
.signUp .Quiz_Placeholder {
  background-color: #ffffff;
  padding: 80px 0 !important;
  /*position: relative;*/
}
.mainContainer .Quiz_Placeholder .contactAfter {
  position: relative;
}
.mainContainer .Quiz_Placeholder .contactAfter .contactAfterTop {
  width: 209px;
  height: 196px;
  top: -3px;
  left: -68px;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  z-index: 1;
  visibility: visible;
}
.mainContainer .Quiz_Placeholder .contactAfter .contactAfterBottom {
  width: 308px;
  height: 272px;
  bottom: -927px;
  right: 15px;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  z-index: 1;
  visibility: visible;
}
.mainContainer .Quiz_Placeholder .columnLeft {
  padding-top: 6%;
  padding-left: 8%;
}
.mainContainer .Quiz_Placeholder .QuizHeading {
  font-family: "Poppins", sans-serif;
  color: #393939;
  font-size: 18px;
  font-weight: normal;
  line-height: 35px;
}
.mainContainer .Quiz_Placeholder .pa-md-0 {
  padding: 6%;
}
.mainContainer .Quiz_Placeholder .quiz-card-container {
  background-color: #fff;
  border-radius: 53px;
  box-shadow: 2px -3px 6px 3px #e5e5ff;
  /*padding: 50px 90px;*/
  z-index: 2;
  margin-top: 50px;
  max-width: 86%;
  width: 100%;
  padding: 60px;
  padding-top: 38px;
}
.signUp .Quiz_Placeholder .quiz-card-container {
    background-color: #fff;
    border-radius: 53px;
    box-shadow: 2px -3px 6px 3px #e5e5ff;
    z-index: 2;
    margin-top: 50px;
    width: 100%;
    padding: 60px;
    padding-top: 38px;
}
 .contactAfterTop{
    position: absolute;
    top: 0;
    left: -65px;
 }
  .contactAfterBottom{
    position: absolute;
    bottom: -106px;
    right: -115px;
 }
 @media screen and (max-width: 576px) {
.contactAfterTop , .contactAfterBottom {
  display: none;
}
 }
</style>
