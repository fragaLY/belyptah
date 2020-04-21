<template>
    <v-app-bar app flat id="inspire">
      <v-switch
          v-model="$vuetify.theme.dark"
          hide-details
          prepend-icon="invert_colors"
      ></v-switch>
      <v-spacer/>
      <v-toolbar-title class="text-uppercase">
        <span>{{pageTitle}}</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn depressed v-on:click="$router.push(`/book`)">
        Book
      </v-btn>
      <v-btn depressed v-on:click="$router.push(`/prices`)">
        Prices
      </v-btn>
      <v-btn depressed v-on:click="$router.push(`/about`)">
        About us
      </v-btn>
      <v-btn v-if="principal.id" icon color="black" v-on:click="$router.push(`/users/${principal.id}`)">
        <v-icon>face</v-icon>
      </v-btn>
      <v-btn v-if="principal.id" icon color="black" v-on:click="$router.push('/logout')">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
      <v-btn v-else icon color="black" v-on:click="$router.push('/login')">
        <v-icon>perm_identity</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
    import {mapState} from "vuex";
    import store from "../../store/store";

    export default {
        name: 'Header',
        beforeCreate() {
            store.dispatch('updatePageTitle', 'BELY PTAH');
        },
        computed: {
            ...mapState(['principal', 'theme', 'pageTitle'])
        }
    }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
