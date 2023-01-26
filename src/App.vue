<template>
  <v-app>
    <v-main class="main">
      <v-app-bar
        color="white"
        elevate-on-scroll
        shrink-on-scroll
        fixed
        id="banner"
        height="120"
      >
        <v-toolbar-title class="ml-9">
          <img src="./assets/img/logo.png" style="transform: rotate(-0.5deg);" />
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="mr-16">
          <v-btn text height="0" class="nav-btn"> Home </v-btn>
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text height="0" v-bind="attrs" v-on="on" class="nav-btn">
                About Us
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="navigateSection(i)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn text height="0" v-bind="attrs" v-on="on" class="nav-btn">
                App
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(app, i) in apps" :key="i">
                <v-list-item-title>{{ app.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn text height="0" class="nav-btn" @click="redirectedToCareers">
            Careers
          </v-btn>
          <v-btn text height="0" class="nav-btn" @click="redirectedToContactUs">
            Contact Us
          </v-btn>
          <v-btn
            text
            height="0"
            style="color: rgb(25, 118, 210)"
            class="nav-btn"
          >
            Login
          </v-btn>
          <v-btn
            text
            height="0"
            style="color: rgb(25, 118, 210)"
            class="nav-btn"
          >
            Register
          </v-btn>
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                height="0"
                v-bind="attrs"
                v-on="on"
                class="nav-btn"
                @click="rotateArrow"
              >
                <img src="./assets/img/navbarimg.png" />
                <v-icon
                  class="mt-4"
                  color="blue"
                  :class="{ rotateIcon: rotateIcon }"
                  >mdi-menu-down</v-icon
                >
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(language, i) in languages" :key="i">
                <v-list-item-title>{{ language.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-app-bar>
      <v-app-bar
        color="white"
        fixed
        id="second-banner"
        elevate-on-scroll
        shrink-on-scroll
      >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <img src="./assets/img/logo.png" style="transform: rotate(-0.9deg)" />
        <v-toolbar-title></v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary class="drawer">
        <v-list nav dense>
          <v-list-item-group
            active-class="deep-purple--text text--accent-4"
            class="d-flex flex-column"
            style="gap: 15px"
          >
            <div class="d-flex align-center mt-4 mb-4">
              <img src="./assets/img/logo1.svg" width="70px" />
              <h1 class="white--text ml-2">ELINTEGRO</h1>
            </div>
            <v-btn text height="0" class="nav-btn mobile-nav"> Home </v-btn>
            <v-divider class="divider"></v-divider>
            <v-menu bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  height="0"
                  v-bind="attrs"
                  v-on="on"
                  class="nav-btn mobile-nav"
                >
                  About Us
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="navigateSection(i)"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-divider class="divider"></v-divider>
            <v-menu bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  height="0"
                  v-bind="attrs"
                  v-on="on"
                  class="nav-btn mobile-nav"
                >
                  App
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(app, i) in apps"
                  :key="i"
                  @click="navigateSection(i)"
                >
                  <v-list-item-title>{{ app.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-divider class="divider"></v-divider>
            <v-btn text height="0" class="nav-btn mobile-nav"> Career </v-btn>
            <v-divider class="divider"></v-divider>
            <v-btn text height="0" class="nav-btn mobile-nav">
              Contact Us
            </v-btn>
            <v-divider class="divider"></v-divider>
            <v-btn text height="0" class="nav-btn mobile-nav"> Login </v-btn>
            <v-divider class="divider"></v-divider>
            <v-btn text height="0" class="nav-btn mobile-nav"> Register </v-btn>
            <v-divider class="divider"></v-divider>
            <v-menu bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  height="0"
                  v-bind="attrs"
                  v-on="on"
                  class="pt-4"
                  @click="rotateArrow"
                >
                  <img
                    src="./assets/img/navbarimg.png"
                    style="filter: grayscale(1)"
                  />
                  <v-icon
                    color="white"
                    class="mt-4"
                    :class="{ rotateIcon: rotateIcon }"
                    >mdi-menu-down</v-icon
                  >
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="(language, i) in languages" :key="i">
                  <v-list-item-title>{{ language.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
import HomePage from "./views/HomePage.vue";
import website from "./utils/website";
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      rotateIcon: false,
      urls: {
        contactUs: "/#/contact-us/0",
        career: "/#/careers/0",
        Ecommerce: "#/login-page/0",
        Translator: "#/translator-assistant/0",
      },
      items: [
        {
          title: "Our Work",
        },
        {
          title: "Our Procress",
        },
        {
          title: "Collaboration",
        },
        {
          title: "Our Framework",
        },
        {
          title: "Testimonials",
        },
        {
          title: "Our Clients & Projects",
        },
        {
          title: "Technologies in Use",
        },
        {
          title: "Contact Quiz",
        },
      ],
      apps: [
        {
          title: "Ecommerce",
        },
        {
          title: "Translator",
        },
        {
          title: "Quizzable",
        },
      ],
      languages: [
        {
          title: "English",
        },
        {
          title: "French",
        },
        {
          title: "Spanish",
        },
      ],
    };
  },
  components: {
    HomePage,
  },
  methods: {
    navigateSection(i) {
      console.log(i);
      if (i === 0) {
        const element = document.getElementById("web-container");
        element &&
          element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest",
          });
      } else if (i === 1) {
        const element = document.getElementById("deserve-container");
        element &&
          element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest",
          });
      } else if (i === 2) {
        const element = document.getElementById("agile-container");
        element &&
          element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest",
          });
      } else if (i === 3) {
        const element = document.getElementById("build-container");
        element &&
          element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest",
          });
      } else if (i === 7) {
        const element = document.getElementById("quiz_placeholder");
        element &&
          element.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest",
          });
      }
    },
    rotateArrow() {
      this.rotateIcon = !this.rotateIcon;
    },
    redirectedToContactUs() {
      window.open(`${website + this.urls.contactUs}`);
    },
    redirectedToCareers() {
      window.open(`${website + this.urls.career}`);
    },
  },
};
</script>
<style scoped>
.main {
  overflow: hidden;
}
#second-banner {
  display: none;
}
.nav-content span {
  padding: 0 10px;
}
#banner {
  transition: all 0.5s;
}
#banner .shrink {
  transition: all 0.5s;
}
.nav-btn {
  margin-top: 16px;
}
.nav-btn:hover {
  color: #197dc3;
}
.drawer {
  background: #111111;
  transition: all 0.8s;
  position: fixed;
}
.mobile-nav {
  color: white;
  width: 0;
  justify-content: flex-start;
}
.divider {
  background: white;
  margin: 0 15px;
}
.rotateIcon {
  transform: rotate(180deg);
}
@media screen and (max-width: 1130px) {
  #banner {
    display: none;
  }
  #second-banner {
    display: block;
  }
}
</style>
