<template>
  <v-app id="inspire">
    <Header/>
    <v-content id="content">
      <v-container fluid class="pa-0 ma-0">
        <router-view/>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
    import {mapState} from "vuex";
    import Header from "./components/default/Header";
    import Footer from "./components/default/Footer";

    export default {
        name: 'App',
        components: {Footer, Header},
        computed: {
            ...mapState(['theme'])
        }
    }
</script>

<style scoped>

  #inspire{
    /*overflow-y: hidden*/
    height: 100vh
  }
</style>
