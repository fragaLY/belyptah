<template>
  <v-footer id="footer" padless>
    <v-card class="flex" flat tile>
      <v-card-text class="text-center">
        <v-btn v-for="(icon, key) in icons" :key="key" :href="icon.href" icon>
          <v-img :src="icon.src"/>
        </v-btn>
        <v-spacer/>
        Bely Ptah, {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: 'Footer',
        data: () => ({
            icons: [
                {
                    src: 'https://img.icons8.com/ios/24/000000/instagram-new.png',
                    href: 'https://www.instagram.com/usadba_bely.ptah/'
                },
                {
                    src: 'https://img.icons8.com/ios/24/000000/vk-com.png',
                    href: 'https://vk.com/belyptah'
                },
                {
                    src: 'https://img.icons8.com/ios/24/000000/odnoklassniki.png',
                    href: 'https://ok.ru/agrousadba.belyptah'
                }
            ]
        }),
        computed: {
            ...mapState(['theme'])
        }
    }
</script>

<style>
  #footer {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>
